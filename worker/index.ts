/* Serves the static site (via the assets binding) and handles POST /api/contact by sending mail through the send_email binding. */

interface SendEmail {
    send(message: { to: string; from: string; replyTo?: string; subject: string; text: string; html: string }): Promise<{ messageId: string }>;
}

interface Env {
    ASSETS: { fetch(request: Request): Promise<Response> };
    EMAIL: SendEmail;
    CONTACT_TO: string;
    CONTACT_FROM: string;
}

const json = (body: unknown, status = 200) => Response.json(body, { status });
const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function sendEmail(args: {
    binding: SendEmail;
    email_to: string;
    email_from: string;
    replyTo?: string;
    subject: string;
    htmlBody: string;
    textBody: string;
}): Promise<boolean> {
    try {
        await args.binding.send({
            to: args.email_to,
            from: args.email_from,
            replyTo: args.replyTo,
            subject: args.subject,
            text: args.textBody,
            html: args.htmlBody,
        });
        return true;
    } catch (err) {
        console.error("[email] send failed:", err instanceof Error ? err.message : err);
        return false;
    }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handleContact(request: Request, env: Env): Promise<Response> {
    let data: Record<string, unknown>;
    try {
        data = await request.json();
    } catch {
        return json({ error: "Invalid request." }, 400);
    }

    // Honeypot filled in: pretend success so bots move on.
    if (clean(data.website, 200)) return json({ ok: true });

    const name = clean(data.name, 100);
    const subject = clean(data.subject, 150).replace(/[\r\n]+/g, " ");
    const email = clean(data.email, 200);
    const phone = clean(data.phone, 40);
    const message = clean(data.message, 5000);

    if (!name || !subject || !message) return json({ error: "Please fill in your name, a subject, and a message." }, 400);
    if (!emailPattern.test(email)) return json({ error: "Please enter a valid email address." }, 400);

    const sent = await sendEmail({
        binding: env.EMAIL,
        email_to: env.CONTACT_TO,
        email_from: env.CONTACT_FROM,
        replyTo: email,
        subject: `[Kitbag Labs] ${subject}`,
        textBody: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "(not provided)"}\nSubject: ${subject}\n\n${message}\n`,
        htmlBody: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Phone:</strong> ${escapeHtml(phone || "(not provided)")}<br><strong>Subject:</strong> ${escapeHtml(subject)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    if (!sent) return json({ error: "We couldn’t send your message. Please try again shortly." }, 502);
    return json({ ok: true });
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const { pathname } = new URL(request.url);
        if (pathname === "/api/contact") {
            return request.method === "POST" ? handleContact(request, env) : json({ error: "Method not allowed." }, 405);
        }
        return env.ASSETS.fetch(request);
    },
};
