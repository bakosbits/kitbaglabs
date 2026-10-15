import type { ReactNode } from "react";

export const display = "font-display font-semibold";

/* Full-bleed band with a centred, max-width inner column. `outer` styles the band, `className` the column. */
export function Section({ id, labelledBy, outer = "", className = "", children }: { id?: string; labelledBy?: string; outer?: string; className?: string; children: ReactNode }) {
    return (
        <section className={`px-5 md:px-7 lg:px-12 ${outer}`} id={id} aria-labelledby={labelledBy}>
            <div className={`mx-auto max-w-340 ${className}`}>{children}</div>
        </section>
    );
}

export function PulseDot() {
    return (
        <span className="relative inline-block size-2 shrink-0 rounded-full bg-teal after:absolute after:-inset-1 after:rounded-full after:border after:border-teal/30" />
    );
}

export function Button({ href, large = false, className = "", children }: { href: string; large?: boolean; className?: string; children: ReactNode }) {
    return (
        <a
            className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-ink px-4 text-xs font-bold tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-teal-dark md:px-5 ${large ? "md:min-h-14" : "md:min-h-13"} ${className}`}
            href={href}
        >
            {children}
        </a>
    );
}

export function BrandLockup() {
    return (
        <a className="inline-flex min-w-fit items-center gap-2" href="/" aria-label="Kitbag Labs home">
            <img className="block object-contain size-16 md:size-24" src="/kitbag-logo.svg" alt="kitbag logo" />
            <span className="flex flex-col gap-0.25">
                <span className="font-display text-2xl leading-none font-bold tracking-tighter text-ink">kitbag{" "}<span className="text-teal-dark">labs</span></span>
            </span>
        </a>
    );
}
