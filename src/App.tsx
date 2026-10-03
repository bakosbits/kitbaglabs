import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  FileText,
  MapPin,
  Menu,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  X,
} from "lucide-react";
import { products, type Product, type ProductGlyph } from "./data/products";

const navigation = [
  { label: "The studio", href: "#studio" },
  { label: "Our kit", href: "#kit" },
  { label: "How we think", href: "#approach" },
];

const sectionShell = "mx-auto w-[calc(100%_-_6rem)] max-w-[1360px] max-[1024px]:w-[calc(100%_-_3.5rem)] max-[700px]:w-[calc(100%_-_2.5rem)]";

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand-lockup inline-flex min-w-fit items-center gap-[11px]${compact ? " brand-lockup--compact" : ""}`} href="#top" aria-label="Kitbag Labs home">
      <img className="brand-mark" src="/kitbag-logo.svg" alt="" />
      <span className="brand-type">
        <span className="brand-name">kitbag<span>labs</span></span>
        {!compact && <span className="brand-descriptor">An independent venture studio</span>}
      </span>
    </a>
  );
}

function RouteMap() {
  return (
    <div className="route-map" aria-label="Kitbag Labs turns everyday friction into practical tools" role="img">
      <div className="route-map__caption route-map__caption--top"><span className="pulse-dot" /> BUILT FOR REAL LIFE</div>
      <svg className="route-map__lines" viewBox="0 0 580 480" fill="none" aria-hidden="true">
        <path d="M80 96C172 29 353 29 454 105C544 173 543 304 446 373C340 449 163 427 79 339C17 275 15 153 80 96Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 10" />
        <path d="M80 96C165 166 188 239 142 340M454 105C357 165 324 235 446 373M80 339C194 284 350 280 446 373M80 96C218 122 374 144 454 105" stroke="currentColor" strokeWidth="1.25" />
        <path d="M80 96C168 144 295 210 337 277C376 339 299 381 142 340" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" />
        <circle cx="80" cy="96" r="7" fill="#19ad98" />
        <circle cx="454" cy="105" r="7" fill="#19ad98" />
        <circle cx="142" cy="340" r="7" fill="#19ad98" />
        <circle cx="446" cy="373" r="7" fill="#19ad98" />
        <circle cx="337" cy="277" r="5" fill="#182246" />
      </svg>
      <div className="route-chip route-chip--one"><Sparkles size={14} /><span>AI, where it helps</span></div>
      <div className="route-chip route-chip--two"><span className="route-chip__icon"><ArrowDownRight size={15} /></span><span>Fewer little frictions</span></div>
      <div className="route-chip route-chip--three"><span className="route-chip__icon"><FileText size={15} /></span><span>Tools that do the work</span></div>
      <div className="route-chip route-chip--four"><span className="route-chip__icon"><ShoppingBag size={15} /></span><span>Everyday utility</span></div>
      <div className="route-map__center">
        <img src="/kitbag-logo.svg" alt="" />
        <span>THE EVERYDAY, MADE EASIER</span>
      </div>
    </div>
  );
}

function ProductArtwork({ glyph, accent }: { glyph: ProductGlyph; accent: string }) {
  if (glyph === "choice") {
    return (
      <div className="artwork artwork--choice" style={{ "--product-accent": accent } as React.CSSProperties} aria-hidden="true">
        <div className="choice-orbit choice-orbit--outer" />
        <div className="choice-orbit choice-orbit--inner" />
        <div className="choice-spark"><Sparkles size={29} strokeWidth={1.5} /></div>
        <span className="choice-tag choice-tag--a">the one</span>
        <span className="choice-tag choice-tag--b">good choice</span>
        <span className="choice-dot choice-dot--a" /><span className="choice-dot choice-dot--b" />
      </div>
    );
  }

  if (glyph === "documents") {
    return (
      <div className="artwork artwork--documents" style={{ "--product-accent": accent } as React.CSSProperties} aria-hidden="true">
        <div className="doc-stack doc-stack--back"><i /><i /><i /></div>
        <div className="doc-stack doc-stack--front"><span className="doc-stack__badge"><FileText size={17} /></span><i /><i /><i /><b /></div>
        <span className="doc-check">✓</span>
      </div>
    );
  }

  if (glyph === "discovery") {
    return (
    <div className="artwork artwork--discovery" style={{ "--product-accent": accent } as React.CSSProperties} aria-hidden="true">
      <span className="discovery-star discovery-star--one"><Sparkles size={24} strokeWidth={1.6} /></span>
      <span className="discovery-star discovery-star--two"><Sparkles size={17} strokeWidth={1.6} /></span>
      <span className="discovery-star discovery-star--three" />
      <div className="discovery-core"><span /><span /><span /></div>
      <div className="discovery-ring discovery-ring--one" /><div className="discovery-ring discovery-ring--two" />
    </div>
    );
  }

  return (
    <div className="artwork artwork--maphoist" style={{ "--product-accent": accent } as React.CSSProperties} aria-hidden="true">
      <div className="maphoist-streets" />
      <svg className="maphoist-route" viewBox="0 0 300 168" fill="none">
        <path d="M39 117C81 112 96 84 132 94C169 105 175 62 216 67C234 69 251 56 265 40" stroke="var(--product-accent)" strokeWidth="2" strokeDasharray="4 6" />
        <circle cx="39" cy="117" r="4" fill="var(--product-accent)" />
        <circle cx="265" cy="40" r="4" fill="var(--product-accent)" />
      </svg>
      <span className="maphoist-pin"><MapPin size={34} strokeWidth={1.5} /></span>
      <span className="maphoist-label"><TrendingUp size={13} /> LOCAL REACH</span>
      <span className="maphoist-nearby">NEARBY SEARCH</span>
    </div>
  );
}

function productInquiryHref(product: Product) {
  const subject = encodeURIComponent(`Tell me more about "${product.name}"`);
  return `mailto:hello@kitbaglabs.com?subject=${subject}`;
}

function ProductCard({ product }: { product: Product }) {
  const href = product.href ?? productInquiryHref(product);

  return (
    <article className={`product-card grid min-h-[220px] grid-cols-[7%_minmax(0,1fr)_minmax(220px,31%)] items-center gap-6 border-b border-white/20 py-[27px] max-[1024px]:grid-cols-[6%_minmax(0,1fr)_minmax(180px,30%)] max-[1024px]:gap-4 max-[700px]:grid-cols-[34px_1fr] max-[700px]:gap-[11px] max-[700px]:py-[23px]${product.status ? " product-card--upcoming" : ""}`}>
      <div className="product-card__number"><span>{product.number}</span><span className="product-card__dash" /></div>
      <div className="product-card__body">
        <div className="product-card__heading">
          <div>
            <span className="eyebrow product-card__category">{product.category}</span>
            <h3>{product.name}<span className="product-card__period">.</span></h3>
            <p className="product-card__domain">{product.domain ?? product.status}</p>
          </div>
          <a className="product-card__arrow" href={href} target={product.href ? "_blank" : undefined} rel={product.href ? "noreferrer" : undefined} aria-label={product.href ? `Explore ${product.name} (opens in a new tab)` : `Ask about ${product.name}`}>
            <ArrowUpRight size={20} strokeWidth={1.8} />
          </a>
        </div>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__foot"><span>{product.note}</span><a href={href} target={product.href ? "_blank" : undefined} rel={product.href ? "noreferrer" : undefined}>{product.href ? "Explore product" : `Ask about ${product.name}`} <ArrowRight size={15} /></a></div>
      </div>
      <div className="product-card__art max-[700px]:col-start-2"><ProductArtwork glyph={product.glyph} accent={product.accent} /></div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header relative z-20 border-b border-ink/15 bg-paper" id="top">
        <div className="header-inner mx-auto flex h-[92px] w-[calc(100%_-_6rem)] max-w-[1360px] items-center justify-between max-[1024px]:w-[calc(100%_-_3.5rem)] max-[700px]:h-[74px] max-[700px]:w-[calc(100%_-_2.5rem)]">
          <BrandLockup />
          <nav className={`primary-nav hidden items-center gap-[38px] text-[13px] font-medium text-[#49516b] min-[701px]:flex${menuOpen ? " primary-nav--open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Say hello <ArrowUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle hidden h-[42px] w-[42px] place-items-center border border-ink/15 bg-transparent max-[700px]:grid" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav className={`mobile-nav-wrap hidden max-[700px]:absolute max-[700px]:top-full max-[700px]:right-0 max-[700px]:left-0 max-[700px]:flex max-[700px]:max-h-0 max-[700px]:flex-col max-[700px]:gap-0 max-[700px]:overflow-hidden max-[700px]:bg-paper max-[700px]:px-5 max-[700px]:transition-[max-height,padding,border-width] max-[700px]:duration-300 min-[701px]:hidden${menuOpen ? " max-[700px]:max-h-[260px] max-[700px]:border-b max-[700px]:border-line max-[700px]:pt-2 max-[700px]:pb-3" : ""}`} id="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a className="flex items-center justify-between border-b border-line py-[13px] text-[13px] text-[#4f5870]" key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ArrowUpRight size={16} /></a>
          ))}
          <a className="mobile-nav-contact flex items-center justify-between py-[13px] text-[13px] font-bold text-teal" href="#contact" onClick={closeMenu}>Say hello <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="main">
        <section className={`hero ${sectionShell} grid grid-cols-[1.02fr_.98fr] items-center max-[1024px]:grid-cols-[1fr_.82fr] max-[700px]:flex max-[700px]:flex-col max-[700px]:items-stretch`} aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="pulse-dot" /> DAILY FRICTIONS. SIMPLE SOLUTIONS.</div>
            <h1 id="hero-title">A little less<br /><span>“I wish this</span><br /><span>were easier.”</span></h1>
            <p className="hero-lede">We develop solutions that make everyday work, and everyday life, run a little smoother.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#kit">Explore our solutions <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="hero-visual"><RouteMap /></div>
        </section>

        <section className={`studio-section ${sectionShell}`} id="studio" aria-labelledby="studio-title">
          <div className="section-marker"><span>01</span><span className="section-marker__line" /> THE STUDIO</div>
          <div className="studio-layout mx-[5.2%] mt-[76px] grid grid-cols-[1.04fr_.96fr] gap-[11%] max-[1024px]:mx-0 max-[1024px]:gap-[7%] max-[700px]:mt-12 max-[700px]:grid-cols-1">
            <div className="studio-heading">
              <h2 id="studio-title">We look for the<br />small things that<br /><em>slow us down.</em></h2>
            </div>
            <div className="studio-copy">
              <p className="studio-copy__lead">Kitbag Labs is a modern venture studio for practical ideas with a job to do.</p>
              <p>We spot everyday friction, then build hyper-focused solutions to remove it. Sometimes that means smarter workflows. Sometimes it means using AI to make a complicated task feel simple. Always, it means giving people a little more of their time back.</p>
              <div className="studio-audience"><span>FOR PEOPLE</span><span className="studio-audience__dot" /><span>FOR BUSINESS</span><span className="studio-audience__dot" /><span>FOR WHAT’S NEXT</span></div>
            </div>
          </div>
        </section>

        <section className={`approach-section ${sectionShell}`} id="approach" aria-labelledby="approach-title">
          <div className="approach-top flex items-start justify-between">
            <div className="section-marker"><span>02</span><span className="section-marker__line" /> OUR APPROACH</div>
            <p>Not more software for software’s sake.<br />Just a better way through.</p>
          </div>
          <h2 id="approach-title" className="approach-title">The right solution makes<br />the <span>complicated</span> feel<br />like second nature.</h2>
          <div className="approach-steps grid grid-cols-3 max-[700px]:grid-cols-1">
            <article className="approach-step">
              <span className="approach-step__index">01 / NOTICE</span>
              <h3>Start with the snag.</h3>
              <p>Find the repeated chore, the scattered information, the decision that takes longer than it should.</p>
            </article>
            <article className="approach-step">
              <span className="approach-step__index">02 / FOCUS</span>
              <h3>Keep the job clear.</h3>
              <p>Strip away the noise. Use automation and AI where they make a real difference, not just a talking point.</p>
            </article>
            <article className="approach-step">
              <span className="approach-step__index">03 / MAKE</span>
              <h3>Make it useful.</h3>
              <p>Ship a small, thoughtful solution that fits naturally into the day and earns its place there.</p>
            </article>
          </div>
        </section>

        <section className="products-section" id="products" aria-labelledby="products-title">
          <div className="products-wrap mx-auto w-[calc(100%_-_6rem)] max-w-[1360px] px-[5.2%] pt-[98px] pb-[38px] max-[1024px]:w-[calc(100%_-_3.5rem)] max-[1024px]:px-0 max-[700px]:w-[calc(100%_-_2.5rem)] max-[700px]:pt-[69px] max-[700px]:pb-[25px]">
            <div className="products-intro mb-[62px] grid grid-cols-[1fr_.47fr] items-end gap-[8%] max-[700px]:mb-[38px] max-[700px]:block">
              <div>
                <div className="section-marker section-marker--light"><span>03</span><span className="section-marker__line" /> THE KITBAG</div>
                <h2 id="products-title">Pragmatic solutions.<br /><span>Real momentum.</span></h2>
              </div>
              <p>A growing collection of focused tools and services for choices to make, work to move, new possibilities to find, and local businesses to grow.</p>
            </div>
            <div className="product-list">
              {products.map((product) => <ProductCard key={product.number} product={product} />)}
            </div>
          </div>
        </section>

        <section className={`contact-section ${sectionShell}`} id="contact" aria-labelledby="contact-title">
          <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="section-marker"><span>04</span><span className="section-marker__line" /> A GOOD PLACE TO START</div>
          <div className="contact-content mx-[5.2%] mt-[70px] flex items-end justify-between gap-8 max-[1024px]:mx-0 max-[700px]:mt-12 max-[700px]:block">
            <div>
              <h2 id="contact-title">Got a little<br />friction of your own?</h2>
              <p>We’re always curious about the everyday problems worth making easier.</p>
            </div>
            <a className="button button--dark" href="mailto:hello@kitbaglabs.com?subject=I%20have%20friction">Let’s talk about it <ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main grid min-h-[75px] grid-cols-[1fr_1fr_auto] items-center gap-5 max-[700px]:grid-cols-[1fr_auto]">
          <BrandLockup compact />
          <p>Complex problems, pragmatic solutions</p>
          <a className="footer-top" href="#top">Back to the top <ArrowUpRight size={15} /></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} KITBAG LABS</span><span>AN INDEPENDENT VENTURE STUDIO <span className="footer-bottom__dot">●</span> BUILT FOR EVERYDAY</span></div>
      </footer>
    </>
  );
}

export default App;
