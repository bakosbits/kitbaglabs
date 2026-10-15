import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    FileText,
    MapPin,
    Sparkles,
    ShoppingBag,
    TrendingUp,
} from "lucide-react";
import { products, type Product, type ProductGlyph } from "../data/products";
import { Button, PulseDot, Section, SectionMarker, display } from "../components/ui";

function RouteChip({ position, icon, children }: { position: string; icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className={`absolute z-10 flex items-center gap-2 rounded-sm border border-ink/10 bg-white/90 px-2 py-1.5 text-2xs font-semibold whitespace-nowrap text-slate-600 shadow-lg shadow-ink/10 md:px-3 md:py-2.5 [&_svg]:size-3 [&_svg]:text-teal-dark md:[&_svg]:size-4 ${position}`}>
            {icon}<span>{children}</span>
        </div>
    );
}

function RouteMap() {
    return (
        <div className="relative mx-auto aspect-7/6 w-full max-w-lg text-slate-300 lg:max-w-xl" aria-label="Kitbag Labs turns everyday friction into practical tools" role="img">
            <div className="absolute top-3 left-8 z-10 flex items-center gap-2 text-2xs font-bold tracking-widest text-slate-500"><PulseDot />FOR YOUR BUSY LIFE</div>
            <svg className="absolute top-[5%] left-[4%] h-11/12 w-11/12 overflow-visible" viewBox="0 0 580 480" fill="none" aria-hidden="true">
                <path d="M80 96C172 29 353 29 454 105C544 173 543 304 446 373C340 449 163 427 79 339C17 275 15 153 80 96Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 10" />
                <path d="M80 96C165 166 188 239 142 340M454 105C357 165 324 235 446 373M80 339C194 284 350 280 446 373M80 96C218 122 374 144 454 105" stroke="currentColor" strokeWidth="1.25" />
                <path d="M80 96C168 144 295 210 337 277C376 339 299 381 142 340" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" />
                <circle cx="80" cy="96" r="7" fill="#19ad98" />
                <circle cx="454" cy="105" r="7" fill="#19ad98" />
                <circle cx="142" cy="340" r="7" fill="#19ad98" />
                <circle cx="446" cy="373" r="7" fill="#19ad98" />
                <circle cx="337" cy="277" r="5" fill="#182246" />
            </svg>
            <RouteChip position="top-1/5 right-2" icon={<Sparkles />}>AI, where it helps</RouteChip>
            <RouteChip position="top-2/5 left-0 md:-left-3" icon={<ArrowDownRight />}>Less friction</RouteChip>
            <RouteChip position="right-0 bottom-1/5" icon={<FileText />}>Tools that do the work</RouteChip>
            <RouteChip position="bottom-1/6 left-1/6" icon={<ShoppingBag />}>Everyday utility</RouteChip>
            <div className="absolute top-1/2 left-1/2 z-10 flex size-32 -translate-1/2 flex-col items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/90 px-3 text-center shadow-2xl shadow-ink/10 md:size-36 lg:size-40">
                <img className="size-12 object-contain md:size-16 lg:size-20" src="/kitbag-logo.svg" alt="" />
                <span className="text-2xs font-bold tracking-widest text-slate-500">THE EVERYDAY, MADE EASIER</span>
            </div>
        </div>
    );
}

/* Product artwork: each piece is tinted by the product's accent colour via --product-accent. */
const glow = "bg-radial from-(color:--product-accent)/15 to-transparent to-70%";
const accentBg = "bg-(color:--product-accent)";
const accentRing = "border-(color:--product-accent)/50";

function ArtFrame({ accent, glow, children }: { accent: string; glow: string; children: React.ReactNode }) {
    return (
        <div className={`absolute inset-0 overflow-hidden ${glow}`} style={{ "--product-accent": accent } as React.CSSProperties} aria-hidden="true">
            {children}
        </div>
    );
}

