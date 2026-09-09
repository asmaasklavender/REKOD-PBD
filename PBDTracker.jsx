import React, { useState, useEffect, useRef } from "react";

/* ===========================================================
   IKON RINGKAS (SVG dalaman - tiada pergantungan luar)
=========================================================== */
function Icon({ children, size = 16, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      {children}
    </svg>
  );
}
const IconPlus = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></Icon>;
const IconPencil = (p) => <Icon {...p}><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></Icon>;
const IconTrash = (p) => <Icon {...p}><path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="M19 6l-1 14H6L5 6" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></Icon>;
const IconX = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>;
const IconCheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12" /></Icon>;
const IconChevronDown = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9" /></Icon>;
const IconCamera = (p) => <Icon {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" /><circle cx="12" cy="13" r="4" /></Icon>;
const IconImage = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></Icon>;
const IconLink = (p) => <Icon {...p}><path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line x1="8" y1="12" x2="16" y2="12" /></Icon>;
const IconSave = (p) => <Icon {...p}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></Icon>;
const IconPrinter = (p) => <Icon {...p}><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></Icon>;
const IconPaperclip = (p) => <Icon {...p}><path d="M21 12.5l-9 9a5 5 0 1 1-7-7l9-9a3.5 3.5 0 1 1 5 5l-9 9a2 2 0 1 1-3-3l8-8" /></Icon>;
const IconUsers = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>;
const IconSettings = (p) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" /></Icon>;
const IconStickyNote = (p) => <Icon {...p}><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5Z" /><path d="M15 3v6h6" /></Icon>;
const IconCloud = (p) => <Icon {...p}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 1 8.9" /></Icon>;
const IconUpload = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></Icon>;
const IconDownload = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Icon>;
const IconLogOut = (p) => <Icon {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></Icon>;
const IconBookOpen = (p) => <Icon {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" /></Icon>;
const IconSparkle = (p) => <Icon {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></Icon>;
const IconArrowUp = (p) => <Icon {...p}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></Icon>;
const IconArrowDown = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></Icon>;
const IconList = (p) => <Icon {...p}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></Icon>;

/* ===========================================================
   UTILITI
=========================================================== */
const uid = () => Math.random().toString(36).slice(2, 10);
const recKey = (...parts) => parts.filter((p) => p !== undefined && p !== null).join("::");
const todayStr = () => new Date().toLocaleDateString("ms-MY", { day: "numeric", month: "long", year: "numeric" });

/* ---- Simpanan tempatan (localStorage) - selamat guna try/catch:
   berfungsi penuh pada apl yang dideploy (GitHub Pages/PWA); dalam
   pratonton Claude Artifacts, storan pelayar disekat jadi ia senyap
   tidak buat apa-apa (tidak akan ranapkan apl). ---- */
const STORAGE_KEY = "pbd_tracker_state_v1";
let _savedCache; let _savedTried = false;
function loadSavedState() {
  if (_savedTried) return _savedCache;
  _savedTried = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    _savedCache = raw ? JSON.parse(raw) : null;
  } catch (e) { _savedCache = null; }
  return _savedCache;
}
function saveStateNow(state) {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* diam - storan tidak tersedia */ }
}

/* ---- Ekstrak imej daripada seretan (drag & drop) - fail sebenar ATAU
   pautan/HTML imej (cth. diseret daripada Google Docs / penyemak imbas) ---- */
function extractDroppedImage(dt) {
  try {
    const file = dt.files && dt.files[0];
    if (file && file.type && file.type.startsWith("image/")) return { url: URL.createObjectURL(file), source: "peranti" };
    const html = dt.getData && dt.getData("text/html");
    if (html) {
      const m = html.match(/<img[^>]+src="([^"]+)"/i);
      if (m && m[1]) return { url: m[1], source: "pautan" };
    }
    const uriList = dt.getData && dt.getData("text/uri-list");
    if (uriList && /^https?:\/\//i.test(uriList.trim())) return { url: uriList.trim().split("\n")[0], source: "pautan" };
    const plain = dt.getData && dt.getData("text/plain");
    if (plain && /^https?:\/\//i.test(plain.trim())) return { url: plain.trim(), source: "pautan" };
  } catch (e) { /* abaikan */ }
  return null;
}

function lighten(hex, amount) {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + Math.round((255 - (num >> 16)) * amount);
  let g = ((num >> 8) & 0xff) + Math.round((255 - ((num >> 8) & 0xff)) * amount);
  let b = (num & 0xff) + Math.round((255 - (num & 0xff)) * amount);
  r = Math.min(255, r); g = Math.min(255, g); b = Math.min(255, b);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
function driveLinkToDirect(url) {
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m && m[1]) return `https://drive.google.com/uc?export=view&id=${m[1]}`;
  return url;
}

/* ===========================================================
   TEMA WARNA - PASTEL CERIA
=========================================================== */
const UI = {
  bgApp: "linear-gradient(135deg, #FFF3F8 0%, #F6F0FF 48%, #EFF8FF 100%)",
  border: "#F0DDEE",
  borderSoft: "#F5E9F3",
  inputBorder: "#E9D2E7",
  bgAlt: "#FDF5FB",
  navBg: "#FFFDFE",
};
const TP_COLORS = { 1: "#F4738C", 2: "#F4A672", 3: "#DDA53B", 4: "#8FCB6B", 5: "#4FB584", 6: "#2F8F79" };
const TP_LIST = [1, 2, 3, 4, 5, 6];
const COLOR_PALETTE = ["#EC7FAE", "#A78BFA", "#67B8E3", "#5FBE8C", "#F4A672", "#F4738C", "#4FC1C0", "#8C9EF2"];

/* ===========================================================
   DATA LALAI (SEED)
=========================================================== */
const DEFAULT_CLASSES = [
  { id: "c1", name: "5 Cemerlang" },
  { id: "c2", name: "5 Bestari" },
  { id: "c3", name: "5 Dinamik" },
];
const STUDENT_NAMES = [
  "Ahmad Danish bin Zulkifli", "Nur Ain binti Rosli", "Chong Wei Jie", "Siti Aisyah binti Kamal",
  "Muhammad Haziq bin Rahim", "Tan Mei Ling", "Nurul Huda binti Azman", "Danish Iqbal bin Fadzil",
  "Vasanthi a/p Kumar", "Muhammad Aiman bin Yusof", "Farah Nabila binti Shafiq", "Lim Jun Hao",
];
function seedStudentsByClass() {
  const out = {};
  DEFAULT_CLASSES.forEach((c) => { out[c.id] = STUDENT_NAMES.map((name) => ({ id: uid(), name })); });
  return out;
}

function t(tajuk, sk, sp) { return { id: uid(), tajuk, standardKandungan: sk, standardPembelajaran: sp }; }

const DEFAULT_SUBJECTS = [
  {
    id: "psv", label: "Pendidikan Seni Visual", tag: "PSV", color: "#A78BFA",
    tajuk: [
      t("Menggambar", "Meneroka pelbagai bahan, alat dan teknik asas dalam aktiviti menggambar.", "Menghasilkan gambar menggunakan pelbagai teknik seperti lukisan, catan dan cetakan secara kreatif."),
      t("Membentuk dan Membuat Binaan", "Meneroka penggunaan bahan dan alat untuk menghasilkan binaan tiga dimensi.", "Menghasilkan binaan mudah menggunakan bahan kutipan atau bahan buangan secara kreatif."),
      t("Corak dan Rekaan", "Meneroka corak dan rekaan menggunakan pelbagai teknik.", "Menghasilkan corak dan rekaan berdasarkan objek atau alam semula jadi."),
    ],
  },
  {
    id: "muzik", label: "Pendidikan Muzik", tag: "Muzik", color: "#F4A672",
    tajuk: [
      t("Nyanyian", "Mempamerkan kemahiran menyanyi lagu secara solo atau berkumpulan.", "Menyanyi lagu dengan pic dan tempo yang betul mengikut markah muzik."),
      t("Permainan Alat Muzik", "Mempamerkan kemahiran memainkan alat perkusi mengikut rentak.", "Memainkan corak irama mudah menggunakan alat perkusi secara individu atau berkumpulan."),
      t("Pergerakan Kreatif", "Mempamerkan pergerakan kreatif berdasarkan rangsangan muzik.", "Mencipta pergerakan mudah berdasarkan rentak dan tempo lagu yang didengar."),
    ],
  },
  {
    id: "bm", label: "Bahasa Melayu", tag: "BM", color: "#67B8E3",
    tajuk: [
      t("Keluarga Bahagia", "1.1 Berbual tentang sesuatu perkara menggunakan kata, ayat dan sebutan yang betul.", "1.1.1 Berbual tentang sesuatu perkara dalam pelbagai situasi dengan menggunakan ayat yang mengandungi frasa yang betul."),
      t("Alam Sekitar", "2.1 Membaca dan memahami perkataan, frasa dan ayat daripada pelbagai bahan.", "2.1.1 Membaca dan memahami maklumat yang tersurat dengan betul daripada bahan multimedia."),
      t("Kesihatan Diri", "3.1 Menulis untuk menyampaikan maklumat menggunakan ayat yang jelas.", "3.1.1 Menulis ulasan yang menunjukkan pemahaman tentang sesuatu perkara dengan betul."),
    ],
  },
  {
    id: "sejarah", label: "Sejarah", tag: "Sejarah", color: "#5FBE8C",
    tajuk: [
      t("Zaman Prasejarah di Malaysia", "Memahami zaman prasejarah di Malaysia.", "Menyatakan ciri-ciri kehidupan masyarakat zaman prasejarah di Malaysia."),
      t("Kerajaan Awal di Malaysia", "Memahami kewujudan kerajaan awal di Malaysia.", "Menyenaraikan kerajaan awal yang wujud di Malaysia."),
      t("Kerajaan Melayu Melaka", "Memahami kewujudan dan perkembangan Kesultanan Melayu Melaka.", "Menyatakan sebab pembukaan Melaka oleh Parameswara."),
    ],
  },
];

/* ===========================================================
   GOOGLE SHEETS - UTILITI SINKRON (kekal / simpanan berterusan)
=========================================================== */
async function sheetsFetch(spreadsheetId, path, token, options = {}) {
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}${path}`, {
    ...options,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", ...(options.headers || {}) },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Ralat Sheets API (${res.status}): ${body.slice(0, 140)}`);
  }
  return res.json();
}
async function ensureSheetsExist(spreadsheetId, token, titles) {
  const meta = await sheetsFetch(spreadsheetId, "", token, { method: "GET" });
  const existing = (meta.sheets || []).map((s) => s.properties.title);
  const missing = titles.filter((tt) => !existing.includes(tt));
  if (missing.length) {
    await sheetsFetch(spreadsheetId, ":batchUpdate", token, {
      method: "POST",
      body: JSON.stringify({ requests: missing.map((title) => ({ addSheet: { properties: { title } } })) }),
    });
  }
}
async function writeSheetValues(spreadsheetId, token, sheetTitle, rows) {
  await sheetsFetch(spreadsheetId, `/values/${encodeURIComponent(sheetTitle)}!A1:Z10000:clear`, token, { method: "POST", body: JSON.stringify({}) });
  await sheetsFetch(spreadsheetId, `/values/${encodeURIComponent(sheetTitle)}!A1?valueInputOption=RAW`, token, { method: "PUT", body: JSON.stringify({ values: rows }) });
}
function buildConfigJSON(classes, subjects, studentsByClass, records, attachments) {
  const durableAttachments = {};
  Object.entries(attachments).forEach(([k, arr]) => {
    const filtered = (arr || []).filter((a) => a.source === "google-drive");
    if (filtered.length) durableAttachments[k] = filtered;
  });
  return JSON.stringify({ version: 2, savedAt: new Date().toISOString(), classes, subjects, studentsByClass, records, attachments: durableAttachments });
}
function buildRecordRows(classes, subjects, studentsByClass, records, attachments) {
  const header = ["Kelas", "Subjek", "Tajuk", "Murid", "Tahap Penguasaan", "Justifikasi", "Bil. Lampiran"];
  const rows = [header];
  classes.forEach((cls) => {
    (studentsByClass[cls.id] || []).forEach((student) => {
      subjects.forEach((subject) => {
        (subject.tajuk || []).forEach((tj) => {
          const key = recKey(subject.id, cls.id, tj.id, student.id);
          const e = records[key];
          if (e && (e.tp || e.note)) {
            rows.push([cls.name, subject.label, tj.tajuk, student.name, e.tp ? `TP${e.tp}` : "-", e.note || "", String((attachments[key] || []).length)]);
          }
        });
      });
    });
  });
  return rows;
}
function buildDSKPRows(subjects) {
  const header = ["Subjek", "Tajuk", "Standard Kandungan", "Standard Pembelajaran"];
  const rows = [header];
  subjects.forEach((s) => (s.tajuk || []).forEach((tj) => rows.push([s.label, tj.tajuk, tj.standardKandungan, tj.standardPembelajaran])));
  return rows;
}

