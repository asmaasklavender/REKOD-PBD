# PBD Tracker (PWA + Google Sheets)

Aplikasi web "Sistem Perekodan Pentaksiran Bilik Darjah (PBD)" — boleh dipasang
ke skrin utama telefon/tablet (PWA), dihoskan percuma melalui GitHub Pages,
dan rekod boleh disimpan **kekal** ke Google Sheets anda sendiri.

## Kandungan folder
- `index.html` – halaman utama (React, Tailwind, Babel & Google Identity Services dari CDN — tiada langkah "build")
- `app.js` – kod aplikasi penuh
- `manifest.json`, `icon.svg`, `service-worker.js` – keperluan PWA
- `README.md` – panduan ini

## BAHAGIAN A - Pasang di GitHub Pages

1. **Cipta repositori GitHub baru** (contoh nama: `pbd-tracker`) → **Public**
2. **Muat naik semua fail** dalam folder ini (Add file → Upload files → Commit)
3. **Settings → Pages** → Source: branch `main`, folder `/ (root)` → Save
   - Pautan akan menjadi: `https://<nama-pengguna>.github.io/pbd-tracker/`
4. Buka pautan di telefon/tablet (Chrome/Safari) → **Add to Home Screen**

## BAHAGIAN B - Sediakan Google Sheets (supaya rekod kekal)

Google mengehadkan akses API kepada domain yang didaftarkan sahaja, jadi anda
perlu cipta "kunci" (OAuth Client ID) sendiri — percuma, sekali sahaja.

### Langkah 1: Cipta Hamparan Google Sheets
1. Pergi ke [sheets.google.com](https://sheets.google.com) → cipta hamparan baru (boleh kosong)
2. Salin **Spreadsheet ID** daripada URL:
   `docs.google.com/spreadsheets/d/`**`INI-ID-DIA`**`/edit`

### Langkah 2: Cipta Google Cloud Project & OAuth Client ID
1. Pergi ke [console.cloud.google.com](https://console.cloud.google.com) → cipta projek baru
2. **APIs & Services → Library** → cari "Google Sheets API" → **Enable**
3. **APIs & Services → OAuth consent screen** → pilih "External" → isi nama apl
   ringkas (cth: "PBD Tracker") → simpan (boleh tambah akaun Gmail anda di
   bawah "Test users" jika status masih "Testing")
4. **APIs & Services → Credentials → Create Credentials → OAuth client ID**
   - Application type: **Web application**
   - Authorized JavaScript origins: tambah pautan GitHub Pages anda, cth:
     `https://<nama-pengguna>.github.io`
   - Klik **Create** → salin **Client ID** yang terhasil

### Langkah 3: Sambungkan dalam apl
1. Buka apl PBD Tracker (versi GitHub Pages) di peranti anda
2. Klik ikon awan **"Sheets"** di bahagian atas
3. Tampal **Client ID** dan **Spreadsheet ID** → **Log Masuk dengan Google**
4. Selepas log masuk, klik **"Muat Naik ke Sheets"** untuk menyimpan rekod
   semasa, atau **"Muat Turun dari Sheets"** untuk memulihkan rekod yang
   pernah disimpan (cth. di peranti lain)

Apl akan mencipta 3 tab dalam hamparan anda secara automatik:
- **PBD_Config** — struktur penuh (kelas, subjek, murid, rekod) dalam format data — untuk pemulihan tepat dalam apl
- **PBD_Rekod** — jadual mudah dibaca (Kelas, Subjek, Murid, TP, Nota, dll.) — boleh dibuka terus di Google Sheets untuk semakan/cetak
- **PBD_DSKP** — senarai Topik, Standard Kandungan & Standard Pembelajaran bagi setiap subjek

## Nota penting

- **"Muat Naik ke Sheets" menulis ganti** kandungan 3 tab tersebut setiap kali
  ditekan (bukan sinkron automatik). Simpan secara kerap, terutamanya selepas
  sesi pentaksiran.
- **Gambar dari kamera/galeri telefon TIDAK disimpan ke Sheets** (fail sebegitu
  hanya wujud sementara dalam pelayar). Untuk lampiran yang kekal, gunakan
  pilihan **"Pautan Google Drive"** semasa menambah lampiran, dan pastikan
  fail dikongsi sebagai "Sesiapa yang mempunyai pautan boleh melihat".
- **Cetak PDF:** butang "Cetak PDF" menggunakan dialog cetak terbina-dalam
  penyemak imbas — pilih destinasi "Save as PDF".
- Ciri log masuk Google **tidak berfungsi** dalam pratonton Claude Artifacts —
  ia memerlukan domain berdaftar (langkah 2 di atas), jadi hanya berfungsi
  selepas apl dideploy di GitHub Pages.
- Untuk kemas kini pada masa hadapan, edit `app.js` dan muat naik semula ke
  repositori GitHub yang sama — GitHub Pages akan kemas kini secara automatik.
