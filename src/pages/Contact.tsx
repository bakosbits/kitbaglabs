import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import Layout from "../components/Layout";
import { PageIntro } from "../components/Page";
import { Section } from "../components/ui";

type Status = "idle" | "sending" | "sent" | "error";

const field = "mt-2 block w-full rounded-sm border border-ink/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400";
const label = "text-2xs font-bold tracking-widest text-slate-500 uppercase";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");
    const initialSubject = new URLSearchParams(window.location.search).get("subject") ?? "";

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus("sending");
        setError("");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(new FormData(form))),
            });
            if (!response.ok) {
                const data = (await response.json().catch(() => null)) as { error?: string } | null;
                throw new Error(data?.error ?? "Something went wrong. Please try again.");
            }
            form.reset();
            setStatus("sent");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
            setStatus("error");
        }
    }

    return (
        <Layout>
            <PageIntro centered id="contact-page-title" label="CONTACT" title={<>How can we <span className="text-teal-dark">help</span>?</>} lead="Tell us what’s slowing you down, or ask about one of our products. We read everything." />
            <Section className="border-t border-line pt-8 pb-18 md:pb-28 xl:px-16">
                {status === "sent" ? (
                    <div className="mx-auto max-w-xl text-center" role="status">
                        <p className="font-display text-2xl font-semibold tracking-tight">Thanks, message sent.</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">We’ll get back to you soon.</p>
                    </div>
                ) : (
                    <form className="mx-auto grid max-w-xl gap-6" onSubmit={onSubmit}>
                        <label className="block">
                            <span className={label}>Name</span>
                            <input className={field} name="name" type="text" autoComplete="name" required maxLength={100} />
                        </label>
                        <label className="block">
                            <span className={label}>Subject</span>
                            <input className={field} name="subject" type="text" required maxLength={150} defaultValue={initialSubject} />
                        </label>
                        <div className="grid gap-6 md:grid-cols-2">
                            <label className="block">
                                <span className={label}>Email address</span>
                                <input className={field} name="email" type="email" autoComplete="email" required maxLength={200} />
                            </label>
                            <label className="block">
                                <span className={label}>Phone</span>
                                <input className={field} name="phone" type="tel" autoComplete="tel" maxLength={40} />
                            </label>
                        </div>
                        <label className="block">
                            <span className={label}>Message</span>
                            <textarea className={`${field} min-h-40 resize-y`} name="message" required maxLength={5000} />
                        </label>
                        {/* Honeypot: hidden from people, tempting to bots. */}
                        <input className="hidden" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                        {status === "error" && <p className="text-sm font-medium text-red-700" role="alert">{error}</p>}
                        <button className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 justify-self-center rounded-sm bg-ink px-5 text-xs font-bold tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-teal-dark disabled:cursor-wait disabled:opacity-60 md:min-h-13" type="submit" disabled={status === "sending"}>
                            {status === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={17} />
                        </button>
                    </form>
                )}
            </Section>
        </Layout>
    );
}