/* ===========================================================
   KOMPONEN KECIL / SHARED
=========================================================== */
function TPSelector({ value, onChange, size = "md" }) {
  const dim = size === "sm" ? "h-7 w-7 text-xs" : "h-9 w-9 text-sm";
  return (
    <div className="flex gap-1.5 flex-wrap">
      {TP_LIST.map((tp) => {
        const active = value === tp;
        return (
          <button key={tp} type="button" onClick={() => onChange(tp)}
            className={`${dim} rounded-lg font-bold border transition-all shrink-0`}
            style={active
              ? { backgroundColor: TP_COLORS[tp], borderColor: TP_COLORS[tp], color: "#fff", transform: "scale(1.1)", boxShadow: "0 3px 8px rgba(0,0,0,0.16)" }
              : { backgroundColor: "#fff", borderColor: UI.inputBorder, color: "#8B7C93" }}
          >{tp}</button>
        );
      })}
    </div>
  );
}
function TPPill({ value }) {
  if (!value) return <span className="text-xs font-medium px-2 py-1 rounded-full bg-white text-slate-400 border" style={{ borderColor: UI.border }}>Belum dinilai</span>;
  return <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: TP_COLORS[value] }}>TP{value}</span>;
}
function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-[60] text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2"
      style={{ background: "linear-gradient(135deg, #EC7FAE, #A78BFA)" }}>
      <IconCheck size={16} />{message}
    </div>
  );
}
function ModalShell({ title, onClose, children, wide }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white w-full ${wide ? "sm:max-w-2xl" : "sm:max-w-md"} sm:rounded-3xl rounded-t-3xl max-h-[88vh] flex flex-col`}>
        <div className="flex items-center justify-between px-5 py-4 border-b shrink-0" style={{ borderColor: UI.border }}>
          <h3 className="font-bold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><IconX size={18} /></button>
        </div>
        <div className="p-5 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
function ManageItemsModal({ title, items, onAdd, onEdit, onDelete, onClose, placeholder, minItems = 0, onMoveUp, onMoveDown, onBulkSave, bulkPlaceholder }) {
  const [newLabel, setNewLabel] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editLabel, setEditLabel] = useState("");
  const [bulkOpen, setBulkOpen] = useState(false);
  const [bulkText, setBulkText] = useState("");
  const canReorder = !!(onMoveUp && onMoveDown);

  const openBulk = () => {
    if (onBulkSave) setBulkText(items.map((i) => i.label).join("\n"));
    setBulkOpen(true);
  };
  const addBulk = () => {
    const lines = bulkText.split("\n").map((s) => s.trim()).filter(Boolean);
    if (onBulkSave) {
      if (lines.length < items.length) {
        const ok = window.confirm(`Ini akan memadam ${items.length - lines.length} item daripada senarai sedia ada. Teruskan?`);
        if (!ok) return;
      }
      onBulkSave(lines);
    } else {
      lines.forEach((n) => onAdd(n));
    }
    setBulkText("");
    setBulkOpen(false);
  };

  return (
    <ModalShell title={title} onClose={onClose}>
      <div className="space-y-2 mb-4">
        {items.length === 0 && <p className="text-sm text-slate-400">Tiada item lagi.</p>}
        {items.map((item, idx) => (
          <div key={item.id} className="flex items-center gap-2 rounded-xl px-3 py-2 border" style={{ borderColor: UI.border }}>
            {canReorder && (
              <div className="flex flex-col shrink-0 -my-1">
                <button onClick={() => onMoveUp(item.id)} disabled={idx === 0} className={`text-slate-400 hover:text-slate-600 ${idx === 0 ? "opacity-20 cursor-not-allowed" : ""}`}><IconArrowUp size={13} /></button>
                <button onClick={() => onMoveDown(item.id)} disabled={idx === items.length - 1} className={`text-slate-400 hover:text-slate-600 ${idx === items.length - 1 ? "opacity-20 cursor-not-allowed" : ""}`}><IconArrowDown size={13} /></button>
              </div>
            )}
            {editingId === item.id ? (
              <input autoFocus value={editLabel} onChange={(e) => setEditLabel(e.target.value)} className="flex-1 text-sm outline-none border-b py-0.5" style={{ borderColor: UI.inputBorder }} />
            ) : (<span className="flex-1 text-sm text-slate-700">{item.label}</span>)}
            {editingId === item.id ? (
              <>
                <button onClick={() => { if (editLabel.trim()) onEdit(item.id, editLabel.trim()); setEditingId(null); }} className="text-emerald-500"><IconCheck size={16} /></button>
                <button onClick={() => setEditingId(null)} className="text-slate-400"><IconX size={16} /></button>
              </>
            ) : (
              <>
                <button onClick={() => { setEditingId(item.id); setEditLabel(item.label); }} className="text-slate-400 hover:text-slate-600"><IconPencil size={15} /></button>
                <button onClick={() => { if (items.length > minItems) onDelete(item.id); }} className={`text-slate-400 hover:text-rose-500 ${items.length <= minItems ? "opacity-30 cursor-not-allowed" : ""}`}><IconTrash size={15} /></button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={newLabel} onChange={(e) => setNewLabel(e.target.value)} placeholder={placeholder}
          onKeyDown={(e) => { if (e.key === "Enter" && newLabel.trim()) { onAdd(newLabel.trim()); setNewLabel(""); } }}
          className="flex-1 text-sm rounded-xl border px-3 py-2 outline-none" style={{ borderColor: UI.inputBorder }} />
        <button onClick={() => { if (newLabel.trim()) { onAdd(newLabel.trim()); setNewLabel(""); } }}
          className="flex items-center gap-1 text-sm font-semibold text-white rounded-xl px-3.5 py-2" style={{ background: "linear-gradient(135deg, #EC7FAE, #A78BFA)" }}>
          <IconPlus size={15} /> Tambah
        </button>
      </div>
      <button onClick={() => (bulkOpen ? setBulkOpen(false) : openBulk())} className="flex items-center gap-1.5 text-xs font-semibold mt-3" style={{ color: "#8B5A9E" }}>
        <IconList size={13} /> {bulkOpen ? "Tutup Mod Pukal" : (onBulkSave ? "Edit / Tambah Pukal (Bundle)" : "Tambah Pukal (Bundle)")}
      </button>
      {bulkOpen && (
        <div className="mt-2 space-y-2">
          <p className="text-[11px] text-slate-400">
            {onBulkSave
              ? "Satu nama setiap baris. Tukar nama sedia ada untuk edit, tambah baris baharu di bawah untuk murid baharu, atau padam baris untuk buang murid daripada senarai."
              : "Satu nama setiap baris untuk tambah beramai-ramai."}
          </p>
          <textarea value={bulkText} onChange={(e) => setBulkText(e.target.value)} rows={8}
            placeholder={bulkPlaceholder || "Cth:\nAli bin Kassim\nSiti binti Ahmad\nRavi a/l Kumar"}
            className="w-full text-sm rounded-xl border px-3 py-2 outline-none resize-none font-mono" style={{ borderColor: UI.inputBorder }} />
          <button onClick={addBulk} disabled={!bulkText.trim()} className="w-full text-sm font-semibold text-white rounded-xl py-2 disabled:opacity-40" style={{ background: "linear-gradient(135deg, #EC7FAE, #A78BFA)" }}>
            {onBulkSave ? "Simpan Senarai" : "Tambah Semua"} ({bulkText.split("\n").map((s) => s.trim()).filter(Boolean).length})
          </button>
        </div>
      )}
    </ModalShell>
  );
}
function SubjectFormModal({ initial, onSave, onClose }) {
  const isEdit = !!initial?.id;
  const [label, setLabel] = useState(initial?.label || "");
  const [tag, setTag] = useState(initial?.tag || "");
  const [color, setColor] = useState(initial?.color || COLOR_PALETTE[0]);
  return (
    <ModalShell title={isEdit ? "Kemaskini Subjek" : "Tambah Subjek Baru"} onClose={onClose}>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500">Nama Subjek</label>
          <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Cth: Pendidikan Jasmani"
            className="mt-1 w-full text-sm rounded-xl border px-3 py-2 outline-none" style={{ borderColor: UI.inputBorder }} />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Kod Ringkas (tag)</label>
          <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Cth: PJ"
            className="mt-1 w-full text-sm rounded-xl border px-3 py-2 outline-none" style={{ borderColor: UI.inputBorder }} />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Warna</label>
          <div className="flex gap-2 mt-1.5 flex-wrap">
            {COLOR_PALETTE.map((c) => (
              <button key={c} onClick={() => setColor(c)} className="h-9 w-9 rounded-full border-2" style={{ backgroundColor: c, borderColor: color === c ? "#3A2E3D" : "transparent" }} />
            ))}
          </div>
        </div>
        <button disabled={!label.trim()} onClick={() => onSave({ id: initial?.id, label: label.trim(), tag: tag.trim() || label.trim().slice(0, 5), color })}
          className="w-full text-sm font-semibold text-white rounded-xl py-2.5 disabled:opacity-40" style={{ backgroundColor: color }}
        >{isEdit ? "Simpan Perubahan" : "Cipta Subjek"}</button>
      </div>
    </ModalShell>
  );
}
function ManageSubjectsModal({ subjects, onEdit, onDelete, onAddNew, onClose }) {
  return (
    <ModalShell title="Urus Subjek" onClose={onClose} wide>
      <div className="space-y-2 mb-4">
        {subjects.map((s) => (
          <div key={s.id} className="flex items-center gap-3 rounded-xl px-3 py-2.5 border" style={{ borderColor: UI.border }}>
            <span className="h-3.5 w-3.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">{s.label}</p>
              <p className="text-xs text-slate-400">{(s.tajuk || []).length} tajuk</p>
            </div>
            <button onClick={() => onEdit(s)} className="text-slate-400 hover:text-slate-600"><IconPencil size={15} /></button>
            <button onClick={() => { if (subjects.length > 1) onDelete(s.id); }} className={`text-slate-400 hover:text-rose-500 ${subjects.length <= 1 ? "opacity-30 cursor-not-allowed" : ""}`}><IconTrash size={15} /></button>
          </div>
        ))}
      </div>
      <button onClick={onAddNew} className="w-full flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-2.5 border border-dashed" style={{ borderColor: "#D9A9D3", color: "#8B5A9E" }}>
        <IconPlus size={15} /> Tambah Subjek Baru
      </button>
    </ModalShell>
  );
}
function TajukFormModal({ initial, onSave, onClose }) {
  const [tajuk, setTajuk] = useState(initial?.tajuk || "");
  const [sk, setSk] = useState(initial?.standardKandungan || "");
  const [sp, setSp] = useState(initial?.standardPembelajaran || "");
  return (
    <ModalShell title={initial?.id ? "Kemaskini Tajuk" : "Tambah Tajuk Baru"} onClose={onClose} wide>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500">Tajuk</label>
          <input value={tajuk} onChange={(e) => setTajuk(e.target.value)} placeholder="Cth: Unit 1 - Keluarga Bahagia"
            className="mt-1 w-full text-sm rounded-xl border px-3 py-2 outline-none" style={{ borderColor: UI.inputBorder }} />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Standard Kandungan</label>
          <textarea value={sk} onChange={(e) => setSk(e.target.value)} rows={3} placeholder="Cth: 1.1 Berbual tentang sesuatu perkara..."
            className="mt-1 w-full text-sm rounded-xl border px-3 py-2 outline-none resize-none" style={{ borderColor: UI.inputBorder }} />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Standard Pembelajaran</label>
          <textarea value={sp} onChange={(e) => setSp(e.target.value)} rows={3} placeholder="Cth: 1.1.1 Berbual dalam pelbagai situasi..."
            className="mt-1 w-full text-sm rounded-xl border px-3 py-2 outline-none resize-none" style={{ borderColor: UI.inputBorder }} />
        </div>
        <button disabled={!tajuk.trim()} onClick={() => onSave({ id: initial?.id, tajuk: tajuk.trim(), standardKandungan: sk.trim(), standardPembelajaran: sp.trim() })}
          className="w-full text-sm font-semibold text-white rounded-xl py-2.5 disabled:opacity-40" style={{ background: "linear-gradient(135deg, #EC7FAE, #A78BFA)" }}
        >{initial?.id ? "Simpan Perubahan" : "Tambah Tajuk"}</button>
      </div>
    </ModalShell>
  );
}
function ManageTajukModal({ subject, onAddNew, onEdit, onDelete, onClose }) {
  const items = subject.tajuk || [];
  return (
    <ModalShell title={`Urus Tajuk - ${subject.label}`} onClose={onClose} wide>
      <div className="space-y-2 mb-4">
        {items.length === 0 && <p className="text-sm text-slate-400">Tiada tajuk lagi.</p>}
        {items.map((item) => (
          <div key={item.id} className="rounded-xl px-3 py-2.5 border" style={{ borderColor: UI.border }}>
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-slate-800">{item.tajuk}</p>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => onEdit(item)} className="text-slate-400 hover:text-slate-600"><IconPencil size={15} /></button>
                <button onClick={() => { if (items.length > 1) onDelete(item.id); }} className={`text-slate-400 hover:text-rose-500 ${items.length <= 1 ? "opacity-30 cursor-not-allowed" : ""}`}><IconTrash size={15} /></button>
              </div>
            </div>
            {item.standardPembelajaran && <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.standardPembelajaran}</p>}
          </div>
        ))}
      </div>
      <button onClick={onAddNew} className="w-full flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-2.5 border border-dashed" style={{ borderColor: "#D9A9D3", color: "#8B5A9E" }}>
        <IconPlus size={15} /> Tambah Tajuk Baru
      </button>
    </ModalShell>
  );
}
function UploadSourceModal({ onPick, onClose }) {
  const [driveUrl, setDriveUrl] = useState("");
  const handleFile = (file) => { if (file) onPick(URL.createObjectURL(file), "peranti"); };
  return (
    <ModalShell title="Tambah Lampiran" onClose={onClose}>
      <div className="space-y-2.5">
        <label className="flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-2.5 border cursor-pointer text-slate-700" style={{ borderColor: UI.inputBorder }}>
          <IconCamera size={16} /> Ambil Gambar (Kamera)
          <input type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
        </label>
        <label className="flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-2.5 border cursor-pointer text-slate-700" style={{ borderColor: UI.inputBorder }}>
          <IconImage size={16} /> Pilih dari Galeri Telefon
          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
        </label>
        <div className="flex items-center gap-2 text-xs text-slate-400 py-1"><div className="flex-1 h-px" style={{ backgroundColor: UI.border }} />atau<div className="flex-1 h-px" style={{ backgroundColor: UI.border }} /></div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 rounded-xl px-3 py-2 border" style={{ borderColor: UI.inputBorder }}>
            <IconLink size={15} className="text-slate-400 shrink-0" />
            <input value={driveUrl} onChange={(e) => setDriveUrl(e.target.value)} placeholder="Tampal pautan Google Drive..." className="flex-1 text-sm outline-none min-w-0" />
          </div>
          <button disabled={!driveUrl.trim()} onClick={() => onPick(driveLinkToDirect(driveUrl.trim()), "google-drive")}
            className="w-full text-sm font-semibold text-white rounded-xl py-2 disabled:opacity-40" style={{ background: "linear-gradient(135deg, #EC7FAE, #A78BFA)" }}
          >Guna Pautan Google Drive</button>
          <p className="text-[11px] text-slate-400">Pastikan fail dikongsi sebagai "Sesiapa yang mempunyai pautan boleh melihat".</p>
        </div>
      </div>
    </ModalShell>
  );
}
function AttachmentsModal({ studentName, items, onAdd, onReplace, onDelete, onClose }) {
  const [uploadMode, setUploadMode] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault(); e.stopPropagation();
    setDragActive(false);
    const found = extractDroppedImage(e.dataTransfer);
    if (found) onAdd(found.url, found.source);
  };

  return (
    <>
      <ModalShell title={`Lampiran - ${studentName}`} onClose={onClose} wide>
        {items.length === 0 && <p className="text-sm text-slate-400 mb-4">Belum ada lampiran.</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {items.map((att) => (
            <div key={att.id} className="relative rounded-xl overflow-hidden border aspect-square bg-slate-50 group" style={{ borderColor: UI.border }}>
              <img src={att.url} alt="Lampiran" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end justify-end gap-1.5 p-1.5">
                <button onClick={() => setUploadMode({ replaceId: att.id })} className="h-7 w-7 rounded-full bg-white/90 flex items-center justify-center text-slate-700"><IconPencil size={13} /></button>
                <button onClick={() => onDelete(att.id)} className="h-7 w-7 rounded-full bg-white/90 flex items-center justify-center text-rose-500"><IconTrash size={13} /></button>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => setUploadMode("add")}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className="w-full flex flex-col items-center justify-center gap-1.5 text-sm font-semibold rounded-xl py-5 border-2 border-dashed cursor-pointer transition-colors"
          style={dragActive ? { borderColor: "#A78BFA", backgroundColor: lighten("#A78BFA", 0.9), color: "#8B5A9E" } : { borderColor: "#D9A9D3", color: "#8B5A9E" }}
        >
          <IconPlus size={18} />
          <span>{dragActive ? "Lepaskan gambar di sini..." : "Tambah Lampiran"}</span>
          <span className="text-[11px] font-normal text-slate-400">Klik untuk pilih, atau seret & lepas gambar (cth. dari Google Docs)</span>
        </div>
      </ModalShell>
      {uploadMode && (
        <UploadSourceModal onClose={() => setUploadMode(null)}
          onPick={(url, source) => { if (uploadMode === "add") onAdd(url, source); else onReplace(uploadMode.replaceId, url, source); setUploadMode(null); }} />
      )}
    </>
  );
}
function SheetsModal({ config, setConfig, accessToken, busy, onSignIn, onSignOut, onSave, onLoad, onClose, available }) {
  return (
    <ModalShell title="Sambungan Google Sheets" onClose={onClose} wide>
      <div className="space-y-4">
        {!available && (
          <div className="text-xs rounded-xl p-3 border" style={{ backgroundColor: "#FFF6E9", borderColor: "#F3D9A6", color: "#8A6D2F" }}>
            Log masuk Google tidak tersedia dalam pratonton ini. Ciri ini berfungsi sepenuhnya selepas apl
            digunakan pada versi GitHub Pages / PWA (lihat README).
          </div>
        )}
        <div>
          <label className="text-xs font-medium text-slate-500">Google OAuth Client ID</label>
          <input value={config.clientId} onChange={(e) => setConfig((c) => ({ ...c, clientId: e.target.value }))}
            placeholder="xxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com"
            className="mt-1 w-full text-sm rounded-xl border px-3 py-2 outline-none" style={{ borderColor: UI.inputBorder }} />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">ID Hamparan Google Sheets (Spreadsheet ID)</label>
          <input value={config.spreadsheetId} onChange={(e) => setConfig((c) => ({ ...c, spreadsheetId: e.target.value }))}
            placeholder="Salin daripada URL hamparan anda" className="mt-1 w-full text-sm rounded-xl border px-3 py-2 outline-none" style={{ borderColor: UI.inputBorder }} />
          <p className="text-[11px] text-slate-400 mt-1">Cth URL: docs.google.com/spreadsheets/d/<b>ID-INI</b>/edit</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className={`h-2.5 w-2.5 rounded-full ${accessToken ? "bg-emerald-500" : "bg-slate-300"}`} />
          {accessToken ? "Disambungkan dengan Google" : "Belum log masuk"}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {!accessToken ? (
            <button onClick={onSignIn} disabled={!config.clientId.trim()} className="col-span-2 flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-xl py-2.5 disabled:opacity-40" style={{ background: "linear-gradient(135deg, #EC7FAE, #A78BFA)" }}>
              Log Masuk dengan Google
            </button>
          ) : (
            <>
              <button onClick={onSave} disabled={busy || !config.spreadsheetId.trim()} className="flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-xl py-2.5 disabled:opacity-40" style={{ backgroundColor: "#4FB584" }}>
                <IconUpload size={15} /> {busy ? "Menyimpan..." : "Muat Naik ke Sheets"}
              </button>
              <button onClick={onLoad} disabled={busy || !config.spreadsheetId.trim()} className="flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-2.5 border text-slate-700 disabled:opacity-40" style={{ borderColor: UI.inputBorder }}>
                <IconDownload size={15} /> {busy ? "Memuat..." : "Muat Turun dari Sheets"}
              </button>
              <button onClick={onSignOut} className="col-span-2 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 py-1"><IconLogOut size={13} /> Log Keluar Google</button>
            </>
          )}
        </div>
        <div className="text-xs text-slate-400 space-y-1 border-t pt-3" style={{ borderColor: UI.border }}>
          <p>1. Cipta hamparan Google Sheets kosong dan salin ID-nya daripada URL.</p>
          <p>2. Cipta OAuth Client ID (jenis Web) di Google Cloud Console dan tambah alamat apl anda pada "Authorized JavaScript origins".</p>
          <p>3. "Muat Naik" menulis semula tab <b>PBD_Config</b>, <b>PBD_Rekod</b> dan <b>PBD_DSKP</b>.</p>
          <p>4. Gambar dari kamera/galeri peranti tidak disimpan ke Sheets (hanya lampiran pautan Google Drive kekal).</p>
        </div>
      </div>
    </ModalShell>
  );
}

/* ===========================================================
   RINGKASAN
=========================================================== */
function SummaryBar({ subject, contextLabel, assessedCount, total, distribution }) {
  const pct = total === 0 ? 0 : Math.round((assessedCount / total) * 100);
  return (
    <div className="rounded-3xl border bg-white p-4 sm:p-5" style={{ borderColor: UI.border }}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-4 shrink-0">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#F5E9F3" strokeWidth="4" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke={subject.color} strokeWidth="4" strokeDasharray={`${(pct / 100) * 97.4} 97.4`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-700">{pct}%</div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Peratus Dinilai</p>
            <p className="text-xs text-slate-500 mt-0.5">{assessedCount} daripada {total} murid</p>
            {contextLabel && <p className="text-xs mt-1 font-medium" style={{ color: subject.color }}>{contextLabel}</p>}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-800 mb-2">Taburan Tahap Penguasaan</p>
          <div className="flex h-3 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#F5E9F3" }}>
            {TP_LIST.map((tp) => {
              const count = distribution[tp] || 0;
              const width = total === 0 ? 0 : (count / total) * 100;
              if (width === 0) return null;
              return <div key={tp} style={{ width: `${width}%`, backgroundColor: TP_COLORS[tp] }} title={`TP${tp}: ${count}`} />;
            })}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2.5">
            {TP_LIST.map((tp) => (
              <div key={tp} className="flex items-center gap-1.5 text-xs text-slate-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: TP_COLORS[tp] }} />
                TP{tp}: <span className="font-semibold text-slate-800">{distribution[tp] || 0}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyStudents() {
  return (
    <div className="rounded-3xl border border-dashed bg-white p-10 text-center text-sm text-slate-400" style={{ borderColor: "#D9A9D3" }}>
      Tiada murid dalam kelas ini. Sila tambah murid menggunakan butang "Urus Murid" di atas.
    </div>
  );
}

/* ===========================================================
   PAPARAN UTAMA: TAJUK -> TP + LAMPIRAN + JUSTIFIKASI SETIAP MURID
=========================================================== */
function TajukView({ subject, students, records, updateRecord, getKey, activeTajuk, onManageTajuk, getAttachments, openAttachments }) {
  const [selected, setSelected] = useState([]);
  useEffect(() => { setSelected([]); }, [activeTajuk?.id]);

  if (!activeTajuk) return <EmptyStudents />;
  if (students.length === 0) return <EmptyStudents />;

  const toggleSelect = (id) => setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const toggleSelectAll = () => setSelected(selected.length === students.length ? [] : students.map((s) => s.id));
  const bulkSetTP = (tp) => { if (selected.length === 0) return; selected.forEach((id) => updateRecord(getKey(id), { tp })); };

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border bg-white p-4" style={{ borderColor: UI.border, backgroundColor: lighten(subject.color, 0.93) }}>
        <div className="flex items-center gap-2 mb-2">
          <IconBookOpen size={15} style={{ color: subject.color }} />
          <p className="text-sm font-bold" style={{ color: subject.color }}>{activeTajuk.tajuk}</p>
        </div>
        {activeTajuk.standardKandungan && (
          <div className="mb-1.5"><p className="text-xs font-semibold text-slate-500">Standard Kandungan</p><p className="text-sm text-slate-600">{activeTajuk.standardKandungan}</p></div>
        )}
        {activeTajuk.standardPembelajaran && (
          <div><p className="text-xs font-semibold text-slate-500">Standard Pembelajaran</p><p className="text-sm text-slate-600">{activeTajuk.standardPembelajaran}</p></div>
        )}
      </div>

      <div className="rounded-2xl border p-3.5 flex flex-col sm:flex-row sm:items-center gap-3" style={{ backgroundColor: selected.length ? lighten(subject.color, 0.9) : "#fff", borderColor: selected.length ? subject.color : UI.border }}>
        <p className="text-sm font-semibold text-slate-700 shrink-0">{selected.length > 0 ? `${selected.length} murid dipilih` : "Pentaksiran Pukal (Bulk Assessment)"}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-500 mr-1">Tetapkan TP:</span>
          <TPSelector value={null} onChange={bulkSetTP} size="sm" />
          {selected.length > 0 && <button onClick={() => setSelected([])} className="text-xs font-medium text-slate-500 flex items-center gap-1 ml-1"><IconX size={13} /> Kosongkan</button>}
        </div>
      </div>

      <div className="rounded-3xl border bg-white overflow-hidden" style={{ borderColor: UI.border }}>
        <div className="flex items-center gap-3 px-4 py-2.5 border-b" style={{ borderColor: UI.borderSoft, backgroundColor: UI.bgAlt }}>
          <input type="checkbox" checked={selected.length === students.length} onChange={toggleSelectAll} className="h-4 w-4 rounded" />
          <span className="text-xs font-medium text-slate-500">Pilih Semua Murid</span>
        </div>
        <div className="divide-y" style={{ borderColor: UI.borderSoft }}>
          {students.map((student, idx) => {
            const key = getKey(student.id);
            const entry = records[key] || {};
            const atts = getAttachments(student.id);
            const isChecked = selected.includes(student.id);
            return (
              <div key={student.id} className="p-4" style={isChecked ? { backgroundColor: lighten(subject.color, 0.95) } : {}}>
                <div className="flex items-center gap-3 flex-wrap">
                  <input type="checkbox" checked={isChecked} onChange={() => toggleSelect(student.id)} className="h-4 w-4 rounded shrink-0" />
                  <span className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: subject.color }}>{idx + 1}</span>
                  <p className="font-semibold text-slate-800 text-sm flex-1 min-w-[140px]">{student.name}</p>
                  <TPPill value={entry.tp} />
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <TPSelector value={entry.tp} onChange={(tp) => updateRecord(key, { tp })} size="sm" />
                  <button onClick={() => openAttachments(student.id, student.name)}
                    className="flex items-center gap-1.5 text-xs font-semibold rounded-lg py-2 px-3 border" style={{ borderColor: subject.color, color: subject.color }}
                  ><IconPaperclip size={14} /> Lampiran ({atts.length})</button>
                </div>
                <div className="mt-2.5">
                  <p className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-1"><IconStickyNote size={12} /> Justifikasi</p>
                  <textarea value={entry.note || ""} onChange={(e) => updateRecord(key, { note: e.target.value })} rows={2}
                    placeholder="Cth: Murid dapat menyanyi dengan pic tepat dan menunjukkan keyakinan..."
                    className="w-full text-xs rounded-xl border p-2.5 resize-none focus:outline-none" style={{ borderColor: UI.inputBorder }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ===========================================================
   LAPORAN CETAK / PDF
=========================================================== */
function PrintReport({ subject, classObj, students, records, attachments }) {
  const tajukList = subject.tajuk || [];
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <style>{`@page { margin: 14mm; } .avoid-break { break-inside: avoid; page-break-inside: avoid; }`}</style>
      <div className="flex items-start justify-between border-b-2 border-black pb-3 mb-6">
        <div>
          <h1 className="text-xl font-bold">Ringkasan Pentaksiran Bilik Darjah (PBD)</h1>
          <p className="text-sm mt-1">Kelas: <b>{classObj?.name}</b> &nbsp;·&nbsp; Subjek: <b>{subject.label}</b></p>
        </div>
        <p className="text-xs text-right whitespace-nowrap">Tarikh cetak:<br /><b>{todayStr()}</b></p>
      </div>

      {tajukList.map((tj, ti) => (
        <div key={tj.id} className="mb-7">
          <div className="border-b border-black pb-1 mb-1.5">
            <p className="text-base font-bold">{ti + 1}. {tj.tajuk}</p>
          </div>
          {tj.standardKandungan && <p className="text-xs mb-0.5"><b>Standard Kandungan:</b> {tj.standardKandungan}</p>}
          {tj.standardPembelajaran && <p className="text-xs mb-2.5"><b>Standard Pembelajaran:</b> {tj.standardPembelajaran}</p>}

          <div className="space-y-2">
            {students.map((student, si) => {
              const key = recKey(subject.id, classObj.id, tj.id, student.id);
              const e = records[key] || {};
              const atts = attachments[key] || [];
              return (
                <div key={student.id} className="avoid-break border border-slate-400 rounded p-2.5 flex gap-3 text-xs">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">{si + 1}. {student.name} — {e.tp ? `TP${e.tp}` : "Belum dinilai"}</p>
                    <p className="mt-1"><b>Justifikasi:</b> {e.note || "-"}</p>
                  </div>
                  {atts.length > 0 && (
                    <div className="flex gap-1 shrink-0">
                      {atts.slice(0, 3).map((a) => <img key={a.id} src={a.url} className="h-14 w-14 object-cover border border-slate-400 rounded" />)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-10 flex justify-between text-sm avoid-break">
        <div>Disediakan oleh: ______________________</div>
        <div>Tarikh: ______________</div>
      </div>
      <p className="text-[10px] text-slate-400 mt-6">Dijana oleh PBD Tracker</p>
    </div>
  );
}

/* ===========================================================
   APLIKASI UTAMA
=========================================================== */
export default function App() {
  const saved = loadSavedState() || {};
  const [classes, setClasses] = useState(saved.classes || DEFAULT_CLASSES);
  const [selectedClassId, setSelectedClassId] = useState(saved.selectedClassId || DEFAULT_CLASSES[0].id);
  const [studentsByClass, setStudentsByClass] = useState(saved.studentsByClass || seedStudentsByClass);
  const [subjects, setSubjects] = useState(saved.subjects || DEFAULT_SUBJECTS);
  const [activeSubjectId, setActiveSubjectId] = useState(saved.activeSubjectId || DEFAULT_SUBJECTS[0].id);
  const [activeTajukId, setActiveTajukId] = useState(saved.activeTajukId || DEFAULT_SUBJECTS[0].tajuk[0].id);
  const [records, setRecords] = useState(saved.records || {});
  const [attachments, setAttachments] = useState(saved.attachments || {});
  const [toast, setToast] = useState(null);
  const [isPrinting, setIsPrinting] = useState(false);

  const [manageClassesOpen, setManageClassesOpen] = useState(false);
  const [manageStudentsOpen, setManageStudentsOpen] = useState(false);
  const [manageSubjectsOpen, setManageSubjectsOpen] = useState(false);
  const [subjectForm, setSubjectForm] = useState(null);
  const [manageTajukOpen, setManageTajukOpen] = useState(false);
  const [tajukForm, setTajukForm] = useState(null);
  const [attachmentsFor, setAttachmentsFor] = useState(null);

  const [sheetsOpen, setSheetsOpen] = useState(false);
  const [sheetsConfig, setSheetsConfig] = useState(saved.sheetsConfig || { clientId: "", spreadsheetId: "" });
  const [accessToken, setAccessToken] = useState(null);
  const [sheetsBusy, setSheetsBusy] = useState(false);
  const tokenClientRef = useRef(null);

  const activeSubject = subjects.find((s) => s.id === activeSubjectId) || subjects[0];
  const students = studentsByClass[selectedClassId] || [];
  const selectedClass = classes.find((c) => c.id === selectedClassId);
  const activeTajuk = (activeSubject?.tajuk || []).find((t2) => t2.id === activeTajukId) || null;

  useEffect(() => {
    if (!activeSubject) return;
    const ids = (activeSubject.tajuk || []).map((t2) => t2.id);
    if (!ids.includes(activeTajukId)) setActiveTajukId(ids[0] || null);
  }, [activeSubjectId, subjects]);

  useEffect(() => {
    const handler = () => setIsPrinting(false);
    window.addEventListener("afterprint", handler);
    return () => window.removeEventListener("afterprint", handler);
  }, []);

  useEffect(() => { tokenClientRef.current = null; }, [sheetsConfig.clientId]);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2500); };

  // Auto-simpan ke storan tempatan (debounced) supaya refresh/tutup tab tidak hilang data
  useEffect(() => {
    const timer = setTimeout(() => {
      saveStateNow({ classes, subjects, studentsByClass, records, attachments, selectedClassId, activeSubjectId, activeTajukId, sheetsConfig });
    }, 500);
    return () => clearTimeout(timer);
  }, [classes, subjects, studentsByClass, records, attachments, selectedClassId, activeSubjectId, activeTajukId, sheetsConfig]);

  // Beritahu sekali jika storan tempatan tidak tersedia (cth. pratonton Claude Artifacts)
  useEffect(() => {
    try {
      const k = "__pbd_probe__";
      window.localStorage.setItem(k, "1");
      window.localStorage.removeItem(k);
    } catch (e) {
      showToast("Nota: auto-simpan tidak tersedia dalam pratonton ini - guna versi GitHub Pages untuk penyimpanan automatik.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getKey = (studentId) => recKey(activeSubjectId, selectedClassId, activeTajukId, studentId);
  const updateRecord = (key, patch) => setRecords((prev) => ({ ...prev, [key]: { ...(prev[key] || {}), ...patch } }));

  const getAttachments = (studentId) => attachments[getKey(studentId)] || [];
  const addAttachment = (studentId, att) => setAttachments((prev) => { const k = getKey(studentId); return { ...prev, [k]: [...(prev[k] || []), att] }; });
  const editAttachment = (studentId, attId, patch) => setAttachments((prev) => { const k = getKey(studentId); return { ...prev, [k]: (prev[k] || []).map((a) => (a.id === attId ? { ...a, ...patch } : a)) }; });
  const deleteAttachment = (studentId, attId) => setAttachments((prev) => { const k = getKey(studentId); return { ...prev, [k]: (prev[k] || []).filter((a) => a.id !== attId) }; });
  const openAttachments = (studentId, studentName) => setAttachmentsFor({ studentId, studentName });

  // Kelas CRUD
  const addClass = (name) => { const id = uid(); setClasses((p) => [...p, { id, name }]); setStudentsByClass((p) => ({ ...p, [id]: [] })); };
  const editClass = (id, name) => setClasses((p) => p.map((c) => (c.id === id ? { ...c, name } : c)));
  const deleteClass = (id) => {
    if (classes.length <= 1) { showToast("Perlu ada sekurang-kurangnya satu kelas"); return; }
    setClasses((p) => p.filter((c) => c.id !== id));
    setStudentsByClass((p) => { const cp = { ...p }; delete cp[id]; return cp; });
    if (selectedClassId === id) setSelectedClassId(classes.find((c) => c.id !== id)?.id);
  };

  // Murid CRUD
  const addStudent = (name) => setStudentsByClass((p) => ({ ...p, [selectedClassId]: [...(p[selectedClassId] || []), { id: uid(), name }] }));
  const editStudent = (id, name) => setStudentsByClass((p) => ({ ...p, [selectedClassId]: (p[selectedClassId] || []).map((s) => (s.id === id ? { ...s, name } : s)) }));
  const deleteStudent = (id) => setStudentsByClass((p) => ({ ...p, [selectedClassId]: (p[selectedClassId] || []).filter((s) => s.id !== id) }));
  const moveStudent = (id, direction) => {
    setStudentsByClass((prev) => {
      const list = [...(prev[selectedClassId] || [])];
      const idx = list.findIndex((s) => s.id === id);
      if (idx < 0) return prev;
      const newIdx = direction === "up" ? idx - 1 : idx + 1;
      if (newIdx < 0 || newIdx >= list.length) return prev;
      [list[idx], list[newIdx]] = [list[newIdx], list[idx]];
      return { ...prev, [selectedClassId]: list };
    });
  };
  const bulkSaveStudents = (lines) => {
    setStudentsByClass((prev) => {
      const current = prev[selectedClassId] || [];
      const next = lines.map((name, idx) => (current[idx] ? { ...current[idx], name } : { id: uid(), name }));
      return { ...prev, [selectedClassId]: next };
    });
  };

  // Subjek CRUD
  const saveSubject = (form) => {
    if (form.id) setSubjects((p) => p.map((s) => (s.id === form.id ? { ...s, label: form.label, tag: form.tag, color: form.color } : s)));
    else {
      const id = uid();
      const newSubject = { id, label: form.label, tag: form.tag, color: form.color, tajuk: [t("Tajuk 1", "", "")] };
      setSubjects((p) => [...p, newSubject]);
      setActiveSubjectId(id);
    }
    setSubjectForm(null);
  };
  const deleteSubject = (id) => {
    if (subjects.length <= 1) { showToast("Perlu ada sekurang-kurangnya satu subjek"); return; }
    setSubjects((p) => p.filter((s) => s.id !== id));
    if (activeSubjectId === id) setActiveSubjectId(subjects.find((s) => s.id !== id)?.id);
  };

  // Tajuk CRUD (bagi subjek aktif)
  const updateTajukList = (updater) => setSubjects((p) => p.map((s) => (s.id === activeSubjectId ? { ...s, tajuk: updater(s.tajuk || []) } : s)));
  const saveTajuk = (form) => {
    if (form.id) updateTajukList((list) => list.map((x) => (x.id === form.id ? { ...x, ...form } : x)));
    else updateTajukList((list) => [...list, { id: uid(), tajuk: form.tajuk, standardKandungan: form.standardKandungan, standardPembelajaran: form.standardPembelajaran }]);
    setTajukForm(null);
  };
  const deleteTajuk = (id) => {
    if ((activeSubject.tajuk || []).length <= 1) { showToast("Perlu ada sekurang-kurangnya satu tajuk"); return; }
    updateTajukList((list) => list.filter((x) => x.id !== id));
  };

  const handlePrint = () => { setIsPrinting(true); setTimeout(() => window.print(), 80); };

  // ---- Google Sheets ----
  const googleAvailable = typeof window !== "undefined" && !!(window.google && window.google.accounts && window.google.accounts.oauth2);
  const handleGoogleSignIn = () => {
    if (!sheetsConfig.clientId.trim()) { showToast("Sila masukkan Client ID dahulu"); return; }
    if (!googleAvailable) { showToast("Log masuk Google tidak tersedia dalam pratonton ini"); return; }
    if (!tokenClientRef.current) {
      tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
        client_id: sheetsConfig.clientId.trim(),
        scope: "https://www.googleapis.com/auth/spreadsheets",
        callback: (resp) => {
          if (resp && resp.access_token) { setAccessToken(resp.access_token); showToast("Berjaya log masuk Google"); }
          else showToast("Log masuk Google gagal atau dibatalkan");
        },
      });
    }
    tokenClientRef.current.requestAccessToken();
  };
  const handleGoogleSignOut = () => {
    if (accessToken && window.google?.accounts?.oauth2?.revoke) window.google.accounts.oauth2.revoke(accessToken, () => {});
    setAccessToken(null);
    showToast("Log keluar daripada Google");
  };
  const saveToSheets = async () => {
    if (!accessToken || !sheetsConfig.spreadsheetId.trim()) return;
    setSheetsBusy(true);
    try {
      const sid = sheetsConfig.spreadsheetId.trim();
      await ensureSheetsExist(sid, accessToken, ["PBD_Config", "PBD_Rekod", "PBD_DSKP"]);
      await sheetsFetch(sid, `/values/PBD_Config!A1?valueInputOption=RAW`, accessToken, { method: "PUT", body: JSON.stringify({ values: [[buildConfigJSON(classes, subjects, studentsByClass, records, attachments)]] }) });
      await writeSheetValues(sid, accessToken, "PBD_Rekod", buildRecordRows(classes, subjects, studentsByClass, records, attachments));
      await writeSheetValues(sid, accessToken, "PBD_DSKP", buildDSKPRows(subjects));
      showToast("Berjaya disimpan ke Google Sheets");
    } catch (err) { showToast(`Gagal menyimpan: ${err.message}`); }
    finally { setSheetsBusy(false); }
  };
  const loadFromSheets = async () => {
    if (!accessToken || !sheetsConfig.spreadsheetId.trim()) return;
    setSheetsBusy(true);
    try {
      const sid = sheetsConfig.spreadsheetId.trim();
      const res = await sheetsFetch(sid, `/values/PBD_Config!A1`, accessToken, { method: "GET" });
      const raw = res.values?.[0]?.[0];
      if (!raw) { showToast("Tiada data dijumpai dalam hamparan ini"); return; }
      const parsed = JSON.parse(raw);
      if (parsed.classes) setClasses(parsed.classes);
      if (parsed.subjects) setSubjects(parsed.subjects);
      if (parsed.studentsByClass) setStudentsByClass(parsed.studentsByClass);
      if (parsed.records) setRecords(parsed.records);
      if (parsed.attachments) setAttachments(parsed.attachments);
      if (parsed.classes?.[0]?.id) setSelectedClassId(parsed.classes[0].id);
      if (parsed.subjects?.[0]?.id) setActiveSubjectId(parsed.subjects[0].id);
      showToast("Data dimuat turun daripada Google Sheets");
    } catch (err) { showToast(`Gagal memuat: ${err.message}`); }
    finally { setSheetsBusy(false); }
  };

  // Ringkasan
  let distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let assessedCount = 0;
  students.forEach((s) => { const tp = records[getKey(s.id)]?.tp; if (tp) { distribution[tp]++; assessedCount++; } });
  const total = students.length;
  const contextLabel = activeTajuk ? `Tajuk: ${activeTajuk.tajuk}` : "";

  if (isPrinting && activeSubject) {
    return <PrintReport subject={activeSubject} classObj={selectedClass} students={students} records={records} attachments={attachments} />;
  }

  if (!activeSubject) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{ background: UI.bgApp }}>
        <div className="text-center">
          <p className="text-slate-500 mb-3">Tiada subjek lagi.</p>
          <button onClick={() => setSubjectForm({})} className="text-sm font-semibold text-white rounded-xl px-4 py-2" style={{ background: "linear-gradient(135deg, #EC7FAE, #A78BFA)" }}>Tambah Subjek</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 sm:pb-8" style={{ background: UI.bgApp, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
      <div className="sticky top-0 z-20 border-b" style={{ backgroundColor: UI.navBg, borderColor: UI.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-9 w-9 rounded-2xl flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: "linear-gradient(135deg, #EC7FAE, #A78BFA)" }}>
                <IconSparkle size={16} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-slate-800 text-sm leading-none">PBD Tracker</p>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">Sistem Perekodan Pentaksiran Bilik Darjah</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button onClick={() => setSheetsOpen(true)}
                className="h-9 flex items-center gap-1.5 rounded-xl border px-2.5 shrink-0 text-xs font-semibold"
                style={accessToken ? { borderColor: "#4FB584", color: "#2F8F79", backgroundColor: "#EEFBF4" } : { borderColor: UI.border, color: "#6B675E" }}
                title="Sambungan Google Sheets"
              >
                <IconCloud size={15} />
                <span className={`h-1.5 w-1.5 rounded-full ${accessToken ? "bg-emerald-500" : "bg-slate-300"}`} />
                <span className="hidden sm:inline">Sheets</span>
              </button>
              <div className="relative">
                <select value={selectedClassId} onChange={(e) => setSelectedClassId(e.target.value)}
                  className="appearance-none text-sm font-semibold bg-white border rounded-xl pl-3 pr-8 py-2 outline-none cursor-pointer" style={{ borderColor: UI.border }}>
                  {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <IconChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
              <button onClick={() => setManageClassesOpen(true)} className="h-9 w-9 rounded-xl border flex items-center justify-center text-slate-500 shrink-0" style={{ borderColor: UI.border }} title="Urus Kelas"><IconPencil size={14} /></button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 flex-1">
              {subjects.map((s) => {
                const active = s.id === activeSubjectId;
                return (
                  <button key={s.id} onClick={() => setActiveSubjectId(s.id)}
                    className="shrink-0 flex items-center gap-2 text-sm font-semibold px-3.5 py-2 rounded-2xl border transition-colors"
                    style={active ? { backgroundColor: s.color, borderColor: s.color, color: "#fff" } : { backgroundColor: "#fff", borderColor: UI.border, color: "#6B675E" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: active ? "#fff" : s.color }} />
                    {s.label}
                  </button>
                );
              })}
            </div>
            <button onClick={() => setManageSubjectsOpen(true)} className="h-9 w-9 rounded-xl border flex items-center justify-center text-slate-500 shrink-0" style={{ borderColor: UI.border }} title="Urus Subjek"><IconSettings size={15} /></button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 space-y-5">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[220px] max-w-sm">
            <select value={activeTajukId || ""} onChange={(e) => setActiveTajukId(e.target.value)}
              className="w-full appearance-none text-sm font-semibold rounded-xl border py-2.5 pl-3.5 pr-9 outline-none bg-white" style={{ borderColor: UI.border }}>
              {(activeSubject.tajuk || []).map((tj) => <option key={tj.id} value={tj.id}>{tj.tajuk}</option>)}
            </select>
            <IconChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setManageTajukOpen(true)} className="flex items-center gap-1.5 text-xs font-semibold rounded-xl px-3 py-2 border" style={{ borderColor: UI.border, color: activeSubject.color }}>
              <IconSettings size={14} /> Urus Tajuk
            </button>
            <button onClick={() => setManageStudentsOpen(true)} className="flex items-center gap-1.5 text-xs font-semibold rounded-xl px-3 py-2 border" style={{ borderColor: UI.border, color: "#6B675E" }}>
              <IconUsers size={14} /> Urus Murid
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <IconUsers size={15} />
          Kelas <span className="font-semibold text-slate-700">{selectedClass?.name}</span>
          <span className="text-slate-300">·</span>{total} murid berdaftar
        </div>

        <SummaryBar subject={activeSubject} contextLabel={contextLabel} assessedCount={assessedCount} total={total} distribution={distribution} />

        <TajukView subject={activeSubject} students={students} records={records} updateRecord={updateRecord} getKey={getKey}
          activeTajuk={activeTajuk} onManageTajuk={() => setManageTajukOpen(true)} getAttachments={getAttachments} openAttachments={openAttachments} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t sm:static sm:bg-transparent sm:border-0 sm:mt-2" style={{ backgroundColor: UI.navBg, borderColor: UI.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-3">
          <button onClick={() => showToast("Rekod telah disimpan")} className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-2xl py-2.5 px-5" style={{ backgroundColor: activeSubject.color }}>
            <IconSave size={16} /> Simpan Rekod
          </button>
          <button onClick={handlePrint} className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm font-semibold rounded-2xl py-2.5 px-5 border" style={{ borderColor: UI.border, color: "#4B4840" }}>
            <IconPrinter size={16} /> Cetak PDF
          </button>
        </div>
      </div>

      <Toast message={toast} />

      {manageClassesOpen && (
        <ManageItemsModal title="Urus Kelas" placeholder="Nama kelas baru" minItems={1}
          items={classes.map((c) => ({ id: c.id, label: c.name }))} onAdd={addClass} onEdit={editClass} onDelete={deleteClass} onClose={() => setManageClassesOpen(false)} />
      )}
      {manageStudentsOpen && (
        <ManageItemsModal title={`Urus Murid - ${selectedClass?.name}`} placeholder="Nama murid baru"
          items={students.map((s) => ({ id: s.id, label: s.name }))} onAdd={addStudent} onEdit={editStudent} onDelete={deleteStudent}
          onMoveUp={(id) => moveStudent(id, "up")} onMoveDown={(id) => moveStudent(id, "down")}
          onBulkSave={bulkSaveStudents} bulkPlaceholder={"Cth:\nAli bin Kassim\nSiti binti Ahmad\nRavi a/l Kumar"}
          onClose={() => setManageStudentsOpen(false)} />
      )}
      {manageSubjectsOpen && (
        <ManageSubjectsModal subjects={subjects} onEdit={(s) => setSubjectForm(s)} onDelete={deleteSubject} onAddNew={() => setSubjectForm({})} onClose={() => setManageSubjectsOpen(false)} />
      )}
      {subjectForm && <SubjectFormModal initial={subjectForm.id ? subjectForm : null} onSave={saveSubject} onClose={() => setSubjectForm(null)} />}
      {manageTajukOpen && (
        <ManageTajukModal subject={activeSubject} onAddNew={() => setTajukForm({})} onEdit={(item) => setTajukForm(item)} onDelete={deleteTajuk} onClose={() => setManageTajukOpen(false)} />
      )}
      {tajukForm && <TajukFormModal initial={tajukForm.id ? tajukForm : null} onSave={saveTajuk} onClose={() => setTajukForm(null)} />}
      {attachmentsFor && (
        <AttachmentsModal studentName={attachmentsFor.studentName} items={getAttachments(attachmentsFor.studentId)}
          onAdd={(url, source) => addAttachment(attachmentsFor.studentId, { id: uid(), url, source })}
          onReplace={(attId, url, source) => editAttachment(attachmentsFor.studentId, attId, { url, source })}
          onDelete={(attId) => deleteAttachment(attachmentsFor.studentId, attId)}
          onClose={() => setAttachmentsFor(null)} />
      )}
      {sheetsOpen && (
        <SheetsModal config={sheetsConfig} setConfig={setSheetsConfig} accessToken={accessToken} busy={sheetsBusy} available={googleAvailable}
          onSignIn={handleGoogleSignIn} onSignOut={handleGoogleSignOut} onSave={saveToSheets} onLoad={loadFromSheets} onClose={() => setSheetsOpen(false)} />
      )}
    </div>
  );
}
