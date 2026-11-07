# M10 — Website Ubahin

7 November 2026. Website statis produk, download, panduan, FAQ, privasi dan
changelog dipush ke MbullHexScript/ubahin-site. Kode desktop privat tidak
masuk repository. Tidak ada dependency runtime atau layanan konversi web.

## Validasi

- Build berdiri sendiri tanpa folder aplikasi: lulus.
- Syntax checks dan tiga tes tautan, batas distribusi serta isolasi output: lulus.
- Formatter dan git diff --check: lulus.
- UI browser: desktop 1440x1000 gelap, ponsel 320x800 terang; tidak ada
  overflow horizontal setelah perbaikan hero. Uji sebelumnya 390px,
  terang/gelap, FAQ, navigasi anchor, persistensi tema dan keyboard disclosure lulus.
- Salin perintah npm: status Perintah disalin; console error kosong.
- Screenshot lokal docs/qa/ sengaja tidak dipush.
- Unduhan dipetakan ke GitHub Releases v1.0.0. Integritas aset diperiksa
  terpisah saat unggahan, sebelum draft menjadi rilis publik.

## Deployment

Vercel: import repository, root kosong, Other, Node 22.x. vercel.json
menetapkan install/build/output dan header keamanan. Website tidak memerlukan
secret. Belum ada akun Vercel tersambung di lingkungan kerja; deployment
Vercel belum dibuktikan. Panduan langkah ada di README.md.

Arsip sumber komponen dibagi dua bagian dengan checksum rekonstruksi
identik. File besar, cache, bukti host dan source desktop tidak ikut build website.
