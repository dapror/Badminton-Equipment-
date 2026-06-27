/* =========================================================
   DATA PRODUK
   Tambah / ubah / hapus produk cukup edit array di bawah ini.
   - id        : unik, jangan ada yang sama
   - nama      : nama produk
   - kategori  : "raket" | "shuttlecock" | "sepatu" | "tas" | "senar-grip" | "apparel"
   - harga     : dalam Rupiah, angka saja (tanpa titik/koma)
   - gambar    : URL foto produk. Sumber bawaan dari Pexels (gratis, bebas
                 dipakai komersial, tanpa atribusi). Ganti dengan foto produk
                 aslimu sendiri kapan saja — taruh file di folder images/ lalu
                 tulis path-nya di sini, misal "images/raket-astrox-77.jpg"
   - icon      : emoji cadangan, otomatis tampil kalau foto gagal dimuat
   - badge     : (opsional) teks kecil seperti "Baru" / "Diskon" / "Best Seller"
   - deskripsi : 1 baris singkat
========================================================= */

const PRODUCTS = [
  {
    id: "rkt-01",
    nama: "Raket Yonex Astrox 77 Pro",
    kategori: "raket",
    harga: 1850000,
    gambar: "https://images.pexels.com/photos/6307230/pexels-photo-6307230.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🏸",
    badge: "Best Seller",
    deskripsi: "Head-heavy, untuk smash penuh tenaga."
  },
  {
    id: "rkt-02",
    nama: "Raket Li-Ning Aeronaut 9000",
    kategori: "raket",
    harga: 1650000,
    gambar: "https://images.pexels.com/photos/6307231/pexels-photo-6307231.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🏸",
    badge: "Baru",
    deskripsi: "Ringan, cocok gaya main cepat dan lincah."
  },
  {
    id: "rkt-03",
    nama: "Raket Victor Thruster K Falcon",
    kategori: "raket",
    harga: 990000,
    gambar: "https://images.pexels.com/photos/8286363/pexels-photo-8286363.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🏸",
    deskripsi: "Seimbang, ramah untuk pemain menengah."
  },
  {
    id: "rkt-04",
    nama: "Raket Yonex Nanoflare 700",
    kategori: "raket",
    harga: 1450000,
    gambar: "https://images.pexels.com/photos/12630113/pexels-photo-12630113.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🏸",
    deskripsi: "Swing super cepat untuk gaya defensif aktif."
  },
  {
    id: "shc-01",
    nama: "Shuttlecock Yonex AS-50 (Tube)",
    kategori: "shuttlecock",
    harga: 320000,
    gambar: "https://images.pexels.com/photos/6922586/pexels-photo-6922586.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🪶",
    badge: "Best Seller",
    deskripsi: "Bulu angsa kualitas turnamen, 1 tube isi 12."
  },
  {
    id: "shc-02",
    nama: "Shuttlecock RS Spin Tube",
    kategori: "shuttlecock",
    harga: 210000,
    gambar: "https://images.pexels.com/photos/6878113/pexels-photo-6878113.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🪶",
    deskripsi: "Cocok untuk latihan harian, stabil terbang."
  },
  {
    id: "shc-03",
    nama: "Shuttlecock Mizuno V370",
    kategori: "shuttlecock",
    harga: 280000,
    gambar: "https://images.pexels.com/photos/8496267/pexels-photo-8496267.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🪶",
    deskripsi: "Akurasi tinggi untuk sesi sparring."
  },
  {
    id: "spt-01",
    nama: "Sepatu Yonex Power Cushion 65Z3",
    kategori: "sepatu",
    harga: 1390000,
    gambar: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "👟",
    badge: "Diskon",
    deskripsi: "Cushion empuk, grip kuat untuk gerak eksplosif."
  },
  {
    id: "spt-02",
    nama: "Sepatu Victor A300",
    kategori: "sepatu",
    harga: 750000,
    gambar: "https://images.pexels.com/photos/20298286/pexels-photo-20298286.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "👟",
    deskripsi: "Ringan dan napas, harian maupun kompetisi."
  },
  {
    id: "spt-03",
    nama: "Sepatu Li-Ning Saga Lite II",
    kategori: "sepatu",
    harga: 820000,
    gambar: "https://images.pexels.com/photos/11946032/pexels-photo-11946032.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "👟",
    deskripsi: "Stabil untuk footwork lincah di lapangan."
  },
  {
    id: "tas-01",
    nama: "Tas Raket Yonex Team Bag 2R",
    kategori: "tas",
    harga: 420000,
    gambar: "https://images.pexels.com/photos/5120082/pexels-photo-5120082.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🎒",
    deskripsi: "Muat 2 raket + apparel, kompartemen rapi."
  },
  {
    id: "tas-02",
    nama: "Tas Raket Victor BR9213",
    kategori: "tas",
    harga: 550000,
    gambar: "https://images.pexels.com/photos/5384401/pexels-photo-5384401.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🎒",
    badge: "Baru",
    deskripsi: "Kapasitas besar, cocok untuk turnamen."
  },
  {
    id: "sng-01",
    nama: "Senar Yonex BG65 (Set)",
    kategori: "senar-grip",
    harga: 95000,
    gambar: "https://images.pexels.com/photos/8007419/pexels-photo-8007419.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🧵",
    deskripsi: "Durabilitas tinggi, favorit pemain rekreasi."
  },
  {
    id: "sng-02",
    nama: "Grip Towel Yonex AC102",
    kategori: "senar-grip",
    harga: 25000,
    gambar: "https://images.pexels.com/photos/6878125/pexels-photo-6878125.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🧵",
    deskripsi: "Menyerap keringat, anti licin saat genggam."
  },
  {
    id: "sng-03",
    nama: "Senar Li-Ning No.7 (Set)",
    kategori: "senar-grip",
    harga: 110000,
    gambar: "https://images.pexels.com/photos/6878021/pexels-photo-6878021.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🧵",
    badge: "Diskon",
    deskripsi: "Kontrol presisi untuk pukulan tajam."
  },
  {
    id: "app-01",
    nama: "Jersey Badminton Pro Series",
    kategori: "apparel",
    harga: 215000,
    gambar: "https://images.pexels.com/photos/4004222/pexels-photo-4004222.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "👕",
    deskripsi: "Kain dry-fit, sejuk untuk pertandingan panjang."
  },
  {
    id: "app-02",
    nama: "Celana Sport Yonex Training",
    kategori: "apparel",
    harga: 185000,
    gambar: "https://images.pexels.com/photos/4004222/pexels-photo-4004222.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🩳",
    deskripsi: "Fleksibel mengikuti gerak lunge dan smash."
  },
  {
    id: "app-03",
    nama: "Kaos Kaki Badminton (3 Pasang)",
    kategori: "apparel",
    harga: 75000,
    gambar: "https://images.pexels.com/photos/2608438/pexels-photo-2608438.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
    icon: "🧦",
    deskripsi: "Bantalan ekstra di tumit dan telapak kaki."
  }
];
