# Portofolio Alfi Permana Putra

Website statis (HTML, CSS, JS), tanpa build tool. Buka `index.html` langsung di browser.

## Struktur
- `index.html` : konten dan struktur halaman
- `css/style.css` : sistem visual dan layout responsif
- `css/images.css` : ukuran, crop, dan posisi foto serta gambar proyek/publikasi
- `css/motion.css` : animasi reveal dan aturan reduced motion
- `js/main.js` : preloader, menu mobile, reveal section, dan interaksi publikasi
- `assets/` : foto profil, pratinjau proyek, sampul publikasi, favicon, dan CV

## Yang perlu kamu ganti
1. **Foto**: ganti elemen `.hero-portrait` di `index.html` dengan foto profil Alfi dan teks alternatif yang sesuai.
2. **CV**: taruh PDF dengan nama `CV_Alfi_Permana_Putra.pdf` di `assets/`.
3. **Gambar proyek**: ganti elemen `.project-art` dengan gambar proyek yang memiliki teks alternatif deskriptif.
4. **Warna dan font**: ubah token warna serta nama font di `css/style.css` dan tautan Google Fonts di `index.html`.

## Hosting gratis
- **GitHub Pages**: upload isi folder ke repository, lalu Settings > Pages > pilih branch `main`.
- **Netlify**: drag and drop folder ini ke app.netlify.com/drop.
- **Vercel**: import repository, biarkan pengaturan default.