function DocLine({ className }: { className: string }) {
    return <span className={`mb-2 block h-0.5 ${className}`} />;
}

const artTag = "absolute border border-white/20 bg-ink-soft px-2 py-1 text-2xs tracking-wider text-slate-100";

function ProductArtwork({ glyph, accent }: { glyph: ProductGlyph; accent: string }) {
    if (glyph === "choice") {
        return (
            <ArtFrame accent={accent} glow={glow}>
                <div className={`absolute top-1/2 left-1/2 h-26 w-41 -translate-1/2 -rotate-20 rounded-full border ${accentRing}`} />
                <div className={`absolute top-1/2 left-1/2 h-17 w-26 -translate-1/2 rotate-30 rounded-full border border-dashed ${accentRing}`} />
                <div className={`absolute top-1/2 left-1/2 grid size-14 -translate-1/2 place-items-center rounded-full text-ink ${accentBg}`}><Sparkles size={29} strokeWidth={1.5} /></div>
                <span className={`${artTag} top-1/2 left-1/2 -mt-10 -ml-23 -rotate-8`}>the one</span>
                <span className={`${artTag} right-1/2 bottom-1/2 -mr-26 -mb-10 rotate-6`}>good choice</span>
                <span className={`absolute top-3/10 left-2/3 size-2 rounded-full ${accentBg}`} />
                <span className={`absolute bottom-1/5 left-1/4 size-1 rounded-full ${accentBg}`} />
            </ArtFrame>
        );
    }

    if (glyph === "documents") {
        return (
            <ArtFrame accent={accent} glow={glow}>
                <div className={`absolute top-6 left-1/2 -ml-9 h-27 w-22 rotate-10 border bg-ink-soft px-3.5 pt-7 opacity-75 ${accentRing}`}>
                    <DocLine className="w-full bg-white/35" /><DocLine className="w-full bg-white/35" /><DocLine className="w-full bg-white/35" />
                </div>
                <div className="absolute top-7 left-1/2 -ml-15 h-27 w-22 -rotate-8 border border-white/70 bg-paper px-3.5 pt-7 shadow-xl shadow-black/20">
                    <span className={`absolute -top-3 left-3 grid size-7 place-items-center text-ink ${accentBg}`}><FileText size={17} /></span>
                    <DocLine className="w-full bg-slate-300" /><DocLine className="w-3/4 bg-slate-300" /><DocLine className="w-5/6 bg-slate-300" />
                    <span className={`mt-3 block h-1 w-5 ${accentBg}`} />
                </div>
                <span className={`absolute top-16 left-1/2 z-10 ml-11 grid size-7 place-items-center rounded-full border-2 border-ink-soft text-xs font-bold text-ink ${accentBg}`}>✓</span>
            </ArtFrame>
        );
    }

    if (glyph === "discovery") {
        return (
            <ArtFrame accent={accent} glow={glow}>
                <span className="absolute top-1/4 left-1/3 z-10 text-(color:--product-accent)"><Sparkles size={24} strokeWidth={1.6} /></span>
                <span className="absolute right-1/3 bottom-1/4 z-10 text-(color:--product-accent)"><Sparkles size={17} strokeWidth={1.6} /></span>
                <span className="absolute top-1/3 right-1/3 z-10 size-1 rounded-full bg-white" />
                <div className="absolute top-1/2 left-1/2 flex size-14 -translate-1/2 items-center justify-center gap-1 rounded-full border border-white/50 bg-ink-soft">
                    <span className={`size-1.5 rounded-full ${accentBg}`} />
                    <span className={`size-2 rounded-full ${accentBg}`} />
                    <span className={`size-1.5 rounded-full ${accentBg}`} />
                </div>
                <div className={`absolute top-1/2 left-1/2 size-36 -translate-1/2 rounded-full border ${accentRing}`} />
                <div className={`absolute top-1/2 left-1/2 size-24 -translate-1/2 rounded-full border border-dashed ${accentRing}`} />
            </ArtFrame>
        );
    }

    return (
        <ArtFrame accent={accent} glow={glow}>
            <div className="absolute -inset-1/3 flex -rotate-12 flex-col justify-evenly" aria-hidden="true">
                {Array.from({ length: 6 }, (_, i) => <span key={i} className="border-t border-white/10" />)}
            </div>
            <div className="absolute -inset-1/3 flex -rotate-12 justify-evenly" aria-hidden="true">
                {Array.from({ length: 8 }, (_, i) => <span key={i} className="border-l border-white/10" />)}
            </div>
            <svg className="absolute inset-0 size-full" viewBox="0 0 300 168" fill="none">
                <path d="M39 117C81 112 96 84 132 94C169 105 175 62 216 67C234 69 251 56 265 40" stroke="var(--product-accent)" strokeWidth="2" strokeDasharray="4 6" />
                <circle cx="39" cy="117" r="4" fill="var(--product-accent)" />
                <circle cx="265" cy="40" r="4" fill="var(--product-accent)" />
            </svg>
            <span className={`absolute top-3/10 left-1/2 grid size-12 place-items-center rounded-full text-ink shadow-lg shadow-black/25 ring-8 ring-(color:--product-accent)/20 ${accentBg}`}><MapPin size={34} strokeWidth={1.5} /></span>
            <span className="absolute right-3 bottom-6 inline-flex items-center gap-1.5 border border-white/15 bg-ink-soft px-2 py-1.5 text-2xs font-bold tracking-widest text-slate-100"><TrendingUp className="text-(color:--product-accent)" size={13} /> LOCAL REACH</span>
            <span className="absolute top-5 left-4 text-2xs font-bold tracking-widest text-slate-300">NEARBY SEARCH</span>
        </ArtFrame>
    );
}

