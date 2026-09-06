# PBD Tracker (PWA + Google Sheets)

Aplikasi "Sistem Perekodan Pentaksiran Bilik Darjah (PBD)" — setiap subjek
disusun mengikut **Tajuk → Standard Kandungan → Standard Pembelajaran**, dan
setiap murid diberikan **Tahap Penguasaan (TP1-TP6)**, **Lampiran** (bukti)
dan **Justifikasi** bagi setiap tajuk. Boleh dipasang ke skrin utama
telefon/tablet (PWA) dan rekod boleh disimpan kekal ke Google Sheets anda.

## Kandungan folder
- `index.html`, `app.js` – aplikasi penuh (React, Tailwind, Babel dari CDN — tiada langkah "build")
- `manifest.json`, `icon.svg`, `service-worker.js` – keperluan PWA
- `README.md` – panduan ini

## BAHAGIAN A - Pasang di GitHub Pages
1. Cipta repositori GitHub baru (Public) → Upload semua fail dalam folder ini → Commit
2. **Settings → Pages** → Source: branch `main`, folder `/ (root)` → Save
3. Buka pautan `https://<nama-pengguna>.github.io/<repo>/` di telefon/tablet
4. **Add to Home Screen** (Chrome: menu ⋮ → Install app; Safari: Share → Add to Home Screen)

## BAHAGIAN B - Sediakan Google Sheets (rekod kekal)
1. Cipta hamparan Google Sheets kosong → salin **Spreadsheet ID** daripada URL
2. Di [console.cloud.google.com](https://console.cloud.google.com): cipta projek →
   enable "Google Sheets API" → OAuth consent screen (External, isi nama apl) →
   Credentials → **Create OAuth client ID** (Web application) → tambah
   `https://<nama-pengguna>.github.io` pada "Authorized JavaScript origins" →
   salin **Client ID**
3. Dalam apl: klik ikon **Sheets** → tampal Client ID & Spreadsheet ID →
   Log Masuk dengan Google → **Muat Naik ke Sheets** / **Muat Turun dari Sheets**

Apl mencipta 3 tab automatik:
- **PBD_Config** — data struktur penuh (untuk pemulihan tepat dalam apl)
- **PBD_Rekod** — jadual mudah dibaca: Kelas, Subjek, Tajuk, Murid, TP, Justifikasi, Bil. Lampiran
- **PBD_DSKP** — Subjek, Tajuk, Standard Kandungan, Standard Pembelajaran

## Struktur data (ringkasan)
- **Subjek** → boleh tambah/edit/padam, pilih warna sendiri
- **Tajuk** (bagi setiap subjek) → Tajuk + Standard Kandungan + Standard Pembelajaran, boleh tambah/edit/padam ("Urus Tajuk")
- **Bagi setiap murid, bagi setiap tajuk** → Tahap Penguasaan (TP1-TP6), Lampiran (gambar/pautan), Justifikasi (nota)
- **Pentaksiran Pukal** — pilih beberapa murid, tetapkan TP sama serentak

## Nota penting
- **Gambar dari kamera/galeri telefon TIDAK disimpan ke Sheets** (sementara
  sahaja dalam pelayar). Untuk lampiran kekal, guna pilihan **"Pautan Google
  Drive"** semasa menambah lampiran (kongsi fail sebagai "Sesiapa yang
  mempunyai pautan boleh melihat").
- **"Muat Naik ke Sheets" menulis ganti** 3 tab tersebut setiap kali ditekan.
- **Cetak PDF** menggunakan dialog cetak terbina-dalam pelayar — pilih "Save as PDF".
- Log masuk Google **tidak berfungsi** dalam pratonton Claude Artifacts — ia
  memerlukan domain berdaftar (Bahagian B, langkah 2), jadi hanya berfungsi
  selepas dideploy di GitHub Pages.
