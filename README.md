# Website Ubahin

M10 tahap awal, diotorisasi 6 November 2026 (D-069). Website produk dengan
unduhan, panduan, privasi, catatan rilis dan profil singkat NaufalNyaa.
Tidak ada converter web, akun, formulir unggahan, analitik atau deployment.

## Menjalankan

Node.js 22.19+; tidak perlu install dependency.

```powershell
npm run build
npm run check
npm run dev
```

Buka http://127.0.0.1:4173. Output statis berada di `dist-site/`.
Build berdiri sendiri, tanpa akses ke folder aplikasi atau sumber desktop.
Unduhan langsung mengarah ke GitHub Releases versi v1.0.0.

## Deploy ke Vercel

1. Import repository `MbullHexScript/ubahin-site` dari GitHub.
2. Root Directory: root repository (biarkan kosong), bukan `website/`.
3. Framework: Other. Node.js: 22.x.
4. `vercel.json` menetapkan build `npm run build && npm run check`,
   output `dist-site`, dan install `npm ci --ignore-scripts`.
5. Deploy. Tidak diperlukan environment variable atau backend.

Installer, bridge npm, checksum dan sumber komponen adalah lampiran
[GitHub Release v1.0.0](https://github.com/MbullHexScript/ubahin-site/releases/tag/v1.0.0),
bukan file Git atau deployment Vercel. Sumber komponen dibagi menjadi dua
bagian di bawah 2 GiB; SOURCE-PARTS.md pada rilis memuat cara penggabungan
serta hash arsip asli. Seluruh bagian harus tetap tersedia.
Kode desktop privat, cache QA, build lokal dan kredensial tidak masuk repository.
Sumber website terlihat publik; ini tidak memberikan lisensi MIT atas produk.

Untuk versi berikutnya: unggah aset rilis beserta sumber dan checksum,
verifikasi tautannya, kemudian perbarui versi/URL dalam src/index.html dan tes.
Tidak ada unduhan update otomatis di desktop.

## Desain

Geist lokal, latar #F7F9FC, teks #202737, sekunder #566478, brand #4F63BE,
aksen mint #BBDCD9 dan lilac #D5CAEC. Tema gelap memakai #111827.
Hero dua kolom: judul di kiri, ilustrasi original lembar file berlapis kaca
di kanan. Pada ponsel keduanya bertumpuk. Format ditampilkan sebagai daftar
terbuka agar kompatibilitas mudah dipindai; bukan kumpulan kartu dekoratif.
Urutan: produk → format → cara pakai → unduhan → FAQ → rilis → privasi.
Kaca selektif di navigasi/ilustrasi, tanpa animasi terus-menerus, mendukung
keyboard, reduced-motion/transparency dan fallback opak.

HTML/CSS/JS statis dipilih karena kebutuhan hanya konten dan unduhan;
tanpa framework atau dependency runtime baru. Font Geist 5.3.0 dari paket
desktop membawa OFL di assets/GEIST-OFL.txt; mark SVG original milik Ubahin.

Rujukan API yang diperiksa: [Node fs](https://nodejs.org/api/fs.html),
[HTML details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details).