function productInquiryHref(product: Product) {
    const subject = encodeURIComponent(`Tell me more about "${product.name}"`);
    return `/contact?subject=${subject}`;
}

function ProductCard({ product }: { product: Product }) {
    const href = product.href ?? productInquiryHref(product);
    const external = product.href ? { target: "_blank", rel: "noreferrer" } : {};

    return (
        <article className="grid grid-cols-12 items-center gap-x-3 gap-y-3 border-b border-white/20 py-6 md:min-h-55 md:gap-x-4 md:py-7 lg:gap-x-6">
            <div className="col-span-1 row-span-2 self-start pt-1.5 font-display text-xs leading-none font-medium text-slate-400 md:row-span-1">
                <span>{product.number}</span>
                <span className="mt-3 block h-px w-5 bg-teal" />
            </div>
            <div className="col-span-11 min-w-0 md:col-span-7 md:pr-4">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <span className="text-2xs font-bold tracking-widest text-slate-300 uppercase">{product.category}</span>
                        <h3 className={`${display} mt-2 text-4xl leading-none tracking-tighter text-white lg:text-5xl`}>{product.name}<span className="text-teal">.</span></h3>
                        <p className="mt-2 text-xs tracking-wide text-slate-400">{product.note}</p>
                    </div>
                    <a
                        className="grid size-8 shrink-0 place-items-center rounded-full border border-white/40 text-white transition duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-teal hover:bg-teal hover:text-ink md:size-9"
                        href={href}
                        {...external}
                        aria-label={product.href ? `Explore ${product.name} (opens in a new tab)` : `Ask about ${product.name}`}
                    >
                        <ArrowUpRight size={20} strokeWidth={1.8} />
                    </a>
                </div>
                <p className="mt-3 mb-4 max-w-lg text-xs leading-relaxed text-slate-300 md:mt-4">{product.description}</p>
                <a className="group inline-flex items-center gap-1.5 font-semibold whitespace-nowrap text-slate-200" href={href} {...external}>
                    {product.href ? `Explore ${product.name}` : `Ask about ${product.name}`}
                    <ArrowRight className="transition-transform group-hover:translate-x-1" size={15} />
                </a>
            </div>
            <div className="relative col-span-11 col-start-2 h-32 min-w-0 overflow-hidden border border-white/10 bg-white/5 md:col-span-4 md:col-start-auto md:h-42">
                <ProductArtwork glyph={product.glyph} accent={product.accent} />
            </div>
        </article>
    );
}

