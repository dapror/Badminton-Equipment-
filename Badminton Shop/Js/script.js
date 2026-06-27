/* =========================================================
   KONFIGURASI — GANTI INI SESUAI TOKO KAMU
========================================================= */
// Format nomor WA: kode negara tanpa "+" atau "0" di depan.
// Contoh nomor 0812-3456-7890 -> "6281234567890"
const WHATSAPP_NUMBER = "6281234567890";

const CART_STORAGE_KEY = "smashid_cart";

/* =========================================================
   UTIL
========================================================= */
function formatRupiah(angka){
  return "Rp " + angka.toLocaleString("id-ID");
}

function getProductById(id){
  return PRODUCTS.find(p => p.id === id);
}

function loadCart(){
  try{
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    return {};
  }
}

function saveCart(cart){
  try{
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }catch(e){ /* localStorage tidak tersedia, keranjang tetap jalan di memori sesi ini */ }
}

// cart = { [productId]: qty }
let cart = loadCart();

/* =========================================================
   RENDER PRODUK
========================================================= */
const productGrid = document.getElementById("productGrid");
let currentFilter = "semua";

function renderProducts(){
  productGrid.innerHTML = "";

  const filtered = currentFilter === "semua"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.kategori === currentFilter);

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.id = p.id;

    card.innerHTML = `
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      <div class="product-media">
        ${p.gambar ? `<img src="${p.gambar}" alt="${p.nama}" loading="lazy" onerror="this.remove(); this.parentElement.classList.add('media-fallback'); this.parentElement.dataset.icon='${p.icon}';">` : ""}
        <span class="media-icon-fallback">${p.icon}</span>
      </div>
      <div class="product-kategori">${labelKategori(p.kategori)}</div>
      <h3 class="product-nama">${p.nama}</h3>
      <p class="product-desc">${p.deskripsi}</p>
      <div class="product-foot">
        <span class="product-harga">${formatRupiah(p.harga)}</span>
        <button class="add-btn" aria-label="Tambah ${p.nama} ke keranjang">+</button>
      </div>
    `;

    card.querySelector(".add-btn").addEventListener("click", () => {
      addToCart(p.id);
      card.classList.add("smashed");
      setTimeout(() => card.classList.remove("smashed"), 400);
    });

    productGrid.appendChild(card);
  });

  observeFadeIn();
}

function labelKategori(kategori){
  const map = {
    raket: "Raket",
    shuttlecock: "Shuttlecock",
    sepatu: "Sepatu",
    tas: "Tas",
    "senar-grip": "Senar & Grip",
    apparel: "Apparel"
  };
  return map[kategori] || kategori;
}

/* =========================================================
   FILTER KATEGORI
========================================================= */
const filterBar = document.getElementById("filterBar");

filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-pill");
  if(!btn) return;

  filterBar.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");

  currentFilter = btn.dataset.filter;
  renderProducts();
});

/* =========================================================
   KERANJANG — LOGIKA
========================================================= */
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartToggle = document.getElementById("cartToggle");
const cartClose = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartFooterEl = document.getElementById("cartFooter");
const cartTotalEl = document.getElementById("cartTotal");
const cartBadgeEl = document.getElementById("cartBadge");

function addToCart(productId){
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart(cart);
  renderCart();
  bumpBadge();
  showToast("Ditambahkan ke keranjang 🏸");
  openCart();
}

function changeQty(productId, delta){
  if(!cart[productId]) return;
  cart[productId] += delta;
  if(cart[productId] <= 0){
    delete cart[productId];
  }
  saveCart(cart);
  renderCart();
}

function removeFromCart(productId){
  delete cart[productId];
  saveCart(cart);
  renderCart();
}

function cartEntries(){
  return Object.entries(cart)
    .map(([id, qty]) => ({ product: getProductById(id), qty }))
    .filter(entry => entry.product); // buang entri produk yang sudah tidak ada
}

function cartTotal(){
  return cartEntries().reduce((sum, { product, qty }) => sum + product.harga * qty, 0);
}

