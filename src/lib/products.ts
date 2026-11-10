export type Review = {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
};

export type Product = {
  id: number;
  name: string;
  detail: string;
  about: string;
  description: string;
  ingredients: string;
  howToUse: string;
  price: number;
  category: string;
  image: string;
  gallery: string[];
  tone: string;
  badge?: string;
  reviews: Review[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Cloud Skin Tint",
    detail: "Lightweight sheer coverage · 24 shades",
    about: "Breathable, skin-hugging tint that blurs imperfections while letting your natural texture show through. SPF 30 included.",
    description: "The Cloud Skin Tint is our best-selling foundation alternative. It delivers just enough coverage to even out your skin tone while still letting your natural skin breathe. Infused with hyaluronic acid and vitamin E, it hydrates all day long. Available in 24 inclusive shades.",
    ingredients: "Water, Cyclopentasiloxane, Titanium Dioxide (CI 77891), Hyaluronic Acid, Tocopheryl Acetate (Vitamin E), Niacinamide, Glycerin, Dimethicone, Phenoxyethanol.",
    howToUse: "Apply with fingertips, a sponge, or a brush. Start with a small amount and build coverage as needed. Reapply SPF every 2 hours.",
    price: 32,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "sand",
    badge: "Bestseller",
    reviews: [
      { id: 1, author: "Amara O.", avatar: "AO", rating: 5, date: "Oct 2025", title: "My holy grail!", body: "I've tried every skin tint on the market and this one takes the crown. It actually matches my deep skin tone — finally. Lasts all day without oxidising.", verified: true },
      { id: 2, author: "Jess M.", avatar: "JM", rating: 4, date: "Sep 2025", title: "Love the finish", body: "So natural and glowy. I wear it alone or layer my concealer on top. Only reason it's not 5 stars is I wish there were more shades at the lighter end.", verified: true },
      { id: 3, author: "Priya K.", avatar: "PK", rating: 5, date: "Sep 2025", title: "Skipped foundation entirely", body: "I bought this on a whim and haven't opened my full-coverage foundation since. The SPF is a bonus. Light, skin-like, perfection.", verified: false },
    ],
  },
  {
    id: 2,
    name: "Dew Drop Serum",
    detail: "Hyaluronic acid + niacinamide · 30 ml",
    about: "A plumping, pore-refining serum that floods skin with moisture. Layers perfectly under SPF or makeup.",
    description: "The Dew Drop Serum is a two-in-one moisture surge and pore minimiser. The 2% niacinamide refines texture and evens tone while five forms of hyaluronic acid plump skin at every layer. Lightweight and fast-absorbing — it disappears in seconds.",
    ingredients: "Water, Niacinamide (2%), Sodium Hyaluronate, Hyaluronic Acid, Panthenol, Allantoin, Glycerin, Ceramide NP, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse: "Apply 3–4 drops to clean skin morning and evening. Gently press into face and neck. Follow with moisturiser and SPF in the morning.",
    price: 28,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556228578-626a042f2a73?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "sage",
    badge: "New",
    reviews: [
      { id: 1, author: "Sophie L.", avatar: "SL", rating: 5, date: "Oct 2025", title: "Pores? What pores?", body: "After two weeks my skin looks airbrushed. The niacinamide has visibly shrunk my pores and I'm getting compliments on my skin for the first time ever.", verified: true },
      { id: 2, author: "Kezia B.", avatar: "KB", rating: 5, date: "Oct 2025", title: "Best serum I've used", body: "Absorbs instantly, no sticky residue, and my skin feels plump by morning. Already on my second bottle.", verified: true },
      { id: 3, author: "Rin T.", avatar: "RT", rating: 4, date: "Sep 2025", title: "Great but pricey", body: "Really good serum — my skin texture is smoother after 3 weeks. Wish the bottle were a bit bigger for the price but I'll keep buying it.", verified: false },
    ],
  },
  {
    id: 3,
    name: "Soft Blur Lip",
    detail: "Buildable matte colour · 8 shades",
    about: "Feather-light formula that stays put all day without drying out. Blurs lip lines for a soft, editorial finish.",
    description: "Soft Blur Lip is a velvety matte lip colour that moves with your lips, never cracking or peeling. Vitamin E and jojoba oil keep lips cushioned and comfortable all day. Available in 8 wearable shades from barely-there nudes to bold berries.",
    ingredients: "Isododecane, Dimethicone, Trimethylsiloxysilicate, Tocopheryl Acetate, Simmondsia Chinensis (Jojoba) Seed Oil, Phenoxyethanol, [+/- Pigments].",
    howToUse: "Apply directly from bullet starting from the cupid's bow. Build layers for more intensity. For a blurred effect, tap edges with fingertip after application.",
    price: 24,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "rose",
    reviews: [
      { id: 1, author: "Bea W.", avatar: "BW", rating: 5, date: "Oct 2025", title: "Doesn't dry my lips out!", body: "Every matte lip I've tried makes my lips feel like sandpaper. This one is genuinely comfortable. Wore it for 8 hours and barely needed a touch up.", verified: true },
      { id: 2, author: "Ciara D.", avatar: "CD", rating: 4, date: "Sep 2025", title: "Great shade range", body: "The colour 'City Rose' is my everyday shade — it's the perfect your-lips-but-better tone. Great formula, long lasting.", verified: true },
    ],
  },
  {
    id: 4,
    name: "Ritual Body Oil",
    detail: "Squalane + rosehip · 100 ml",
    about: "Fast-absorbing luxury oil that leaves skin glowing—not greasy. Best applied to damp skin right after a shower.",
    description: "A fast-absorbing dry oil that transforms dull, dry skin into a glowing, nourished canvas. Squalane locks in moisture and strengthens the skin barrier while rosehip oil delivers essential fatty acids and vitamin A. The subtle scent of neroli and sandalwood makes this your new shower ritual.",
    ingredients: "Squalane, Rosa Canina (Rosehip) Seed Oil, Caprylic/Capric Triglyceride, Tocopherol, Citrus Aurantium (Neroli) Flower Oil, Santalum Album (Sandalwood) Oil.",
    howToUse: "Apply to damp skin immediately after showering for maximum absorption. Use 4–6 pumps and massage in circular motions. Can also be added to bath water.",
    price: 30,
    category: "Body",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "cream",
    reviews: [
      { id: 1, author: "Nadia F.", avatar: "NF", rating: 5, date: "Oct 2025", title: "Smells divine", body: "The scent alone is worth the price. But the results are incredible too — my skin has never felt this soft. I apply it right out of the shower as instructed and it absorbs in seconds.", verified: true },
      { id: 2, author: "Lauren S.", avatar: "LS", rating: 5, date: "Oct 2025", title: "Converted me to body oils", body: "I never understood the hype around body oils until this one. No greasy residue, just soft glowing skin. I've gifted three bottles already.", verified: true },
      { id: 3, author: "Tola A.", avatar: "TA", rating: 4, date: "Sep 2025", title: "Lovely but wish it was bigger", body: "Goes through it fast because I use it every day. Would love a 200ml option. The glow it gives is unreal though.", verified: false },
    ],
  },
  {
    id: 5,
    name: "Glass Glow Highlighter",
    detail: "Finely milled luminous powder · 3 shades",
    about: "Micro-fine pearl pigments deliver a lit-from-within highlight. Buildable from subtle sheen to full glow.",
    description: "The Glass Glow Highlighter captures the effect of glass-like skin with ultra-fine pearl pigments that catch light beautifully without glitter or chunky shimmer. Available in Champagne, Rose Gold, and Icy Pink to suit every skin tone.",
    ingredients: "Talc, Mica, Magnesium Stearate, Boron Nitride, Bismuth Oxychloride, Tocopheryl Acetate, Silica, [+/- Pigments CI 77891, CI 77491].",
    howToUse: "Apply with a fan brush to the high points of your face: tops of cheekbones, brow bones, Cupid's bow, and inner corners of eyes. Layer for intensity.",
    price: 26,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "sand",
    badge: "Fan Fave",
    reviews: [
      { id: 1, author: "Mia C.", avatar: "MC", rating: 5, date: "Oct 2025", title: "The only highlighter I'll ever use", body: "No chunky glitter, no fallout — just the most beautiful natural glow. The Rose Gold shade on my medium skin tone is incredible.", verified: true },
      { id: 2, author: "Yuki H.", avatar: "YH", rating: 5, date: "Sep 2025", title: "Actual glass skin", body: "I swatched this in-store and bought it on the spot. It looks like you have a natural lit-from-within glow, not like you've applied product. Magic.", verified: true },
    ],
  },
  {
    id: 6,
    name: "Barrier Cream",
    detail: "Ceramides + oat extract · 50 ml",
    about: "Strengthens and repairs the skin's natural barrier overnight. Rich but non-comedogenic—safe for all skin types.",
    description: "The Barrier Cream is a restorative moisturiser formulated with three types of ceramides and oat extract to calm, strengthen and deeply nourish compromised skin. Fragrance-free and tested by dermatologists, it's safe for sensitive, eczema-prone, and reactive skin types.",
    ingredients: "Water, Glycerin, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Avena Sativa (Oat) Kernel Extract, Panthenol, Niacinamide, Allantoin, Phenoxyethanol.",
    howToUse: "Apply to clean skin morning and night. Use as the last step in your routine. For very dry skin, apply to slightly damp skin to lock in moisture.",
    price: 34,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1556228578-626a042f2a73?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1556228578-626a042f2a73?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "cream",
    badge: "New",
    reviews: [
      { id: 1, author: "Hana J.", avatar: "HJ", rating: 5, date: "Oct 2025", title: "Saved my skin barrier", body: "After over-exfoliating my skin into a red flaky mess, this cream fixed it in a week. No fragrance, no irritation, just healing.", verified: true },
      { id: 2, author: "Emma R.", avatar: "ER", rating: 5, date: "Oct 2025", title: "Perfect for eczema", body: "The only moisturiser that doesn't flare my eczema. It's rich without feeling heavy and my skin looks so calm and healthy.", verified: true },
      { id: 3, author: "Fatima A.", avatar: "FA", rating: 4, date: "Sep 2025", title: "Great but slow results", body: "My skin feels moisturised but the texture improvement took about 3 weeks to really show. Worth the patience though!", verified: false },
    ],
  },
  {
    id: 7,
    name: "Velvet Setting Powder",
    detail: "Blurring translucent finish · 10 g",
    about: "Sets foundation without cakiness. Locks in moisture and controls shine for up to 12 hours.",
    description: "Velvet Setting Powder is an ultra-fine, translucent powder that blurs pores and fine lines while setting makeup for all-day wear. Unlike traditional setting powders, it contains hyaluronic acid to lock in moisture rather than dry skin out. Suitable for all skin tones.",
    ingredients: "Silica, Nylon-12, Boron Nitride, Zinc Stearate, Mica, Sodium Hyaluronate, Tocopheryl Acetate, Lauroyl Lysine.",
    howToUse: "Press lightly onto skin with a powder puff or domed brush after foundation. Focus on T-zone for shine control. Use sparingly for a natural finish.",
    price: 22,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "rose",
    reviews: [
      { id: 1, author: "Grace N.", avatar: "GN", rating: 5, date: "Sep 2025", title: "No more midday shine", body: "I have oily skin and this powder keeps me matte for hours without looking cakey or dry. It blurs pores like a filter. Amazing.", verified: true },
      { id: 2, author: "Anna P.", avatar: "AP", rating: 4, date: "Sep 2025", title: "Very soft and blurring", body: "The texture is incredibly fine and it sets my makeup without any flashback in photos. Great for everyday use.", verified: true },
    ],
  },
  {
    id: 8,
    name: "Peptide Eye Gel",
    detail: "Caffeine + tripeptide complex · 15 ml",
    about: "De-puffs and brightens the under-eye area in 60 seconds flat. Cool metal applicator tip included.",
    description: "The Peptide Eye Gel targets dark circles, puffiness and fine lines simultaneously with a tripeptide complex that boosts collagen production and caffeine that constricts blood vessels to reduce swelling. The cool metal roller tip provides instant de-puffing relief.",
    ingredients: "Water, Caffeine (3%), Palmitoyl Tripeptide-5, Sodium Hyaluronate, Niacinamide, Glycerin, Allantoin, Centella Asiatica Extract, Phenoxyethanol.",
    howToUse: "Apply morning and night to clean skin. Roll the metal tip from inner to outer corner of eye. Gently tap remaining product with ring finger. Store in fridge for extra de-puffing.",
    price: 36,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "sage",
    reviews: [
      { id: 1, author: "Zara M.", avatar: "ZM", rating: 5, date: "Oct 2025", title: "Actually works instantly", body: "I store mine in the fridge. The cold roller tip + caffeine combo visibly depuffs my eyes in under a minute. I use it every morning.", verified: true },
      { id: 2, author: "Isla B.", avatar: "IB", rating: 4, date: "Sep 2025", title: "Great for dark circles", body: "After 4 weeks my dark circles are noticeably lighter. The peptides must be working because I genuinely look more awake even without concealer.", verified: true },
      { id: 3, author: "Chidi E.", avatar: "CE", rating: 5, date: "Sep 2025", title: "Men can use this too!", body: "My girlfriend recommended this and I'm glad she did. I had terrible under-eye bags and now people ask me if I've been sleeping better. The roller tip is satisfying to use.", verified: false },
    ],
  },
  {
    id: 9,
    name: "Whipped Body Butter",
    detail: "Shea + mango butter · 200 ml",
    about: "Thick, cloud-like texture that melts on contact. Leaves skin butter-soft and lightly scented with vanilla musk.",
    description: "The Whipped Body Butter is whipped to a cloud-like consistency that melts instantly on contact with skin. Pure shea and mango butter nourish deeply while a blend of botanical oils seals in moisture for up to 24 hours. Lightly scented with vanilla, coconut and musk.",
    ingredients: "Butyrospermum Parkii (Shea) Butter, Mangifera Indica (Mango) Seed Butter, Caprylic/Capric Triglyceride, Tocopherol, Cocos Nucifera (Coconut) Oil, Vanilla Planifolia Extract, Fragrance.",
    howToUse: "Scoop a generous amount and warm between palms before applying to body. Focus on dry areas like elbows, knees and feet. Use daily after showering.",
    price: 27,
    category: "Body",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "cream",
    reviews: [
      { id: 1, author: "Adaeze C.", avatar: "AC", rating: 5, date: "Oct 2025", title: "Best body butter EVER", body: "I've been through every luxury body butter and this one beats them all at half the price. The vanilla scent lasts all day and my skin is so soft.", verified: true },
      { id: 2, author: "Lily T.", avatar: "LT", rating: 5, date: "Sep 2025", title: "My whole family uses it", body: "Bought one for myself and now my mum and sister both want their own. We've been through three tubs in a month.", verified: true },
    ],
  },
  {
    id: 10,
    name: "Tinted SPF 50",
    detail: "Mineral sunscreen · 4 shades",
    about: "Invisible mineral filter with a subtle tint to even skin tone. No white cast, no fragrance—everyday essential.",
    description: "A mineral SPF 50 that actually works for deeper skin tones. Available in 4 adaptive shades, it blends seamlessly into skin without leaving a white cast. Lightweight, fragrance-free and enriched with antioxidant vitamin C for added protection against pollution and free radicals.",
    ingredients: "Zinc Oxide (20%), Titanium Dioxide (5%), Water, Glycerin, Sodium Hyaluronate, Ascorbyl Glucoside (Vitamin C), Tocopheryl Acetate, Niacinamide, [+/- Iron Oxides].",
    howToUse: "Apply as the last step of your morning skincare routine. Use a generous amount (at least ¼ teaspoon for face). Reapply every 2 hours when in direct sunlight.",
    price: 29,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "sand",
    badge: "Must-have",
    reviews: [
      { id: 1, author: "Tosin R.", avatar: "TR", rating: 5, date: "Oct 2025", title: "Finally a mineral SPF for dark skin!", body: "No white cast, no greasiness, just proper sun protection. The shade 'Deep' matches me perfectly. This is a game changer for WOC.", verified: true },
      { id: 2, author: "Clara F.", avatar: "CF", rating: 5, date: "Oct 2025", title: "Replaced my moisturiser + SPF", body: "So hydrating that I skipped my moisturiser on a few days and my skin was fine. The tint gives a lovely natural glow too.", verified: true },
      { id: 3, author: "Mei L.", avatar: "ML", rating: 4, date: "Sep 2025", title: "Great but needs more shades", body: "Love the formula but the 4 shades could be expanded. I'm between two of them. Would love a 'Universal' clear option too.", verified: false },
    ],
  },
  {
    id: 11,
    name: "Lash Lift Mascara",
    detail: "Curved brush · buildable volume",
    about: "Flexible polymer formula separates, lifts and curls every lash without clumping. Removes easily with warm water.",
    description: "The Lash Lift Mascara uses a flexible film-forming polymer that hugs each lash individually, building volume and curl without weighing them down. The hourglass-shaped brush reaches every lash — from inner corner to outer. Removes completely with warm water, no makeup remover needed.",
    ingredients: "Water, Beeswax, Carnauba Wax, Stearic Acid, Triethanolamine, Acacia Senegal Gum, Panthenol, Tocopheryl Acetate, [+/- Black 2 CI 77266].",
    howToUse: "Start at the base of lashes and wiggle brush upward. For more volume, apply a second coat before the first is fully dry. Curl lashes beforehand for extra lift.",
    price: 20,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "rose",
    reviews: [
      { id: 1, author: "Nour A.", avatar: "NA", rating: 5, date: "Oct 2025", title: "No clumping ever", body: "I have very straight lashes and this actually holds a curl all day. Removes so easily — just warm water and it slides off.", verified: true },
      { id: 2, author: "Sara J.", avatar: "SJ", rating: 4, date: "Sep 2025", title: "Great drugstore alternative", body: "Better than my old high-end mascara at half the price. The brush shape is clever — gets every tiny lash.", verified: true },
    ],
  },
  {
    id: 12,
    name: "Exfoliating Body Scrub",
    detail: "Sugar + sea salt · 300 g",
    about: "Dual-texture scrub that buffs away dry skin and smooths texture. Infused with blue tansy and jojoba oil.",
    description: "A dual-action scrub combining fine sugar crystals and sea salt to buff away dead skin cells at two different levels. Blue tansy oil soothes and calms as you scrub, while jojoba oil seals in moisture immediately. Leaves skin silky-smooth and lightly scented.",
    ingredients: "Sucrose, Maris Sal (Sea Salt), Helianthus Annuus (Sunflower) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tanacetum Annuum (Blue Tansy) Flower Oil, Tocopherol, Fragrance.",
    howToUse: "Use 2–3 times per week in the shower on wet skin. Apply a generous handful and massage in circular motions for 2 minutes. Rinse thoroughly. Follow with body oil or moisturiser.",
    price: 25,
    category: "Body",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
    ],
    tone: "sage",
    reviews: [
      { id: 1, author: "Dani B.", avatar: "DB", rating: 5, date: "Oct 2025", title: "My shower just levelled up", body: "The dual texture actually makes a difference. The fine sugar is gentle and the coarser salt gets into problem areas. Blue tansy scent is incredible.", verified: true },
      { id: 2, author: "Ola K.", avatar: "OK", rating: 4, date: "Sep 2025", title: "Smooth skin in one use", body: "Could feel the difference from the very first use. My skin was glowing and soft. Would love a bit more jojoba oil in the formula but it's great overall.", verified: false },
    ],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
