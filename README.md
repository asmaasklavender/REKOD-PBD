# PBD Tracker (PWA + Auto-simpan + Google Sheets)

Aplikasi "Sistem Perekodan Pentaksiran Bilik Darjah (PBD)" — Tajuk →
Standard Kandungan → Standard Pembelajaran, dengan Tahap Penguasaan,
Lampiran dan Justifikasi bagi setiap murid setiap tajuk.

## Apa yang baharu
- **Auto-simpan** — rekod disimpan secara automatik ke storan tempatan
  peranti (browser). **Refresh atau tutup tab tidak lagi memadam data**
  (dalam versi GitHub Pages yang dideploy).
- **Seret & lepas gambar** — boleh seret imej terus daripada Google Docs
  atau mana-mana halaman web ke ruang lampiran, bukan sekadar muat naik fail.
- **Laporan cetak terperinci** — setiap tajuk dipaparkan berasingan lengkap
  dengan Standard Kandungan, Standard Pembelajaran, TP setiap murid,
  gambar bukti dan justifikasi.
- **Urus Murid pukal** — tambah atau edit banyak nama murid sekali gus
  (satu nama setiap baris).
- **Susun kedudukan murid** — anak panah atas/bawah untuk menyusun semula
  senarai murid dalam "Urus Murid".

## Kandungan folder
- `index.html`, `app.js` – aplikasi penuh (React, Tailwind, Babel dari CDN — tiada langkah "build")
- `manifest.json`, `icon.svg`, `service-worker.js` – keperluan PWA
- `README.md` – panduan ini

## BAHAGIAN A - Pasang di GitHub Pages
1. Cipta repositori GitHub baru (Public) → Upload semua fail dalam folder ini → Commit
2. **Settings → Pages** → Source: branch `main`, folder `/ (root)` → Save
3. Buka pautan `https://<nama-pengguna>.github.io/<repo>/` di telefon/tablet
4. **Add to Home Screen** (Chrome: menu ⋮ → Install app; Safari: Share → Add to Home Screen)

## BAHAGIAN B - Auto-simpan (storan tempatan)
Selepas dideploy di GitHub Pages, apl secara automatik menyimpan semua
data (kelas, subjek, tajuk, murid, TP, lampiran, justifikasi) ke storan
tempatan peranti anda sebaik sahaja anda membuat perubahan. Tiada
tindakan diperlukan — cukup buka semula apl dan data akan kekal.

**Had:** storan ini terikat kepada **peranti + penyemak imbas** yang
sama. Jika anda buka apl di peranti lain, ia tidak akan menunjukkan
data yang sama — gunakan Google Sheets (Bahagian D) untuk simpanan
kekal yang boleh diakses merentasi peranti.

## BAHAGIAN C - Seret & Lepas Gambar (cth. daripada Google Docs)
Dalam ruang "Lampiran" bagi setiap murid, anda boleh:
1. Klik untuk pilih fail (kamera / galeri), **atau**
2. **Seret gambar terus** daripada tab/tetingkap lain (cth. gambar dalam
   dokumen Google Docs yang sedang dibuka) dan lepaskan pada ruang
   lampiran tersebut.

Jika gambar tidak terpapar selepas diseret (kadangkala berlaku disebabkan
sekatan akses imej oleh Google), muat naik gambar tersebut sebagai fail
(cth. simpan/screenshot dahulu), atau kongsikan fail asal melalui pautan
Google Drive.

## BAHAGIAN D - Google Sheets (simpanan kekal merentasi peranti)
1. Cipta hamparan Google Sheets kosong → salin **Spreadsheet ID** daripada URL
2. Di [console.cloud.google.com](https://console.cloud.google.com): cipta projek →
   enable "Google Sheets API" → OAuth consent screen (External, isi nama apl) →
   Credentials → **Create OAuth client ID** (Web application) → tambah
   `https://<nama-pengguna>.github.io` pada "Authorized JavaScript origins" →
   salin **Client ID**
3. Dalam apl: klik ikon **Sheets** → tampal Client ID & Spreadsheet ID →
   Log Masuk dengan Google → **Muat Naik ke Sheets** / **Muat Turun dari Sheets**

Apl mencipta 3 tab automatik: **PBD_Config** (data penuh untuk pemulihan),
**PBD_Rekod** (jadual mudah dibaca), **PBD_DSKP** (Tajuk/SK/SP setiap subjek).

## Nota penting
- **Gambar dari kamera/galeri/seretan TIDAK disimpan ke Sheets** (hanya
  wujud dalam pelayar peranti tersebut, walaupun kekal selepas refresh
  berkat auto-simpan). Untuk lampiran yang boleh dikongsi/kekal
  merentasi peranti, guna pilihan **"Pautan Google Drive"**.
- **"Muat Naik ke Sheets" menulis ganti** 3 tab tersebut setiap kali ditekan.
- **Cetak PDF** menggunakan dialog cetak terbina-dalam pelayar — pilih "Save as PDF".
- Log masuk Google **tidak berfungsi** dalam pratonton Claude Artifacts —
  begitu juga auto-simpan tidak aktif di sana (storan pelayar disekat
  dalam persekitaran pratonton) — kedua-duanya berfungsi sepenuhnya
  selepas dideploy di GitHub Pages.
