"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { products, Product } from "@/lib/products";

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

  function addToCart(product: Product, e?: React.MouseEvent) {
    if (e) e.stopPropagation();
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
          <Link className="logo" href="/">skincity<span>.</span></Link>
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
              <Link href={`/product/${product.id}`} className={`product-image ${product.tone}`}>
                <img src={product.image} alt={product.name} />
                {product.badge && <span className="badge">{product.badge}</span>}
                <button
                  className="add-button"
                  onClick={(e) => addToCart(product, e)}
                  aria-label={`Add ${product.name} to bag`}
                >
                  +
                </button>
              </Link>
              <div className="product-info">
                <div>
                  <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                    <h3>{product.name}</h3>
                  </Link>
                  <p className="product-detail">{product.detail}</p>
                  <p className="product-about">{product.about}</p>
                </div>
                <span className="product-price">${product.price}</span>
              </div>
              <div className="product-card-actions">
                <Link href={`/product/${product.id}`} className="product-view-btn">
                  View Details
                </Link>
                <button className="product-add-btn" onClick={(e) => addToCart(product, e)}>
                  Add to bag ↗
                </button>
              </div>
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
