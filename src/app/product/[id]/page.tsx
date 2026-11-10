"use client";

import { use, useState } from "react";
import Link from "next/link";
import { getProductById, Product, Review } from "@/lib/products";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id, 10);
  const product = getProductById(productId);

  const [activeTab, setActiveTab] = useState<"about" | "ingredients" | "howToUse">("about");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [reviewsList, setReviewsList] = useState<Review[]>(product?.reviews || []);
  const [cartCount, setCartCount] = useState(0);
  const [addedAlert, setAddedAlert] = useState(false);

  // Review Form state
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!product) {
    return (
      <main style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <p style={{ marginTop: "16px" }}>The product you are looking for does not exist.</p>
        <Link href="/" className="dark-button" style={{ display: "inline-block", marginTop: "24px" }}>
          Return to Shop ↗
        </Link>
      </main>
    );
  }

  const currentImage = selectedImage || product.image;
  const avgRating = reviewsList.length
    ? (reviewsList.reduce((acc, r) => acc + r.rating, 0) / reviewsList.length).toFixed(1)
    : "5.0";

  function handleAddToCart() {
    setCartCount((c) => c + 1);
    setAddedAlert(true);
    setTimeout(() => setAddedAlert(false), 2500);
  }

  function handleAddReview(e: React.FormEvent) {
    e.preventDefault();
    if (!authorName.trim() || !reviewBody.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      author: authorName,
      avatar: authorName.substring(0, 2).toUpperCase(),
      rating,
      date: "Just now",
      title: reviewTitle || "Great product!",
      body: reviewBody,
      verified: true,
    };

    setReviewsList([newReview, ...reviewsList]);
    setAuthorName("");
    setReviewTitle("");
    setReviewBody("");
    setShowReviewForm(false);
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
            <Link href="/#shop" className="nav-pill">Shop</Link>
            <Link href="/#story">Our story</Link>
            <Link href="/#journal">Journal</Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link href="/" className="desktop-only nav-search" style={{ textDecoration: "none" }}>← Back to shop</Link>
            <button className="bag-button" onClick={handleAddToCart}>
              Bag <span>{cartCount}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/#shop">{product.category}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      {/* Product Hero Section */}
      <section className="product-detail-section">
        <div className="product-gallery">
          <div className={`main-image-wrap ${product.tone}`}>
            <img src={currentImage} alt={product.name} />
            {product.badge && <span className="badge">{product.badge}</span>}
          </div>
          <div className="thumbnail-list">
            {product.gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className={`thumb-btn ${currentImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`${product.name} view ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-buy-box">
          <div className="eyebrow coral">{product.category} · In stock</div>
          <h1 className="pdp-title">{product.name}</h1>
          <p className="pdp-detail">{product.detail}</p>

          <div className="rating-summary">
            <div className="stars">{"★".repeat(Math.round(Number(avgRating)))}</div>
            <span className="rating-score">{avgRating} / 5</span>
            <span className="rating-count">({reviewsList.length} verified reviews)</span>
          </div>

          <div className="pdp-price">${product.price}</div>
          <p className="pdp-about-intro">{product.about}</p>

          <div className="pdp-actions">
            <button className="pdp-add-btn" onClick={handleAddToCart}>
              {addedAlert ? "Added to Bag ✓" : "Add to Bag — $" + product.price}
            </button>
          </div>

          <div className="product-perks">
            <div>🌿 100% Vegan & Cruelty-Free</div>
            <div>📦 Free 2-day delivery over $60</div>
            <div>♻️ Eco-conscious, refillable packaging</div>
          </div>

          {/* Tabbed details */}
          <div className="pdp-tabs">
            <div className="tab-headers">
              <button
                className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
              >
                Overview
              </button>
              <button
                className={`tab-btn ${activeTab === "ingredients" ? "active" : ""}`}
                onClick={() => setActiveTab("ingredients")}
              >
                Key Ingredients
              </button>
              <button
                className={`tab-btn ${activeTab === "howToUse" ? "active" : ""}`}
                onClick={() => setActiveTab("howToUse")}
              >
                How to Use
              </button>
            </div>
            <div className="tab-content">
              {activeTab === "about" && <p>{product.description}</p>}
              {activeTab === "ingredients" && <p>{product.ingredients}</p>}
              {activeTab === "howToUse" && <p>{product.howToUse}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section reviews-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow coral">Customer Feedback</p>
            <h2>Real reviews.<br />Real skin.</h2>
          </div>
          <button className="dark-button" onClick={() => setShowReviewForm(!showReviewForm)}>
            {showReviewForm ? "Close Form ✕" : "Write a Review ↗"}
          </button>
        </div>

        {/* Add Review Drawer / Form */}
        {showReviewForm && (
          <form className="review-form" onSubmit={handleAddReview}>
            <h3>Share your experience</h3>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Maya S."
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Rating</label>
              <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                <option value={5}>★★★★★ (5 - Excellent)</option>
                <option value={4}>★★★★☆ (4 - Good)</option>
                <option value={3}>★★★☆☆ (3 - Average)</option>
                <option value={2}>★★☆☆☆ (2 - Fair)</option>
                <option value={1}>★☆☆☆☆ (1 - Poor)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Review Headline</label>
              <input
                type="text"
                placeholder="e.g. Best everyday tint!"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Your Review</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us what you love or how you use it..."
                value={reviewBody}
                onChange={(e) => setReviewBody(e.target.value)}
              />
            </div>
            <button type="submit" className="dark-button">
              Submit Review ↗
            </button>
          </form>
        )}

        <div className="reviews-grid">
          {reviewsList.map((rev) => (
            <div className="review-card" key={rev.id}>
              <div className="review-header">
                <div className="review-avatar">{rev.avatar}</div>
                <div>
                  <div className="review-author">
                    <strong>{rev.author}</strong>
                    {rev.verified && <span className="verified-badge">✓ Verified Buyer</span>}
                  </div>
                  <div className="review-meta">
                    <span className="review-stars">{"★".repeat(rev.rating)}</span>
                    <span className="review-date">{rev.date}</span>
                  </div>
                </div>
              </div>
              <h4 className="review-title">{rev.title}</h4>
              <p className="review-body">{rev.body}</p>
            </div>
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
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required />
                <button>Sign me up ↗</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 SkinCity Cosmetics</span>
            <div>
              <Link href="#">Instagram</Link>
              <Link href="#">TikTok</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
