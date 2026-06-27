# 🏸 SMASH.ID — Toko Perlengkapan Badminton

Website statis (HTML/CSS/JS murni, tanpa framework/build tool) untuk jualan perlengkapan badminton. Siap di-hosting gratis di **GitHub Pages**.

## ✨ Fitur

- Hero dengan animasi shuttlecock terbang & garis lapangan
- Filter produk per kategori (Raket, Shuttlecock, Sepatu, Tas, Senar & Grip, Apparel)
- Keranjang belanja (slide-in panel) — tambah, ubah jumlah, hapus item
- Keranjang tersimpan otomatis di browser (localStorage), jadi tidak hilang saat halaman di-refresh
- Checkout langsung mengarah ke **WhatsApp** dengan pesan otomatis berisi daftar pesanan & total harga
- Animasi scroll reveal, hover effect, toast notifikasi
- Responsive — rapi di HP maupun desktop

## 📁 Struktur Folder

```
badminton-shop/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── products.js   <- DATA PRODUK (edit di sini)
│   └── script.js     <- LOGIKA WEBSITE (edit nomor WA di sini)
└── README.md
```

## 🖼️ Soal Foto Produk

Foto produk sekarang memakai foto asli (bukan emoji lagi), bersumber dari **Pexels** — gratis, bebas dipakai untuk keperluan komersial, tanpa perlu atribusi. Karena foto resmi dari merek (Yonex, Li-Ning, Victor, dll) berhak cipta dan tidak bisa diambil begitu saja dari toko/website lain, foto yang dipakai di sini adalah foto generik per jenis barang (raket, shuttlecock, sepatu, dst), bukan foto produk spesifik dari merek tersebut.

**Disarankan:** ganti foto-foto ini dengan foto produk aslimu sendiri (hasil jepretan toko, atau foto resmi yang kamu punya izin pakai) agar pembeli melihat barang yang benar-benar dijual. Caranya:

1. Simpan foto ke folder `images/` (buat folder baru di dalam `badminton-shop/`)
2. Di `js/products.js`, ganti nilai `gambar` pada produk terkait, misalnya:
   ```js
   gambar: "images/raket-astrox-77.jpg",
   ```
3. Kalau foto gagal dimuat (link rusak, dsb), website otomatis menampilkan emoji ikon sebagai cadangan — jadi tampilan tidak akan rusak/kosong.

## 🛠️ Yang WAJIB Diganti Sebelum Dipakai

### 1. Nomor WhatsApp

Buka `js/script.js`, baris paling atas:

```js
const WHATSAPP_NUMBER = "6281234567890";
```

Ganti dengan nomor WhatsApp tokomu. Format: kode negara tanpa tanda `+` atau angka `0` di depan.
Contoh: nomor `0812-3456-7890` ditulis jadi `"6281234567890"`.

### 2. Daftar Produk

Buka `js/products.js` — isi array `PRODUCTS` dengan produkmu sendiri. Setiap produk punya format:

```js
{
  id: "rkt-05",                 // unik, jangan sama dengan id lain
  nama: "Raket Yonex Astrox 88D",
  kategori: "raket",            // raket | shuttlecock | sepatu | tas | senar-grip | apparel
  harga: 1750000,               // angka saja, tanpa titik/koma
  gambar: "images/nama-foto.jpg", // path/URL foto produk, lihat bagian "Soal Foto Produk" di atas
  icon: "🏸",                   // emoji cadangan kalau foto gagal dimuat
  badge: "Baru",                // opsional: "Baru" / "Diskon" / "Best Seller", hapus baris ini kalau tidak perlu
  deskripsi: "Deskripsi singkat satu baris."
}
```

Tinggal copy-paste blok di atas untuk menambah produk baru.

### 3. (Opsional) Branding

- Nama toko & teks header/footer ada di `index.html` (cari `SMASH`)
- Warna tema ada di `css/style.css` bagian `:root` paling atas — ubah nilai hex untuk ganti palet warna
- Font menggunakan Google Fonts (`Anton` + `Manrope`), bisa diganti di `<head>` `index.html` dan variabel `--font-display` / `--font-body` di CSS

## 🚀 Cara Hosting di GitHub Pages

1. Buat repository baru di GitHub (misalnya `toko-badminton`)
2. Upload semua isi folder `badminton-shop/` ke repository tersebut (lewat web GitHub "Add file → Upload files", atau via git):
   ```bash
   git init
   git add .
   git commit -m "Website toko badminton"
   git branch -M main
   git remote add origin https://github.com/USERNAME/toko-badminton.git
   git push -u origin main
   ```
3. Di repository, buka **Settings → Pages**
4. Pada bagian **Build and deployment**, pilih source: **Deploy from a branch**
5. Pilih branch `main` dan folder `/ (root)`, klik **Save**
6. Tunggu 1–2 menit, lalu situs akan aktif di:
   `https://USERNAME.github.io/toko-badminton/`

Tidak perlu build tool, server, atau database — semua murni file statis.

## 🧪 Coba di Komputer Sendiri (sebelum upload)

Cukup buka `index.html` langsung di browser, atau jalankan local server sederhana:

```bash
# Python 3
python -m http.server 8000
# lalu buka http://localhost:8000
```

## 📝 Catatan

- Foto produk default bersumber dari Pexels (lihat bagian "Soal Foto Produk" di atas). Sangat disarankan diganti dengan foto produk asli toko kamu.
- Data keranjang disimpan di `localStorage` browser pengunjung — ini fitur standar untuk toko online statis dan akan bekerja normal begitu situs sudah online (hosting sendiri/GitHub Pages). Saat hanya dilihat lewat pratinjau chat, penyimpanan ini mungkin tidak aktif.
