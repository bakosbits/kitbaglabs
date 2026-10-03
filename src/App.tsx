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
  { label: "Our products", href: "#products" },
  { label: "How we think", href: "#approach" },
];

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand-lockup${compact ? " brand-lockup--compact" : ""}`} href="#top" aria-label="Kitbag Labs home">
      <img className="brand-mark" src="/kitbag-logo.svg" alt="" />
      <span className="brand-type">
        <span className="brand-name">kitbag<span>labs</span></span>
        {!compact && <span className="brand-descriptor">Independent venture studio</span>}
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
      <div className="route-map__caption route-map__caption--bottom">OBSERVE <span>—</span> MAKE <span>—</span> REFINE</div>
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

function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product-card${product.status ? " product-card--upcoming" : ""}`}>
      <div className="product-card__number"><span>{product.number}</span><span className="product-card__dash" /></div>
      <div className="product-card__body">
        <div className="product-card__heading">
          <div>
            <span className="eyebrow product-card__category">{product.category}</span>
            <h3>{product.name}<span className="product-card__period">.</span></h3>
            <p className="product-card__domain">{product.domain ?? product.status}</p>
          </div>
          <a className="product-card__arrow" href={product.href ?? "#contact"} target={product.href ? "_blank" : undefined} rel={product.href ? "noreferrer" : undefined} aria-label={product.href ? `Explore ${product.name} (opens in a new tab)` : `Ask about ${product.name}`}>
            <ArrowUpRight size={20} strokeWidth={1.8} />
          </a>
        </div>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__foot"><span>{product.note}</span><a href={product.href ?? "#contact"} target={product.href ? "_blank" : undefined} rel={product.href ? "noreferrer" : undefined}>{product.href ? "Explore product" : "Ask about Maphoist"} <ArrowRight size={15} /></a></div>
      </div>
      <div className="product-card__art"><ProductArtwork glyph={product.glyph} accent={product.accent} /></div>
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
      <header className="site-header" id="top">
        <div className="header-inner">
          <BrandLockup />
          <nav className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Say hello <ArrowUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav className={`mobile-nav-wrap${menuOpen ? " mobile-nav-wrap--open" : ""}`} id="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ArrowUpRight size={16} /></a>
          ))}
          <a className="mobile-nav-contact" href="#contact" onClick={closeMenu}>Say hello <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="pulse-dot" /> SMALL FRICTIONS. SIMPLE SOLUTIONS.</div>
            <h1 id="hero-title">A little less<br /><span>“I wish this</span><br /><span>were easier.”</span></h1>
            <p className="hero-lede">We deliver focused solutions that make everyday work, and everyday life, run a little smoother.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#products">Explore our products <ArrowRight size={17} /></a>
              <a className="text-link" href="#studio">Meet the studio <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-footnote"><span>INDEPENDENT BY DESIGN</span><span className="hero-footnote__line" /><span>USEFUL BY DEFAULT</span></div>
          </div>
          <div className="hero-visual"><RouteMap /></div>
          <a className="hero-scroll" href="#studio" aria-label="Scroll to learn about the studio"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
        </section>

        <section className="studio-section section-wrap" id="studio" aria-labelledby="studio-title">
          <div className="section-marker"><span>01</span><span className="section-marker__line" /> THE STUDIO</div>
          <div className="studio-layout">
            <div className="studio-heading">
              <h2 id="studio-title">We look for the<br />small things that<br /><em>slow us down.</em></h2>
              <span className="hand-note"><span className="hand-note__arrow">↘</span> That’s where better tools begin.</span>
            </div>
            <div className="studio-copy">
              <p className="studio-copy__lead">Kitbag Labs is a modern venture studio for practical ideas with a job to do.</p>
              <p>We spot everyday friction, then build hyper-focused software to remove it. Sometimes that means smarter workflows. Sometimes it means using AI to make a complicated task feel simple. Always, it means giving people a little more of their time back.</p>
              <div className="studio-audience"><span>FOR PEOPLE</span><span className="studio-audience__dot" /><span>FOR BUSINESS</span><span className="studio-audience__dot" /><span>FOR WHAT’S NEXT</span></div>
            </div>
          </div>
        </section>

        <section className="approach-section section-wrap" id="approach" aria-labelledby="approach-title">
          <div className="approach-top">
            <div className="section-marker"><span>02</span><span className="section-marker__line" /> OUR APPROACH</div>
            <p>Not more software for software’s sake.<br />Just a better way through.</p>
          </div>
          <h2 id="approach-title" className="approach-title">A good solution makes<br />the <span>complicated</span> feel<br />like second nature.</h2>
          <div className="approach-steps">
            <article className="approach-step">
              <span className="approach-step__index">01 / NOTICE</span>
              <h3>Start with the snag.</h3>
              <p>Find the repeated chore, the scattered information, the decision that takes longer than it should.</p>
            </article>
            <article className="approach-step">
              <span className="approach-step__index">02 / FOCUS</span>
              <h3>Keep the job clear.</h3>
              <p>Strip away the noise. Use automation and AI where they make a real difference—not just a talking point.</p>
            </article>
            <article className="approach-step">
              <span className="approach-step__index">03 / MAKE</span>
              <h3>Make it useful.</h3>
              <p>Ship a small, thoughtful solution that fits naturally into the day and earns its place there.</p>
            </article>
          </div>
        </section>

        <section className="products-section" id="products" aria-labelledby="products-title">
          <div className="products-wrap">
            <div className="products-intro">
              <div>
                <div className="section-marker section-marker--light"><span>03</span><span className="section-marker__line" /> THE KITBAG</div>
                <h2 id="products-title">Simple solutions.<br /><span>Real momentum.</span></h2>
              </div>
              <p>A growing collection of focused tools and services for choices to make, work to move, new possibilities to find, and local businesses to grow.</p>
            </div>
            <div className="product-list">
              {products.map((product) => <ProductCard key={product.number} product={product} />)}
            </div>
            <div className="products-footer"><span>MORE USEFUL IDEAS, IN THE WORKS.</span><span className="products-footer__rule" /><span>CHECK BACK SOON <ArrowDownRight size={15} /></span></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="section-marker"><span>04</span><span className="section-marker__line" /> A GOOD PLACE TO START</div>
          <div className="contact-content">
            <div>
              <h2 id="contact-title">Got a little<br />friction of your own?</h2>
              <p>We're always curious about the everyday problems worth making easier.</p>
            </div>
            <a className="button button--dark" href="mailto:hello@kitbaglabs.com?subject=An%20everyday%20friction%20worth%20fixing">Let’s talk about it <ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <BrandLockup compact />
          <p>Complex problems,<br />packed down to everyday utilities.</p>
          <a className="footer-top" href="#top">Back to the top <ArrowUpRight size={15} /></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} KITBAG LABS</span><span>INDEPENDENT VENTURE STUDIO <span className="footer-bottom__dot">●</span> BUILT FOR EVERYDAY</span></div>
      </footer>
    </>
  );
}

export default App;
