import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLockup } from "./ui";

/* Section anchors only exist on the home page, so these links are hidden everywhere else. */
const navigation = [
    { label: "The studio", href: "#studio" },
    { label: "Our kit", href: "#kit" },
    { label: "How we think", href: "#approach" },
];

function Header({ home }: { home: boolean }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = home ? navigation : [];

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="relative z-20 border-b border-ink/15 bg-paper px-5 md:px-7 lg:px-12" id="top">
            <div className="mx-auto flex h-18 max-w-340 items-center justify-between md:h-24">
                <BrandLockup />
                <nav className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex" aria-label="Main navigation">
                    {links.map((item) => (
                        <a className="transition-colors duration-200 hover:text-teal-dark" key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
                    ))}
                    <a className="inline-flex items-center gap-2 rounded-sm border border-ink px-4 py-3 text-ink transition duration-200 hover:bg-ink hover:text-white" href="/contact" onClick={closeMenu}>Say hello <ArrowUpRight size={15} /></a>
                </nav>
                <button className="grid size-11 cursor-pointer place-items-center border border-ink/15 md:hidden" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            <nav className={`absolute inset-x-0 top-full flex flex-col overflow-hidden bg-paper px-5 transition-all duration-300 md:hidden ${menuOpen ? "max-h-64 border-b border-line pt-2 pb-3" : "max-h-0"}`} id="mobile-navigation" aria-label="Mobile navigation">
                {links.map((item) => (
                    <a className="flex items-center justify-between border-b border-line py-3 text-sm text-slate-600" key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ArrowUpRight className="text-teal-dark" size={16} /></a>
                ))}
                <a className="flex items-center justify-between py-3 text-sm font-bold text-teal" href="/contact" onClick={closeMenu}>Say hello <ArrowUpRight className="text-teal-dark" size={16} /></a>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-stone-200 px-5 pt-6 pb-4">
            <div className="mx-auto max-w-340">
                <div className="grid grid-cols-2 items-center gap-5 md:grid-cols-2">
                    <div className="justify-self-start">
                        <BrandLockup />
                    </div>
                    <nav className="col-start-2 justify-self-end flex flex-wrap items-center gap-4 font-medium text-sm md:gap-6">
                        <a href="/about" className="hover:text-teal-dark transition-colors">About</a>
                        <a href="/contact" className="hover:text-teal-dark transition-colors">Contact</a>
                        <a href="/terms" className="hover:text-teal-dark transition-colors">Terms</a>
                        <a href="/privacy" className="hover:text-teal-dark transition-colors">Privacy</a>
                    </nav>
                </div>
                <div className="flex flex-col items-start gap-2 border-t border-ink/10 pt-4 text-2xs font-bold tracking-widest text-slate-500 md:flex-row md:justify-between md:gap-4">
                    <span>© {new Date().getFullYear()} KITBAG LABS. ALL RIGHTS RESERVED</span>
                    <span>AN INDEPENDENT VENTURE STUDIO</span>
                </div>
            </div>
        </footer>
    );
}

export default function Layout({ home = false, children }: { home?: boolean; children: ReactNode }) {
    return (
        <>
            <a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-3 focus:text-white" href="#main">Skip to content</a>
            <Header home={home} />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
}