const approachSteps = [
    { index: "01 / NOTICE", title: "Start with the snag.", body: "Find the repeated chore, the scattered information, the task that takes longer than it should." },
    { index: "02 / FOCUS", title: "Keep the job clear.", body: "Strip away the noise. Use automation and agentic AI where they make a real difference." },
    { index: "03 / MAKE", title: "Make it useful.", body: "Ship a small, thoughtful solution that fits naturally into the day and earns its place there." },
];

export default function Home() {
    return (
        <>
                <Section labelledBy="hero-title" className="relative grid overflow-hidden pt-14 pb-18 md:min-h-160 md:grid-cols-5 md:items-center md:pt-16 md:pb-24 lg:min-h-175 lg:grid-cols-2">
                    <div className="relative z-10 md:col-span-3 md:pt-6 lg:col-span-1 xl:pl-16">
                        <div className="mb-6 flex items-center gap-2 text-2xs font-bold tracking-widest text-slate-500 uppercase md:mb-7"><PulseDot /> PRAGMATIC SOLUTIONS FOR DAILY FRICTIONS</div>
                        <h1 className={`${display} max-w-3xl text-5xl leading-none tracking-tighter sm:text-6xl lg:text-7xl 2xl:text-8xl`} id="hero-title">
                            A little less<br /><span className="text-slate-400">friction</span><br /><span className="text-slate-400"></span>
                        </h1>
                        <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 md:mt-7 md:text-base">We research and build solutions that make everyday work, and everyday life, run a little smoother.</p>
                        <div className="mt-6 flex md:mt-8">
                            <Button href="#kit">Explore our solutions <ArrowRight size={17} /></Button>
                        </div>
                    </div>
                    <div className="hidden items-center justify-center md:col-span-2 md:flex lg:col-span-1"><RouteMap /></div>
                </Section>

                <Section id="studio" labelledBy="studio-title" className="border-t border-line pt-6 pb-18 md:pb-28">
                    <SectionMarker number="01" label="THE STUDIO" />
                    <div className="mt-12 grid md:mt-20 md:grid-cols-2 md:gap-12 lg:gap-16 xl:mx-16">
                        <h2 className={`${display} text-4xl leading-none tracking-tighter sm:text-5xl xl:text-6xl`} id="studio-title">
                            We look for the{" "}<br className="hidden md:inline" />small things that{" "}<br className="hidden md:inline" /><em className="text-teal-dark not-italic">slow us down.</em>
                        </h2>
                        <div className="pt-9 text-sm leading-loose text-slate-600 md:pt-2">
                            <p className="max-w-lg font-display text-lg leading-relaxed font-medium tracking-tight text-ink md:text-xl">Kitbag Labs is a modern venture studio for practical ideas with a job to do.</p>
                            <p className="max-w-lg">We spot the friction, then build hyper-focused solutions to remove it. Sometimes that means smarter workflows. Some times it's a service offering. Sometimes it means using AI to make a complicated task feel simple. Always, it means giving people a little more of their time back.</p>
                            <div className="mt-8 flex flex-wrap items-center gap-3 text-2xs font-bold tracking-widest text-slate-500">
                                <span>FOR PEOPLE</span><span className="size-1 rounded-full bg-teal" /><span>FOR BUSINESS</span><span className="size-1 rounded-full bg-teal" /><span>FOR WHAT’S NEXT</span>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="approach" labelledBy="approach-title" className="border-t border-line pt-6 pb-18 md:pb-28 xl:px-16">
                    <div className="flex items-start justify-between">
                        <SectionMarker number="02" label="OUR APPROACH" />
                    </div>
                    <h2 id="approach-title" className={`${display} mt-12 mb-10 text-4xl leading-none tracking-tighter sm:text-5xl md:mt-16 md:text-6xl md:mb-16 lg:text-7xl xl:text-8xl`}>
                        The right solution makes{" "}<br className="hidden md:inline" />the <span className="text-teal-dark">complicated</span> feel{" "}<br className="hidden md:inline" />like second nature.
                    </h2>
                    <div className="grid border-t border-line md:grid-cols-3">
                        {approachSteps.map((step, i) => (
                            <article key={step.index} className={`border-b border-line py-5 md:border-b-0 md:pt-6 md:pr-8 md:pb-0${i > 0 ? " md:border-l md:pl-8" : ""}`}>
                                <span className="text-2xs font-bold tracking-widest text-slate-500">{step.index}</span>
                                <h3 className={`${display} mt-4 mb-2 text-lg leading-tight tracking-tight md:mt-7 md:mb-3 md:text-xl`}>{step.title}</h3>
                                <p className="max-w-sm text-xs leading-relaxed text-slate-500 md:max-w-xs">{step.body}</p>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="kit" labelledBy="products-title" outer="overflow-hidden bg-ink text-white" className="pt-16 pb-6 md:pt-24 md:pb-10 xl:px-16">
                    <div className="mb-10 grid md:mb-16 md:grid-cols-3 md:items-end md:gap-12">
                        <div className="md:col-span-2">
                            <SectionMarker number="03" label="THE KITBAG" light />
                            <h2 id="products-title" className={`${display} mt-7 text-4xl leading-none tracking-tighter sm:text-5xl md:mt-9 md:text-6xl xl:text-7xl`}>
                                Pragmatic solutions.{" "}<br className="hidden md:inline" /><span className="text-slate-300">Real momentum.</span>
                            </h2>
                        </div>
                    </div>
                    <div className="border-t border-white/20">
                        {products.map((product) => <ProductCard key={product.number} product={product} />)}
                    </div>
                </Section>

                <Section id="contact" labelledBy="contact-title" className="relative overflow-hidden pt-6 pb-18 md:pt-7 md:pb-26 xl:px-16">
                    <div className="absolute top-8 -right-20 size-52 rounded-full border border-teal/20 before:absolute before:inset-5 before:rounded-full before:border before:border-teal/20 after:absolute after:inset-10 after:rounded-full after:border after:border-teal/20 md:top-6 md:-right-26 md:size-72 md:before:inset-7 md:after:inset-15" aria-hidden="true">
                        <span className="absolute top-11 left-13 z-10 size-2 rounded-full bg-teal" />
                        <span className="absolute right-13 bottom-20 z-10 size-1.5 rounded-full bg-teal" />
                        <span className="absolute top-43 left-22 z-10 size-1 rounded-full bg-ink" />
                    </div>
                    <SectionMarker number="04" label="A GOOD PLACE TO START" />
                    <div className="relative z-10 mt-12 flex flex-col md:mt-18 md:flex-row md:items-end md:justify-between md:gap-8">
                        <div>
                            <h2 id="contact-title" className={`${display} text-4xl leading-none tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl`}>Got a little{" "}<br className="hidden md:inline" />friction of your own?</h2>
                            <p className="mt-5 max-w-xs text-xs leading-relaxed text-slate-500 md:max-w-none md:text-sm">We’re always curious about the everyday problems worth making easier.</p>
                        </div>
                        <Button large className="mt-7 self-start whitespace-nowrap md:mt-0 md:mb-2 md:self-auto" href="/contact">Let’s talk about it <ArrowUpRight size={18} /></Button>
                    </div>
                </Section>
        </>
    );
}
