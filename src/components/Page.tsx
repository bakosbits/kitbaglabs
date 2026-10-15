import type { ReactNode } from "react";
import { Section, SectionMarker, display } from "./ui";

/* Standard page opener: numbered marker, large display title, optional lead paragraph. */
export function PageIntro({ id, label, title, lead, centered = false, children }: { id: string; label: string; title: ReactNode; lead?: ReactNode; centered?: boolean; children?: ReactNode }) {
    return (
        <Section labelledBy={id} className="pt-6 pb-12 md:pt-7 md:pb-16 xl:px-16">
            <div className={centered ? "flex justify-center" : ""}><SectionMarker number="01" label={label} /></div>
            <h1 id={id} className={`${display} mt-12 max-w-4xl ${centered ? "mx-auto text-center" : ""} text-4xl leading-none tracking-tighter sm:text-5xl md:mt-16 md:text-6xl xl:text-7xl`}>{title}</h1>
            {lead && <p className={`mt-6 max-w-xl ${centered ? "mx-auto text-center" : ""} text-sm leading-relaxed text-slate-600 md:mt-8 md:text-base`}>{lead}</p>}
            {children}
        </Section>
    );
}

/* Long-form legal text: a titled list of clauses. */
export function LegalSections({ updated, sections }: { updated: string; sections: { title: string; body: ReactNode[] }[] }) {
    return (
        <Section className="border-t border-line pt-8 pb-18 md:pb-28 xl:px-16">
            <p className="mx-auto max-w-3xl text-2xs font-bold tracking-widest text-slate-500 uppercase">Last updated {updated}</p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-10">
                {sections.map((section, i) => (
                    <article key={section.title}>
                        <span className="text-2xs font-bold tracking-widest text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                        <h2 className={`${display} mt-3 mb-3 text-lg leading-tight tracking-tight md:text-xl`}>{section.title}</h2>
                        <div className="grid gap-3 text-xs leading-relaxed text-slate-600 md:text-sm">
                            {section.body.map((paragraph, j) => <p key={j}>{paragraph}</p>)}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}
