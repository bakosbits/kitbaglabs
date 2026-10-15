/* Serves the static site (via the assets binding) and handles POST /api/contact by sending mail through the send_email binding. */

interface Env {
    ASSETS: { fetch(request: Request): Promise<Response> };
    EMAIL: {
        send(message: { to: string; from: string; replyTo?: string; subject: string; text: string }): Promise<{ messageId: string }>;
    };
    CONTACT_TO: string;
    CONTACT_FROM: string;
}

const json = (body: unknown, status = 200) => Response.json(body, { status });
const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");
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

    try {
        await env.EMAIL.send({
            to: env.CONTACT_TO,
            from: env.CONTACT_FROM,
            replyTo: email,
            subject: `[Kitbag Labs] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "(not provided)"}\nSubject: ${subject}\n\n${message}\n`,
        });
    } catch (err) {
        console.error("send_email failed", err);
        return json({ error: "We couldn’t send your message. Please try again shortly." }, 502);
    }
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