function cartCount(){
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function renderCart(){
  const entries = cartEntries();

  cartBadgeEl.textContent = cartCount();

  if(entries.length === 0){
    cartItemsEl.innerHTML = "";
    cartEmptyEl.classList.remove("hide");
    cartFooterEl.classList.add("hide");
    return;
  }

  cartEmptyEl.classList.add("hide");
  cartFooterEl.classList.remove("hide");

  cartItemsEl.innerHTML = entries.map(({ product, qty }) => `
    <div class="cart-item" data-id="${product.id}">
      <div class="cart-item-icon">
        ${product.gambar ? `<img src="${product.gambar}" alt="${product.nama}" onerror="this.remove();">` : product.icon}
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${product.nama}</p>
        <p class="cart-item-price">${formatRupiah(product.harga)}</p>
        <div class="qty-control">
          <button class="qty-btn" data-action="dec">−</button>
          <span class="qty-value">${qty}</span>
          <button class="qty-btn" data-action="inc">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-action="remove">Hapus</button>
    </div>
  `).join("");

  cartTotalEl.textContent = formatRupiah(cartTotal());
}

cartItemsEl.addEventListener("click", (e) => {
  const itemEl = e.target.closest(".cart-item");
  if(!itemEl) return;
  const id = itemEl.dataset.id;
  const action = e.target.dataset.action;

  if(action === "inc") changeQty(id, 1);
  if(action === "dec") changeQty(id, -1);
  if(action === "remove") removeFromCart(id);
});

function bumpBadge(){
  cartBadgeEl.classList.remove("bump");
  // restart animasi
  void cartBadgeEl.offsetWidth;
  cartBadgeEl.classList.add("bump");
}

function openCart(){
  cartPanel.classList.add("open");
  cartOverlay.classList.add("open");
}
function closeCart(){
  cartPanel.classList.remove("open");
  cartOverlay.classList.remove("open");
}

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* =========================================================
   CHECKOUT VIA WHATSAPP
========================================================= */
function buildWhatsappMessage(){
  const entries = cartEntries();
  let lines = [];
  lines.push("Halo SMASH.ID, saya mau pesan:");
  lines.push("");

  entries.forEach(({ product, qty }, i) => {
    lines.push(`${i + 1}. ${product.nama} x${qty} — ${formatRupiah(product.harga * qty)}`);
  });

  lines.push("");
  lines.push(`Total: ${formatRupiah(cartTotal())}`);
  lines.push("");
  lines.push("Mohon info ongkir dan cara pembayarannya ya. Terima kasih!");

  return lines.join("\n");
}

function checkoutViaWhatsapp(){
  if(cartEntries().length === 0){
    showToast("Keranjang masih kosong");
    return;
  }
  const message = encodeURIComponent(buildWhatsappMessage());
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank", "noopener");
}

document.getElementById("checkoutBtn").addEventListener("click", checkoutViaWhatsapp);

/* Tombol WhatsApp umum di CTA strip & footer (tanpa isi pesanan) */
function setGeneralWhatsappLink(){
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo SMASH.ID, saya mau tanya-tanya soal perlengkapan badminton.")}`;
  document.getElementById("ctaWhatsapp").href = url;
  document.getElementById("footerWhatsapp").href = url;
}

/* =========================================================
   TOAST
========================================================= */
const toastEl = document.getElementById("toast");
let toastTimer = null;

function showToast(text){
  toastEl.textContent = text;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
}

/* =========================================================
   SCROLL FADE-IN
========================================================= */
function observeFadeIn(){
  const targets = document.querySelectorAll(".product-card:not(.in-view), .why-card:not(.in-view)");
  if(!("IntersectionObserver" in window)){
    targets.forEach(t => t.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(t => observer.observe(t));
}

/* =========================================================
   MOBILE MENU (burger -> buka nav sebagai dropdown sederhana)
========================================================= */
const burgerBtn = document.getElementById("burgerBtn");
const mainNav = document.getElementById("mainNav");

burgerBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  mainNav.style.display = mainNav.classList.contains("open") ? "flex" : "none";
  if(mainNav.classList.contains("open")){
    mainNav.style.position = "absolute";
    mainNav.style.top = "72px";
    mainNav.style.left = "0";
    mainNav.style.right = "0";
    mainNav.style.background = "rgba(11,61,46,0.98)";
    mainNav.style.flexDirection = "column";
    mainNav.style.padding = "20px 24px";
    mainNav.style.gap = "18px";
  }
});

/* =========================================================
   INIT
========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
setGeneralWhatsappLink();
renderProducts();
renderCart();
