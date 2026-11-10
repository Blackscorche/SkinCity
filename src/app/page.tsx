"use client";

import { FormEvent, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  detail: string;
  about: string;
  price: number;
  category: string;
  image: string;
  tone: string;
  badge?: string;
};

const products: Product[] = [
  { id: 1,  name: "Cloud Skin Tint",        detail: "Lightweight sheer coverage · 24 shades",    about: "Breathable, skin-hugging tint that blurs imperfections while letting your natural texture show through. SPF 30 included.",            price: 32, category: "Makeup",   image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=900&q=85", tone: "sand",  badge: "Bestseller" },
  { id: 2,  name: "Dew Drop Serum",         detail: "Hyaluronic acid + niacinamide · 30 ml",     about: "A plumping, pore-refining serum that floods skin with moisture. Layers perfectly under SPF or makeup.",                            price: 28, category: "Skincare", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85", tone: "sage",  badge: "New" },
  { id: 3,  name: "Soft Blur Lip",          detail: "Buildable matte colour · 8 shades",          about: "Feather-light formula that stays put all day without drying out. Blurs lip lines for a soft, editorial finish.",                   price: 24, category: "Makeup",   image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85", tone: "rose" },
  { id: 4,  name: "Ritual Body Oil",        detail: "Squalane + rosehip · 100 ml",               about: "Fast-absorbing luxury oil that leaves skin glowing—not greasy. Best applied to damp skin right after a shower.",                   price: 30, category: "Body",     image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=900&q=85", tone: "cream" },
  { id: 5,  name: "Glass Glow Highlighter", detail: "Finely milled luminous powder · 3 shades",  about: "Micro-fine pearl pigments deliver a lit-from-within highlight. Buildable from subtle sheen to full glow.",                        price: 26, category: "Makeup",   image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85", tone: "sand",  badge: "Fan Fave" },
  { id: 6,  name: "Barrier Cream",          detail: "Ceramides + oat extract · 50 ml",           about: "Strengthens and repairs the skin's natural barrier overnight. Rich but non-comedogenic—safe for all skin types.",                  price: 34, category: "Skincare", image: "https://images.unsplash.com/photo-1556228578-626a042f2a73?auto=format&fit=crop&w=900&q=85", tone: "cream", badge: "New" },
  { id: 7,  name: "Velvet Setting Powder",  detail: "Blurring translucent finish · 10 g",        about: "Sets foundation without cakiness. Locks in moisture and controls shine for up to 12 hours.",                                       price: 22, category: "Makeup",   image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85", tone: "rose" },
  { id: 8,  name: "Peptide Eye Gel",        detail: "Caffeine + tripeptide complex · 15 ml",     about: "De-puffs and brightens the under-eye area in 60 seconds flat. Cool metal applicator tip included.",                              price: 36, category: "Skincare", image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=900&q=85", tone: "sage" },
  { id: 9,  name: "Whipped Body Butter",   detail: "Shea + mango butter · 200 ml",              about: "Thick, cloud-like texture that melts on contact. Leaves skin butter-soft and lightly scented with vanilla musk.",                 price: 27, category: "Body",     image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85", tone: "cream" },
  { id: 10, name: "Tinted SPF 50",          detail: "Mineral sunscreen · 4 shades",              about: "Invisible mineral filter with a subtle tint to even skin tone. No white cast, no fragrance—everyday essential.",                  price: 29, category: "Skincare", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85", tone: "sand",  badge: "Must-have" },
  { id: 11, name: "Lash Lift Mascara",      detail: "Curved brush · buildable volume",           about: "Flexible polymer formula separates, lifts and curls every lash without clumping. Removes easily with warm water.",                 price: 20, category: "Makeup",   image: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?auto=format&fit=crop&w=900&q=85", tone: "rose" },
  { id: 12, name: "Exfoliating Body Scrub", detail: "Sugar + sea salt · 300 g",                  about: "Dual-texture scrub that buffs away dry skin and smooths texture. Infused with blue tansy and jojoba oil.",                        price: 25, category: "Body",     image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85", tone: "sage" },
];

const categories = ["All", "Makeup", "Skincare", "Body"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const visibleProducts = useMemo(
    () => products.filter((p) => activeCategory === "All" || p.category === activeCategory),
    [activeCategory]
  );
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  function addToCart(product: Product) {
    setCart((items) => [...items, product]);
    setCartOpen(true);
  }

  function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <main>
      {/* Announcement */}
      <div className="announcement">Free shipping on orders over $60 · made for your everyday</div>

      {/* Floating pill navbar */}
      <header className="site-header">
        <nav className="nav">
          <a className="logo" href="#">skincity<span>.</span></a>
          <div className="desktop-only nav-links">
            <a href="#shop" className="nav-pill">Shop</a>
            <a href="#story">Our story</a>
            <a href="#journal">Journal</a>
            <a href="#">Ingredients</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button className="desktop-only nav-search">🔍 Search</button>
            <button className="bag-button" onClick={() => setCartOpen(true)}>
              Bag <span>{cart.length}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1800&q=85">
          <source src="https://cdn.coverr.co/videos/coverr-a-woman-applying-makeup-1578/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Skin first · makeup second</p>
          <h1>Beauty<br /><em>unfiltered.</em></h1>
          <div className="hero-bottom">
            <a className="dark-button" href="#shop">Shop the edit <b>↗</b></a>
            <p>Simple formulas, serious results, zero perfection required.</p>
          </div>
        </div>
        <span className="scroll-hint">Scroll to explore ↓</span>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div>Good skin is a state of mind ✳&nbsp; Good skin is a state of mind ✳&nbsp; Good skin is a state of mind ✳&nbsp; Good skin is a state of mind ✳&nbsp; Good skin is a state of mind ✳&nbsp;</div>
      </div>

      {/* Shop */}
      <section id="shop" className="section shop-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow coral">The edit / 01</p>
            <h2>Best<br />sellers</h2>
          </div>
          <div className="filters">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "active" : ""}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-image ${product.tone}`}>
                <img src={product.image} alt={product.name} />
                {product.badge && <span className="badge">{product.badge}</span>}
                <button className="add-button" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`}>+</button>
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p className="product-detail">{product.detail}</p>
                  <p className="product-about">{product.about}</p>
                </div>
                <span className="product-price">${product.price}</span>
              </div>
              <button className="product-add-btn" onClick={() => addToCart(product)}>Add to bag ↗</button>
            </article>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="story">
        <div className="story-copy">
          <p className="eyebrow coral">Why SkinCity?</p>
          <div>
            <h2>Skin is<br /><em>in.</em></h2>
            <p>We make high-performance essentials that let your real skin do the talking. No rules, no retouching, no gatekeeping.</p>
          </div>
          <a href="#journal">Meet the city ↗</a>
        </div>
        <div className="story-image">
          <img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=85" alt="SkinCity products" />
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="section journal">
        <div className="journal-heading">
          <div>
            <p className="eyebrow coral">From the journal</p>
            <h2>In the<br />city</h2>
          </div>
          <span>More stories ↗</span>
        </div>
        <div className="journal-grid">
          {[
            ["01", "How to build a five-minute face",     "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85"],
            ["02", "The ritual of slowing down",          "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85"],
            ["03", "Colour, but make it easy",            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85"],
          ].map(([number, title, image]) => (
            <article key={number}>
              <div className="journal-image"><img src={image} alt="" /></div>
              <div className="journal-title"><span>{number}</span><h3>{title}</h3></div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <h2>Stay<br />glowy.</h2>
            <div className="newsletter">
              <p>Get first dibs on new drops, skin notes and a little joy in your inbox.</p>
              <form onSubmit={submitEmail}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email address" required />
                <button>{subscribed ? "Joined ✓" : "Sign me up ↗"}</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 SkinCity Cosmetics</span>
            <div>
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart drawer */}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Your bag</h2>
              <button onClick={() => setCartOpen(false)} aria-label="Close bag">×</button>
            </div>
            <div className="cart-items">
              {cart.length === 0
                ? <p className="empty-cart">Your bag is waiting for something good.</p>
                : cart.map((product, index) => (
                  <div className="cart-item" key={`${product.id}-${index}`}>
                    <img src={product.image} alt="" />
                    <div>
                      <h3>{product.name}</h3>
                      <p>${product.price}</p>
                    </div>
                    <button onClick={() => setCart((items) => items.filter((_, i) => i !== index))}>Remove</button>
                  </div>
                ))
              }
            </div>
            <div className="cart-total">
              <div><span>Total</span><span>${total}</span></div>
              <button className="checkout">Checkout ↗</button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
