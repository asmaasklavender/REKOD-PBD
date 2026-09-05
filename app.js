const { useState, useEffect, useRef } = React;

/* ===========================================================
   IKON RINGKAS (SVG dalaman - tiada pergantungan luar)
=========================================================== */
function Icon({ children, size = 16, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
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
const IconMic = (p) => <Icon {...p}><rect x="9" y="2" width="6" height="11" rx="3" /><path d="M5 10v1a7 7 0 0 0 14 0v-1" /><line x1="12" y1="18" x2="12" y2="22" /></Icon>;
const IconStop = (p) => <Icon {...p}><rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" /></Icon>;
const IconSave = (p) => <Icon {...p}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></Icon>;
const IconPrinter = (p) => <Icon {...p}><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></Icon>;
const IconPaperclip = (p) => <Icon {...p}><path d="M21 12.5l-9 9a5 5 0 1 1-7-7l9-9a3.5 3.5 0 1 1 5 5l-9 9a2 2 0 1 1-3-3l8-8" /></Icon>;
const IconUsers = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>;
const IconSettings = (p) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" /></Icon>;
const IconStickyNote = (p) => <Icon {...p}><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5Z" /><path d="M15 3v6h6" /></Icon>;
const IconCheckSquare = (p) => <Icon {...p}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></Icon>;
const IconSquare = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2" /></Icon>;
const IconCloud = (p) => <Icon {...p}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 1 8.9" /></Icon>;
const IconUpload = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></Icon>;
const IconDownload = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Icon>;
const IconLogOut = (p) => <Icon {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></Icon>;
const IconBookOpen = (p) => <Icon {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" /></Icon>;

/* ===========================================================
   UTILITI
=========================================================== */
const uid = () => Math.random().toString(36).slice(2, 10);
const recKey = (...parts) => parts.filter((p) => p !== undefined && p !== null).join("::");
const todayStr = () =>
  new Date().toLocaleDateString("ms-MY", { day: "numeric", month: "long", year: "numeric" });

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

const TP_COLORS = { 1: "#C4544B", 2: "#D08245", 3: "#CBA23C", 4: "#96A94C", 5: "#5B9470", 6: "#3A6E5A" };
const TP_LIST = [1, 2, 3, 4, 5, 6];
const COLOR_PALETTE = ["#7C6FCB", "#C97B2E", "#3E6FA6", "#6B7F4F", "#B5548C", "#4E9A9A", "#A0785A", "#7C8CA6"];

const MODE_META = {
  gallery: { label: "Galeri Foto & TP", desc: "Kad murid + gambar hasil kerja + tahap penguasaan. Sesuai untuk PSV, PJPK, dll." },
  audio: { label: "Audio & Senarai Semak", desc: "Rakaman audio/persembahan + senarai semak kemahiran. Sesuai untuk Muzik, lisan bahasa, dll." },
  matrix: { label: "Matrix Kemahiran", desc: "Jadual induk pantas merentasi beberapa tab kemahiran. Sesuai untuk Bahasa, Matematik, dll." },
  unit: { label: "Unit DSKP & Pukal", desc: "Pilih unit/tajuk + nilai beberapa murid serentak (bulk). Sesuai untuk Sejarah, Sains, dll." },
};

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
  DEFAULT_CLASSES.forEach((c) => {
    out[c.id] = STUDENT_NAMES.map((name) => ({ id: uid(), name }));
  });
  return out;
}

const DEFAULT_SUBJECTS = [
  {
    id: "psv", label: "Pendidikan Seni Visual", tag: "PSV", color: "#7C6FCB", mode: "gallery",
    dskp: [{ id: uid(), topik: "Menggambar", standardKandungan: "Murid dapat meneroka pelbagai bahan, alat dan teknik asas dalam menggambar.", standardPembelajaran: "Murid dapat menghasilkan gambar menggunakan teknik lukisan dan catan secara kreatif." }],
  },
  {
    id: "muzik", label: "Pendidikan Muzik", tag: "Muzik", color: "#C97B2E", mode: "audio",
    checklist: [{ id: "pitching", label: "Pic (Pitching)" }, { id: "tempo", label: "Tempo" }, { id: "sebutan", label: "Sebutan" }],
    dskp: [{ id: uid(), topik: "Nyanyian", standardKandungan: "Murid dapat mempamerkan kemahiran menyanyi lagu secara solo atau kumpulan.", standardPembelajaran: "Murid dapat menyanyi lagu dengan pic dan tempo yang betul." }],
  },
  {
    id: "bm", label: "Bahasa Melayu", tag: "BM", color: "#3E6FA6", mode: "matrix",
    skills: [
      { id: "mendengar", label: "Mendengar & Tutur" }, { id: "membaca", label: "Membaca" },
      { id: "menulis", label: "Menulis" }, { id: "seniBahasa", label: "Seni Bahasa" },
    ],
    dskp: [{ id: uid(), topik: "Unit 1 - Keluarga Bahagia", standardKandungan: "1.1 Berbual tentang sesuatu perkara menggunakan kata, ayat dan sebutan yang betul.", standardPembelajaran: "1.1.1 Berbual tentang sesuatu perkara dalam pelbagai situasi dengan menggunakan ayat yang mengandungi frasa yang betul." }],
  },
  {
    id: "sejarah", label: "Sejarah", tag: "Sejarah", color: "#6B7F4F", mode: "unit",
    units: [
      { id: "u1", label: "Unit 1 - Zaman Prasejarah di Malaysia" },
      { id: "u2", label: "Unit 2 - Kerajaan Awal di Malaysia" },
      { id: "u3", label: "Unit 3 - Kerajaan Melayu Melaka" },
      { id: "u4", label: "Unit 4 - Kesultanan Melayu Selepas Melaka" },
      { id: "u5", label: "Unit 5 - Kedatangan Kuasa Barat" },
    ],
    dskp: [{ id: uid(), topik: "Unit 3 - Kerajaan Melayu Melaka", standardKandungan: "3.1 Memahami kewujudan dan perkembangan Kesultanan Melayu Melaka.", standardPembelajaran: "3.1.1 Menyatakan sebab pembukaan Melaka oleh Parameswara." }],
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
  const missing = titles.filter((t) => !existing.includes(t));
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
  return JSON.stringify({ version: 1, savedAt: new Date().toISOString(), classes, subjects, studentsByClass, records, attachments: durableAttachments });
}

function buildRecordRows(classes, subjects, studentsByClass, records) {
  const header = ["Kelas", "Subjek", "Murid", "Konteks (Kemahiran/Unit)", "TP", "Nota", "Rakaman Audio", "Kriteria Dipenuhi"];
  const rows = [header];
  classes.forEach((cls) => {
    (studentsByClass[cls.id] || []).forEach((student) => {
      subjects.forEach((subject) => {
        if (subject.mode === "matrix") {
          (subject.skills || []).forEach((skill) => {
            const tp = records[recKey(subject.id, cls.id, student.id)]?.[skill.id];
            if (tp) rows.push([cls.name, subject.label, student.name, skill.label, `TP${tp}`, "", "", ""]);
          });
        } else if (subject.mode === "unit") {
          (subject.units || []).forEach((unit) => {
            const tp = records[recKey(subject.id, cls.id, unit.id, student.id)];
            if (tp) rows.push([cls.name, subject.label, student.name, unit.label, `TP${tp}`, "", "", ""]);
          });
        } else {
          const e = records[recKey(subject.id, cls.id, student.id)];
          if (e && (e.tp || e.note || e.recorded)) {
            const kriteria = subject.mode === "audio" ? (subject.checklist || []).filter((c) => e.checklist?.[c.id]).map((c) => c.label).join(", ") : "";
            rows.push([cls.name, subject.label, student.name, "-", e.tp ? `TP${e.tp}` : "-", e.note || "", e.recorded ? "Ya" : "", kriteria]);
          }
        }
      });
    });
  });
  return rows;
}

function buildDSKPRows(subjects) {
  const header = ["Subjek", "Topik", "Standard Kandungan", "Standard Pembelajaran"];
  const rows = [header];
  subjects.forEach((s) => (s.dskp || []).forEach((d) => rows.push([s.label, d.topik, d.standardKandungan, d.standardPembelajaran])));
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
          <button
            key={tp} type="button" onClick={() => onChange(tp)}
            className={`${dim} rounded-md font-semibold border transition-all shrink-0`}
            style={active
              ? { backgroundColor: TP_COLORS[tp], borderColor: TP_COLORS[tp], color: "#fff", transform: "scale(1.08)", boxShadow: "0 2px 6px rgba(0,0,0,0.18)" }
              : { backgroundColor: "#fff", borderColor: "#DCD8CF", color: "#6B675E" }}
          >{tp}</button>
        );
      })}
    </div>
  );
}

function TPPill({ value }) {
  if (!value) return <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-400 border border-slate-200">Belum dinilai</span>;
  return <span className="text-xs font-semibold px-2 py-1 rounded-full text-white" style={{ backgroundColor: TP_COLORS[value] }}>TP{value}</span>;
}

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-[60] bg-slate-900 text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2">
      <IconCheck size={16} />{message}
    </div>
  );
}

function ModalShell({ title, onClose, children, wide, footer }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white w-full ${wide ? "sm:max-w-2xl" : "sm:max-w-md"} sm:rounded-2xl rounded-t-2xl max-h-[88vh] flex flex-col`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E7E2D8] shrink-0">
          <h3 className="font-bold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><IconX size={18} /></button>
        </div>
        <div className="p-5 overflow-y-auto">{children}</div>
        {footer && <div className="px-5 py-3 border-t border-[#E7E2D8] shrink-0">{footer}</div>}
      </div>
    </div>
  );
}

/* Generic add/edit/delete list modal - digunakan untuk Kelas, Murid, Kemahiran, Unit, Kriteria */
function ManageItemsModal({ title, items, onAdd, onEdit, onDelete, onClose, placeholder, minItems = 0 }) {
  const [newLabel, setNewLabel] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editLabel, setEditLabel] = useState("");

  return (
    <ModalShell title={title} onClose={onClose}>
      <div className="space-y-2 mb-4">
        {items.length === 0 && <p className="text-sm text-slate-400">Tiada item lagi.</p>}
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2 border border-[#E7E2D8] rounded-lg px-3 py-2">
            {editingId === item.id ? (
              <input autoFocus value={editLabel} onChange={(e) => setEditLabel(e.target.value)}
                className="flex-1 text-sm outline-none border-b border-slate-300 py-0.5" />
            ) : (
              <span className="flex-1 text-sm text-slate-700">{item.label}</span>
            )}
            {editingId === item.id ? (
              <>
                <button onClick={() => { if (editLabel.trim()) { onEdit(item.id, editLabel.trim()); } setEditingId(null); }} className="text-emerald-600"><IconCheck size={16} /></button>
                <button onClick={() => setEditingId(null)} className="text-slate-400"><IconX size={16} /></button>
              </>
            ) : (
              <>
                <button onClick={() => { setEditingId(item.id); setEditLabel(item.label); }} className="text-slate-400 hover:text-slate-600"><IconPencil size={15} /></button>
                <button
                  onClick={() => { if (items.length <= minItems) return; onDelete(item.id); }}
                  className={`text-slate-400 hover:text-red-500 ${items.length <= minItems ? "opacity-30 cursor-not-allowed" : ""}`}
                ><IconTrash size={15} /></button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={newLabel} onChange={(e) => setNewLabel(e.target.value)}
          placeholder={placeholder}
          onKeyDown={(e) => { if (e.key === "Enter" && newLabel.trim()) { onAdd(newLabel.trim()); setNewLabel(""); } }}
          className="flex-1 text-sm rounded-lg border border-[#DCD8CF] px-3 py-2 outline-none"
        />
        <button
          onClick={() => { if (newLabel.trim()) { onAdd(newLabel.trim()); setNewLabel(""); } }}
          className="flex items-center gap-1 text-sm font-semibold text-white rounded-lg px-3.5 py-2 bg-slate-800"
        ><IconPlus size={15} /> Tambah</button>
      </div>
    </ModalShell>
  );
}

/* Modal tambah / edit subjek */
function SubjectFormModal({ initial, onSave, onClose }) {
  const isEdit = !!initial?.id;
  const [label, setLabel] = useState(initial?.label || "");
  const [tag, setTag] = useState(initial?.tag || "");
  const [color, setColor] = useState(initial?.color || COLOR_PALETTE[0]);
  const [mode, setMode] = useState(initial?.mode || "gallery");

  return (
    <ModalShell title={isEdit ? "Kemaskini Subjek" : "Tambah Subjek Baru"} onClose={onClose} wide>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500">Nama Subjek</label>
          <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Cth: Pendidikan Jasmani"
            className="mt-1 w-full text-sm rounded-lg border border-[#DCD8CF] px-3 py-2 outline-none" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Kod Ringkas (tag)</label>
          <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Cth: PJ"
            className="mt-1 w-full text-sm rounded-lg border border-[#DCD8CF] px-3 py-2 outline-none" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Warna</label>
          <div className="flex gap-2 mt-1.5 flex-wrap">
            {COLOR_PALETTE.map((c) => (
              <button key={c} onClick={() => setColor(c)} className="h-8 w-8 rounded-full border-2"
                style={{ backgroundColor: c, borderColor: color === c ? "#1E1E1E" : "transparent" }} />
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Jenis Modul Pentaksiran</label>
          {isEdit ? (
            <p className="mt-1.5 text-sm font-semibold" style={{ color }}>{MODE_META[mode].label} <span className="text-xs text-slate-400 font-normal">(tidak boleh ditukar selepas dicipta)</span></p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5">
              {Object.entries(MODE_META).map(([key, meta]) => (
                <button key={key} onClick={() => setMode(key)}
                  className="text-left rounded-xl border p-3"
                  style={mode === key ? { borderColor: color, backgroundColor: lighten(color, 0.9) } : { borderColor: "#E7E2D8" }}
                >
                  <p className="text-sm font-semibold text-slate-800">{meta.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{meta.desc}</p>
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          disabled={!label.trim()}
          onClick={() => onSave({ id: initial?.id, label: label.trim(), tag: tag.trim() || label.trim().slice(0, 5), color, mode })}
          className="w-full text-sm font-semibold text-white rounded-lg py-2.5 disabled:opacity-40"
          style={{ backgroundColor: color }}
        >{isEdit ? "Simpan Perubahan" : "Cipta Subjek"}</button>
      </div>
    </ModalShell>
  );
}

/* Modal urus semua subjek (senarai + edit/padam + butang tambah) */
function ManageSubjectsModal({ subjects, onEdit, onDelete, onAddNew, onClose }) {
  return (
    <ModalShell title="Urus Subjek" onClose={onClose} wide>
      <div className="space-y-2 mb-4">
        {subjects.map((s) => (
          <div key={s.id} className="flex items-center gap-3 border border-[#E7E2D8] rounded-lg px-3 py-2.5">
            <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">{s.label}</p>
              <p className="text-xs text-slate-400">{MODE_META[s.mode].label}</p>
            </div>
            <button onClick={() => onEdit(s)} className="text-slate-400 hover:text-slate-600"><IconPencil size={15} /></button>
            <button
              onClick={() => { if (subjects.length > 1) onDelete(s.id); }}
              className={`text-slate-400 hover:text-red-500 ${subjects.length <= 1 ? "opacity-30 cursor-not-allowed" : ""}`}
            ><IconTrash size={15} /></button>
          </div>
        ))}
      </div>
      <button onClick={onAddNew} className="w-full flex items-center justify-center gap-2 text-sm font-semibold rounded-lg py-2.5 border border-dashed border-slate-300 text-slate-600">
        <IconPlus size={15} /> Tambah Subjek Baru
      </button>
    </ModalShell>
  );
}

/* Modal tambah / edit item DSKP (Topik, Standard Kandungan, Standard Pembelajaran) */
function DSKPFormModal({ initial, onSave, onClose }) {
  const [topik, setTopik] = useState(initial?.topik || "");
  const [sk, setSk] = useState(initial?.standardKandungan || "");
  const [sp, setSp] = useState(initial?.standardPembelajaran || "");
  return (
    <ModalShell title={initial?.id ? "Kemaskini Item DSKP" : "Tambah Item DSKP"} onClose={onClose} wide>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500">Topik</label>
          <input value={topik} onChange={(e) => setTopik(e.target.value)} placeholder="Cth: Unit 1 - Keluarga Bahagia"
            className="mt-1 w-full text-sm rounded-lg border border-[#DCD8CF] px-3 py-2 outline-none" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Standard Kandungan</label>
          <textarea value={sk} onChange={(e) => setSk(e.target.value)} rows={3} placeholder="Cth: 1.1 Berbual tentang sesuatu perkara..."
            className="mt-1 w-full text-sm rounded-lg border border-[#DCD8CF] px-3 py-2 outline-none resize-none" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">Standard Pembelajaran</label>
          <textarea value={sp} onChange={(e) => setSp(e.target.value)} rows={3} placeholder="Cth: 1.1.1 Berbual dalam pelbagai situasi..."
            className="mt-1 w-full text-sm rounded-lg border border-[#DCD8CF] px-3 py-2 outline-none resize-none" />
        </div>
        <button
          disabled={!topik.trim()}
          onClick={() => onSave({ id: initial?.id, topik: topik.trim(), standardKandungan: sk.trim(), standardPembelajaran: sp.trim() })}
          className="w-full text-sm font-semibold text-white rounded-lg py-2.5 bg-slate-800 disabled:opacity-40"
        >{initial?.id ? "Simpan Perubahan" : "Tambah Item"}</button>
      </div>
    </ModalShell>
  );
}

/* Panel rujukan DSKP (Topik / Standard Kandungan / Standard Pembelajaran) bagi subjek aktif */
function DSKPPanel({ subject, onAdd, onEdit, onDelete }) {
  const items = subject.dskp || [];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-800">Rujukan DSKP - {subject.label}</p>
        <button onClick={onAdd} className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 text-white" style={{ backgroundColor: subject.color }}>
          <IconPlus size={14} /> Tambah Item
        </button>
      </div>
      {items.length === 0 && (
        <div className="rounded-2xl border border-dashed border-[#DCD8CF] bg-white p-10 text-center text-sm text-slate-400">
          Tiada item DSKP lagi untuk subjek ini.
        </div>
      )}
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-[#E7E2D8] bg-white p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-slate-800 text-sm">{item.topik}</p>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => onEdit(item)} className="text-slate-400 hover:text-slate-600"><IconPencil size={15} /></button>
                <button onClick={() => onDelete(item.id)} className="text-slate-400 hover:text-red-500"><IconTrash size={15} /></button>
              </div>
            </div>
            {item.standardKandungan && (
              <div className="mt-2">
                <p className="text-xs font-medium" style={{ color: subject.color }}>Standard Kandungan</p>
                <p className="text-sm text-slate-600 mt-0.5">{item.standardKandungan}</p>
              </div>
            )}
            {item.standardPembelajaran && (
              <div className="mt-2">
                <p className="text-xs font-medium" style={{ color: subject.color }}>Standard Pembelajaran</p>
                <p className="text-sm text-slate-600 mt-0.5">{item.standardPembelajaran}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Modal sambungan Google Sheets - simpanan kekal rekod PBD */
function SheetsModal({ config, setConfig, accessToken, busy, onSignIn, onSignOut, onSave, onLoad, onClose, available }) {
  return (
    <ModalShell title="Sambungan Google Sheets" onClose={onClose} wide>
      <div className="space-y-4">
        {!available && (
          <div className="text-xs rounded-lg p-3 bg-amber-50 border border-amber-200 text-amber-700">
            Log masuk Google tidak tersedia dalam pratonton ini. Ciri ini akan berfungsi sepenuhnya selepas apl
            digunakan pada versi GitHub Pages / PWA yang telah dilengkapi pautan Google Sign-In (lihat README).
          </div>
        )}
        <div>
          <label className="text-xs font-medium text-slate-500">Google OAuth Client ID</label>
          <input value={config.clientId} onChange={(e) => setConfig((c) => ({ ...c, clientId: e.target.value }))}
            placeholder="xxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com"
            className="mt-1 w-full text-sm rounded-lg border border-[#DCD8CF] px-3 py-2 outline-none" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500">ID Hamparan Google Sheets (Spreadsheet ID)</label>
          <input value={config.spreadsheetId} onChange={(e) => setConfig((c) => ({ ...c, spreadsheetId: e.target.value }))}
            placeholder="Salin daripada URL hamparan anda"
            className="mt-1 w-full text-sm rounded-lg border border-[#DCD8CF] px-3 py-2 outline-none" />
          <p className="text-[11px] text-slate-400 mt-1">Cth URL: docs.google.com/spreadsheets/d/<b>ID-INI</b>/edit</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className={`h-2.5 w-2.5 rounded-full ${accessToken ? "bg-emerald-500" : "bg-slate-300"}`} />
          {accessToken ? "Disambungkan dengan Google" : "Belum log masuk"}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {!accessToken ? (
            <button onClick={onSignIn} disabled={!config.clientId.trim()} className="col-span-2 flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-lg py-2.5 bg-slate-800 disabled:opacity-40">
              Log Masuk dengan Google
            </button>
          ) : (
            <>
              <button onClick={onSave} disabled={busy || !config.spreadsheetId.trim()} className="flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-lg py-2.5 bg-emerald-600 disabled:opacity-40">
                <IconUpload size={15} /> {busy ? "Menyimpan..." : "Muat Naik ke Sheets"}
              </button>
              <button onClick={onLoad} disabled={busy || !config.spreadsheetId.trim()} className="flex items-center justify-center gap-2 text-sm font-semibold rounded-lg py-2.5 border border-[#DCD8CF] text-slate-700 disabled:opacity-40">
                <IconDownload size={15} /> {busy ? "Memuat..." : "Muat Turun dari Sheets"}
              </button>
              <button onClick={onSignOut} className="col-span-2 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 py-1">
                <IconLogOut size={13} /> Log Keluar Google
              </button>
            </>
          )}
        </div>

        <div className="text-xs text-slate-400 space-y-1 border-t border-[#E7E2D8] pt-3">
          <p>1. Cipta hamparan Google Sheets kosong dan salin ID-nya daripada URL.</p>
          <p>2. Cipta OAuth Client ID (jenis Web) di Google Cloud Console dan tambah alamat apl anda pada "Authorized JavaScript origins".</p>
          <p>3. "Muat Naik" menulis semula tab <b>PBD_Config</b>, <b>PBD_Rekod</b> dan <b>PBD_DSKP</b> dalam hamparan tersebut.</p>
          <p>4. Gambar dari kamera/galeri peranti tidak disimpan ke Sheets (hanya lampiran pautan Google Drive kekal).</p>
        </div>
      </div>
    </ModalShell>
  );
}

/* Modal pilih sumber muat naik: kamera / galeri / google drive */
function UploadSourceModal({ onPick, onClose }) {
  const [driveUrl, setDriveUrl] = useState("");
  const handleFile = (file) => {
    if (!file) return;
    onPick(URL.createObjectURL(file), "peranti");
  };
  return (
    <ModalShell title="Tambah Lampiran" onClose={onClose}>
      <div className="space-y-2.5">
        <label className="flex items-center justify-center gap-2 text-sm font-semibold rounded-lg py-2.5 border border-[#DCD8CF] cursor-pointer text-slate-700">
          <IconCamera size={16} /> Ambil Gambar (Kamera)
          <input type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
        </label>
        <label className="flex items-center justify-center gap-2 text-sm font-semibold rounded-lg py-2.5 border border-[#DCD8CF] cursor-pointer text-slate-700">
          <IconImage size={16} /> Pilih dari Galeri Telefon
          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
        </label>
        <div className="flex items-center gap-2 text-xs text-slate-400 py-1"><div className="flex-1 h-px bg-slate-200" />atau<div className="flex-1 h-px bg-slate-200" /></div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 border border-[#DCD8CF] rounded-lg px-3 py-2">
            <IconLink size={15} className="text-slate-400 shrink-0" />
            <input value={driveUrl} onChange={(e) => setDriveUrl(e.target.value)} placeholder="Tampal pautan Google Drive..." className="flex-1 text-sm outline-none min-w-0" />
          </div>
          <button
            disabled={!driveUrl.trim()}
            onClick={() => onPick(driveLinkToDirect(driveUrl.trim()), "google-drive")}
            className="w-full text-sm font-semibold text-white rounded-lg py-2 bg-slate-800 disabled:opacity-40"
          >Guna Pautan Google Drive</button>
          <p className="text-[11px] text-slate-400">Pastikan fail dikongsi sebagai "Sesiapa yang mempunyai pautan boleh melihat".</p>
        </div>
      </div>
    </ModalShell>
  );
}

/* Modal lampiran (senarai imej + tambah/ganti/padam) untuk seorang murid */
function AttachmentsModal({ studentName, items, onAdd, onReplace, onDelete, onClose }) {
  const [uploadMode, setUploadMode] = useState(null); // null | 'add' | {replaceId}

  return (
    <>
      <ModalShell title={`Lampiran - ${studentName}`} onClose={onClose} wide>
        {items.length === 0 && <p className="text-sm text-slate-400 mb-4">Belum ada lampiran.</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {items.map((att) => (
            <div key={att.id} className="relative rounded-xl overflow-hidden border border-[#E7E2D8] aspect-square bg-slate-50 group">
              <img src={att.url} alt="Lampiran" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end justify-end gap-1.5 p-1.5 opacity-100">
                <button onClick={() => setUploadMode({ replaceId: att.id })} className="h-7 w-7 rounded-full bg-white/90 flex items-center justify-center text-slate-700"><IconPencil size={13} /></button>
                <button onClick={() => onDelete(att.id)} className="h-7 w-7 rounded-full bg-white/90 flex items-center justify-center text-red-500"><IconTrash size={13} /></button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setUploadMode("add")} className="w-full flex items-center justify-center gap-2 text-sm font-semibold rounded-lg py-2.5 border border-dashed border-slate-300 text-slate-600">
          <IconPlus size={15} /> Tambah Lampiran
        </button>
      </ModalShell>
      {uploadMode && (
        <UploadSourceModal
          onClose={() => setUploadMode(null)}
          onPick={(url, source) => {
            if (uploadMode === "add") onAdd(url, source);
            else onReplace(uploadMode.replaceId, url, source);
            setUploadMode(null);
          }}
        />
      )}
    </>
  );
}

/* ===========================================================
   RINGKASAN
=========================================================== */
function SummaryBar({ subject, contextLabel, assessedCount, total, distribution }) {
  const pct = total === 0 ? 0 : Math.round((assessedCount / total) * 100);
  return (
    <div className="rounded-2xl border border-[#E7E2D8] bg-white p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-4 shrink-0">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#EEEAE1" strokeWidth="4" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke={subject.color} strokeWidth="4"
                strokeDasharray={`${(pct / 100) * 97.4} 97.4`} strokeLinecap="round" />
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
          <div className="flex h-3 w-full rounded-full overflow-hidden bg-slate-100">
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

/* ===========================================================
   PAPARAN: GALERI (cth. PSV)
=========================================================== */
function GalleryView({ subject, students, records, updateRecord, getKey, getAttachments, openAttachments }) {
  if (students.length === 0) return <EmptyStudents />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {students.map((student) => {
        const key = getKey(student.id);
        const entry = records[key] || {};
        const atts = getAttachments(student.id);
        const cover = atts[0]?.url;
        return (
          <div key={student.id} className="rounded-2xl border border-[#E7E2D8] bg-white overflow-hidden flex flex-col">
            <div className="h-1.5 w-full" style={{ backgroundColor: subject.color }} />
            <div className="p-4 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-slate-800 text-sm leading-tight">{student.name}</p>
                <TPPill value={entry.tp} />
              </div>
              <div className="relative aspect-[4/3] rounded-xl bg-[#F5F3EE] border border-dashed border-[#DCD8CF] overflow-hidden flex items-center justify-center">
                {cover ? <img src={cover} alt={`Hasil kerja ${student.name}`} className="h-full w-full object-cover" /> : (
                  <div className="flex flex-col items-center text-slate-400 text-xs gap-1.5 px-4 text-center">
                    <IconCamera size={22} />Belum ada gambar hasil kerja
                  </div>
                )}
              </div>
              <button onClick={() => openAttachments(student.id, student.name)}
                className="flex items-center justify-center gap-2 text-xs font-semibold rounded-lg py-2 border transition-colors"
                style={{ borderColor: subject.color, color: subject.color }}
              ><IconPaperclip size={14} /> Lampiran ({atts.length})</button>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1.5">Tahap Penguasaan</p>
                <TPSelector value={entry.tp} onChange={(tp) => updateRecord(key, { tp })} size="sm" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-1"><IconStickyNote size={12} /> Nota ringkas</p>
                <textarea value={entry.note || ""} onChange={(e) => updateRecord(key, { note: e.target.value })}
                  placeholder="Cth: Komposisi warna kreatif, teknik lukisan perlu ditambah baik..." rows={2}
                  className="w-full text-xs rounded-lg border border-[#DCD8CF] p-2 resize-none focus:outline-none" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===========================================================
   PAPARAN: AUDIO & SENARAI SEMAK (cth. Muzik)
=========================================================== */
function AudioView({ subject, students, records, updateRecord, getKey, getAttachments, openAttachments, onManageChecklist }) {
  const [activeRecording, setActiveRecording] = useState(null);
  const intervalRef = useRef(null);
  const checklist = subject.checklist || [];

  useEffect(() => {
    if (activeRecording) {
      intervalRef.current = setInterval(() => setActiveRecording((p) => (p ? { ...p, seconds: p.seconds + 1 } : p)), 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [activeRecording?.id]);

  const toggleChecklist = (id, skillId) => {
    const key = getKey(id);
    const current = records[key]?.checklist || {};
    updateRecord(key, { checklist: { ...current, [skillId]: !current[skillId] } });
  };
  const startRecording = (id) => setActiveRecording({ id, seconds: 0 });
  const stopRecording = (id) => { updateRecord(getKey(id), { recorded: true, duration: activeRecording?.seconds || 0 }); setActiveRecording(null); };
  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  if (students.length === 0) return <EmptyStudents />;

  return (
    <div className="space-y-3">
      <button onClick={onManageChecklist} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: subject.color }}>
        <IconSettings size={14} /> Urus Kriteria Senarai Semak
      </button>
      {students.map((student, idx) => {
        const key = getKey(student.id);
        const entry = records[key] || {};
        const atts = getAttachments(student.id);
        const isRecordingThis = activeRecording?.id === student.id;
        const someoneElseRecording = activeRecording && !isRecordingThis;
        return (
          <div key={student.id} className="rounded-2xl border border-[#E7E2D8] bg-white p-4">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: subject.color }}>{idx + 1}</span>
                <p className="font-semibold text-slate-800 text-sm">{student.name}</p>
              </div>
              <TPPill value={entry.tp} />
            </div>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
              <button type="button" disabled={someoneElseRecording}
                onClick={() => (isRecordingThis ? stopRecording(student.id) : startRecording(student.id))}
                className={`flex items-center justify-center gap-2 text-xs font-semibold rounded-lg py-2 px-3.5 border transition-colors ${someoneElseRecording ? "opacity-40 cursor-not-allowed" : ""}`}
                style={isRecordingThis ? { backgroundColor: "#C4544B", borderColor: "#C4544B", color: "#fff" } : { borderColor: subject.color, color: subject.color }}
              >
                {isRecordingThis ? <><IconStop size={13} /> Berhenti · {fmt(activeRecording.seconds)}</> : <><IconMic size={15} />{entry.recorded ? "Rakam Semula" : "Rakam Audio"}</>}
              </button>
              {entry.recorded && !isRecordingThis && (
                <span className="text-xs text-slate-500 flex items-center gap-1"><IconCheck size={13} className="text-emerald-600" />Rakaman disimpan ({fmt(entry.duration || 0)})</span>
              )}
              <button onClick={() => openAttachments(student.id, student.name)}
                className="flex items-center gap-1.5 text-xs font-semibold rounded-lg py-2 px-3 border" style={{ borderColor: subject.color, color: subject.color }}
              ><IconPaperclip size={14} /> Lampiran ({atts.length})</button>
              <div className="flex flex-wrap gap-2">
                {checklist.map((skill) => {
                  const checked = entry.checklist?.[skill.id];
                  return (
                    <button key={skill.id} type="button" onClick={() => toggleChecklist(student.id, skill.id)}
                      className="flex items-center gap-1.5 text-xs font-medium rounded-full px-2.5 py-1.5 border transition-colors"
                      style={checked ? { backgroundColor: lighten(subject.color, 0.88), borderColor: subject.color, color: subject.color } : { borderColor: "#DCD8CF", color: "#8A867B" }}
                    >{checked ? <IconCheckSquare size={13} /> : <IconSquare size={13} />}{skill.label}</button>
                  );
                })}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xs font-medium text-slate-500 mb-1.5">Tahap Penguasaan</p>
              <TPSelector value={entry.tp} onChange={(tp) => updateRecord(key, { tp })} size="sm" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===========================================================
   PAPARAN: MATRIX KEMAHIRAN (cth. Bahasa Melayu)
=========================================================== */
function MatrixView({ subject, students, records, setCellTP, getKey, activeSkillId, setActiveSkillId, onManageSkills, getAttachments, openAttachments }) {
  const skills = subject.skills || [];
  if (students.length === 0) return <EmptyStudents />;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {skills.map((skill) => {
            const active = activeSkillId === skill.id;
            return (
              <button key={skill.id} onClick={() => setActiveSkillId(skill.id)}
                className="shrink-0 text-sm font-semibold px-4 py-2 rounded-full border transition-colors"
                style={active ? { backgroundColor: subject.color, borderColor: subject.color, color: "#fff" } : { borderColor: "#DCD8CF", color: "#6B675E", backgroundColor: "#fff" }}
              >{skill.label}</button>
            );
          })}
        </div>
        <button onClick={onManageSkills} className="flex items-center gap-1.5 text-xs font-semibold shrink-0" style={{ color: subject.color }}>
          <IconSettings size={14} /> Urus Kemahiran
        </button>
      </div>
      <div className="rounded-2xl border border-[#E7E2D8] bg-white overflow-hidden">
        <div className="px-4 py-3 border-b border-[#E7E2D8] flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-800">Jadual Induk Pentaksiran</p>
          <p className="text-xs text-slate-500 hidden sm:block">Klik sel untuk tukar TP dengan pantas</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="text-left text-xs text-slate-500 border-b border-[#E7E2D8]">
                <th className="py-2.5 px-4 font-medium sticky left-0 bg-white">Nama Murid</th>
                {skills.map((skill) => (
                  <th key={skill.id} className="py-2.5 px-3 font-medium text-center" style={activeSkillId === skill.id ? { backgroundColor: lighten(subject.color, 0.9), color: subject.color } : {}}>{skill.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => {
                const key = getKey(student.id);
                const atts = getAttachments(student.id);
                return (
                  <tr key={student.id} className={idx % 2 === 0 ? "bg-white" : "bg-[#FBFAF7]"}>
                    <td className="py-2 px-4 font-medium text-slate-700 whitespace-nowrap sticky left-0" style={{ backgroundColor: "inherit" }}>
                      <div className="flex items-center gap-2">
                        <button onClick={() => openAttachments(student.id, student.name)} className="text-slate-400 hover:text-slate-600 relative shrink-0" title="Lampiran">
                          <IconPaperclip size={14} />
                          {atts.length > 0 && <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-slate-700 text-white text-[9px] flex items-center justify-center">{atts.length}</span>}
                        </button>
                        {student.name}
                      </div>
                    </td>
                    {skills.map((skill) => {
                      const value = records[key]?.[skill.id] || "";
                      const isActiveCol = activeSkillId === skill.id;
                      return (
                        <td key={skill.id} className="py-2 px-3 text-center" style={isActiveCol ? { backgroundColor: lighten(subject.color, 0.94) } : {}}>
                          <select value={value}
                            onChange={(e) => setCellTP(student.id, skill.id, e.target.value ? Number(e.target.value) : "")}
                            className="text-xs font-semibold rounded-md border px-2 py-1.5 outline-none cursor-pointer"
                            style={value ? { backgroundColor: TP_COLORS[value], borderColor: TP_COLORS[value], color: "#fff" } : { backgroundColor: "#fff", borderColor: "#DCD8CF", color: "#8A867B" }}
                          >
                            <option value="">-</option>
                            {TP_LIST.map((tp) => <option key={tp} value={tp} style={{ color: "#000" }}>TP{tp}</option>)}
                          </select>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ===========================================================
   PAPARAN: UNIT DSKP & PUKAL (cth. Sejarah)
=========================================================== */
function UnitView({ subject, students, records, setUnitTP, getUnitKey, activeUnitId, setActiveUnitId, onManageUnits, getAttachments, openAttachments }) {
  const [selected, setSelected] = useState([]);
  const units = subject.units || [];

  useEffect(() => { setSelected([]); }, [activeUnitId]);

  if (students.length === 0) return <EmptyStudents />;

  const toggleSelect = (id) => setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const toggleSelectAll = () => setSelected(selected.length === students.length ? [] : students.map((s) => s.id));
  const bulkSetTP = (tp) => { if (selected.length === 0) return; selected.forEach((id) => setUnitTP(id, tp)); };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[#E7E2D8] bg-white p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <label className="text-xs font-medium text-slate-500 shrink-0">Unit / Tajuk DSKP</label>
        <div className="relative flex-1">
          <select value={activeUnitId} onChange={(e) => setActiveUnitId(e.target.value)}
            className="w-full appearance-none text-sm font-semibold rounded-lg border border-[#DCD8CF] py-2.5 pl-3.5 pr-9 outline-none">
            {units.map((u) => <option key={u.id} value={u.id}>{u.label}</option>)}
          </select>
          <IconChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
        <button onClick={onManageUnits} className="flex items-center gap-1.5 text-xs font-semibold shrink-0" style={{ color: subject.color }}>
          <IconSettings size={14} /> Urus Unit
        </button>
      </div>

      <div className="rounded-2xl border p-3.5 flex flex-col sm:flex-row sm:items-center gap-3" style={{ backgroundColor: selected.length ? lighten(subject.color, 0.92) : "#fff", borderColor: selected.length ? subject.color : "#E7E2D8" }}>
        <p className="text-sm font-semibold text-slate-700 shrink-0">{selected.length > 0 ? `${selected.length} murid dipilih` : "Pentaksiran Pukal (Bulk Assessment)"}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-500 mr-1">Tetapkan TP:</span>
          <TPSelector value={null} onChange={bulkSetTP} size="sm" />
          {selected.length > 0 && <button onClick={() => setSelected([])} className="text-xs font-medium text-slate-500 flex items-center gap-1 ml-1"><IconX size={13} /> Kosongkan</button>}
        </div>
      </div>

      <div className="rounded-2xl border border-[#E7E2D8] bg-white overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[#E7E2D8] bg-[#FBFAF7]">
          <input type="checkbox" checked={selected.length === students.length} onChange={toggleSelectAll} className="h-4 w-4 rounded" />
          <span className="text-xs font-medium text-slate-500">Pilih Semua Murid</span>
        </div>
        <div className="divide-y divide-[#EEEAE1]">
          {students.map((student) => {
            const isChecked = selected.includes(student.id);
            const atts = getAttachments(student.id);
            return (
              <div key={student.id} className="flex items-center gap-3 px-4 py-3 flex-wrap" style={isChecked ? { backgroundColor: lighten(subject.color, 0.94) } : {}}>
                <input type="checkbox" checked={isChecked} onChange={() => toggleSelect(student.id)} className="h-4 w-4 rounded shrink-0" />
                <button onClick={() => openAttachments(student.id, student.name)} className="text-slate-400 hover:text-slate-600 relative shrink-0" title="Lampiran">
                  <IconPaperclip size={15} />
                  {atts.length > 0 && <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-slate-700 text-white text-[9px] flex items-center justify-center">{atts.length}</span>}
                </button>
                <p className="text-sm font-medium text-slate-700 flex-1 min-w-[160px]">{student.name}</p>
                <TPSelector value={records[getUnitKey(student.id)]} onChange={(tp) => setUnitTP(student.id, tp)} size="sm" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function EmptyStudents() {
  return (
    <div className="rounded-2xl border border-dashed border-[#DCD8CF] bg-white p-10 text-center text-sm text-slate-400">
      Tiada murid dalam kelas ini. Sila tambah murid menggunakan butang "Urus Murid" di atas.
    </div>
  );
}

/* ===========================================================
   LAPORAN CETAK / PDF
=========================================================== */
function PrintReport({ subject, classObj, students, records, attachments, contextLabel }) {
  const mode = subject.mode;
  let columns = [];
  let getCell = () => "-";

  if (mode === "matrix") {
    columns = (subject.skills || []).map((s) => s.label);
    getCell = (student, i) => {
      const skill = subject.skills[i];
      const v = records[recKey(subject.id, classObj.id, student.id)]?.[skill.id];
      return v ? `TP${v}` : "-";
    };
  } else if (mode === "unit") {
    columns = (subject.units || []).map((u) => u.label);
    getCell = (student, i) => {
      const unit = subject.units[i];
      const v = records[recKey(subject.id, classObj.id, unit.id, student.id)];
      return v ? `TP${v}` : "-";
    };
  } else if (mode === "audio") {
    columns = ["TP", "Rakaman", "Kriteria Dipenuhi"];
    getCell = (student, i) => {
      const e = records[recKey(subject.id, classObj.id, student.id)] || {};
      if (i === 0) return e.tp ? `TP${e.tp}` : "-";
      if (i === 1) return e.recorded ? "Ada" : "Tiada";
      const done = (subject.checklist || []).filter((c) => e.checklist?.[c.id]).map((c) => c.label);
      return done.length ? done.join(", ") : "-";
    };
  } else {
    columns = ["TP", "Bil. Lampiran", "Nota"];
    getCell = (student, i) => {
      const e = records[recKey(subject.id, classObj.id, student.id)] || {};
      const attKey = recKey(subject.id, classObj.id, student.id);
      if (i === 0) return e.tp ? `TP${e.tp}` : "-";
      if (i === 1) return String((attachments[attKey] || []).length);
      return e.note || "-";
    };
  }

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <style>{`@page { margin: 16mm; }`}</style>
      <div className="flex items-start justify-between border-b-2 border-black pb-3 mb-5">
        <div>
          <h1 className="text-xl font-bold">Laporan Pentaksiran Bilik Darjah (PBD)</h1>
          <p className="text-sm mt-1">Kelas: <b>{classObj?.name}</b> &nbsp;·&nbsp; Subjek: <b>{subject.label}</b></p>
          {contextLabel && <p className="text-sm">{contextLabel}</p>}
        </div>
        <p className="text-xs text-right whitespace-nowrap">Tarikh cetak:<br /><b>{todayStr()}</b></p>
      </div>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="border border-black px-2 py-1.5 text-left">Bil</th>
            <th className="border border-black px-2 py-1.5 text-left">Nama Murid</th>
            {columns.map((c) => <th key={c} className="border border-black px-2 py-1.5 text-left">{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={student.id}>
              <td className="border border-black px-2 py-1.5">{idx + 1}</td>
              <td className="border border-black px-2 py-1.5">{student.name}</td>
              {columns.map((c, i) => <td key={c} className="border border-black px-2 py-1.5">{getCell(student, i)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-12 flex justify-between text-sm">
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
function App() {
  const [classes, setClasses] = useState(DEFAULT_CLASSES);
  const [selectedClassId, setSelectedClassId] = useState(DEFAULT_CLASSES[0].id);
  const [studentsByClass, setStudentsByClass] = useState(seedStudentsByClass);
  const [subjects, setSubjects] = useState(DEFAULT_SUBJECTS);
  const [activeSubjectId, setActiveSubjectId] = useState(DEFAULT_SUBJECTS[0].id);
  const [records, setRecords] = useState({});
  const [attachments, setAttachments] = useState({});
  const [activeSkillId, setActiveSkillId] = useState(DEFAULT_SUBJECTS[2].skills[0].id);
  const [activeUnitId, setActiveUnitId] = useState(DEFAULT_SUBJECTS[3].units[0].id);
  const [toast, setToast] = useState(null);
  const [isPrinting, setIsPrinting] = useState(false);

  const [manageClassesOpen, setManageClassesOpen] = useState(false);
  const [manageStudentsOpen, setManageStudentsOpen] = useState(false);
  const [manageSubjectsOpen, setManageSubjectsOpen] = useState(false);
  const [subjectForm, setSubjectForm] = useState(null);
  const [manageSkillsOpen, setManageSkillsOpen] = useState(false);
  const [manageUnitsOpen, setManageUnitsOpen] = useState(false);
  const [manageChecklistOpen, setManageChecklistOpen] = useState(false);
  const [attachmentsFor, setAttachmentsFor] = useState(null);
  const [contentView, setContentView] = useState("pentaksiran"); // 'pentaksiran' | 'dskp'
  const [dskpForm, setDskpForm] = useState(null); // null | {} | {id,...}
  const [sheetsOpen, setSheetsOpen] = useState(false);
  const [sheetsConfig, setSheetsConfig] = useState({ clientId: "", spreadsheetId: "" });
  const [accessToken, setAccessToken] = useState(null);
  const [sheetsBusy, setSheetsBusy] = useState(false);
  const tokenClientRef = useRef(null);

  const activeSubject = subjects.find((s) => s.id === activeSubjectId) || subjects[0];
  const students = studentsByClass[selectedClassId] || [];
  const selectedClass = classes.find((c) => c.id === selectedClassId);

  useEffect(() => {
    if (!activeSubject) return;
    if (activeSubject.mode === "matrix") {
      const ids = (activeSubject.skills || []).map((s) => s.id);
      if (!ids.includes(activeSkillId)) setActiveSkillId(ids[0] || null);
    }
    if (activeSubject.mode === "unit") {
      const ids = (activeSubject.units || []).map((u) => u.id);
      if (!ids.includes(activeUnitId)) setActiveUnitId(ids[0] || null);
    }
  }, [activeSubjectId, subjects]);

  useEffect(() => {
    const handler = () => setIsPrinting(false);
    window.addEventListener("afterprint", handler);
    return () => window.removeEventListener("afterprint", handler);
  }, []);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2500); };

  const getKey = (studentId) => recKey(activeSubjectId, selectedClassId, studentId);
  const getUnitKey = (studentId) => recKey(activeSubjectId, selectedClassId, activeUnitId, studentId);
  const updateRecord = (key, patch) => setRecords((prev) => ({ ...prev, [key]: { ...(prev[key] || {}), ...patch } }));
  const setCellTP = (studentId, skillId, tp) => updateRecord(getKey(studentId), { [skillId]: tp });
  const setUnitTP = (studentId, tp) => setRecords((prev) => ({ ...prev, [recKey(activeSubjectId, selectedClassId, activeUnitId, studentId)]: tp }));

  const getAttachments = (studentId) => attachments[recKey(activeSubjectId, selectedClassId, studentId)] || [];
  const addAttachment = (studentId, att) => setAttachments((prev) => { const k = recKey(activeSubjectId, selectedClassId, studentId); return { ...prev, [k]: [...(prev[k] || []), att] }; });
  const editAttachment = (studentId, attId, patch) => setAttachments((prev) => { const k = recKey(activeSubjectId, selectedClassId, studentId); return { ...prev, [k]: (prev[k] || []).map((a) => (a.id === attId ? { ...a, ...patch } : a)) }; });
  const deleteAttachment = (studentId, attId) => setAttachments((prev) => { const k = recKey(activeSubjectId, selectedClassId, studentId); return { ...prev, [k]: (prev[k] || []).filter((a) => a.id !== attId) }; });
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

  // Murid CRUD (kelas terpilih)
  const addStudent = (name) => setStudentsByClass((p) => ({ ...p, [selectedClassId]: [...(p[selectedClassId] || []), { id: uid(), name }] }));
  const editStudent = (id, name) => setStudentsByClass((p) => ({ ...p, [selectedClassId]: (p[selectedClassId] || []).map((s) => (s.id === id ? { ...s, name } : s)) }));
  const deleteStudent = (id) => setStudentsByClass((p) => ({ ...p, [selectedClassId]: (p[selectedClassId] || []).filter((s) => s.id !== id) }));

  // Subjek CRUD
  const saveSubject = (form) => {
    if (form.id) {
      setSubjects((p) => p.map((s) => (s.id === form.id ? { ...s, label: form.label, tag: form.tag, color: form.color } : s)));
    } else {
      const id = uid();
      const base = { id, label: form.label, tag: form.tag, color: form.color, mode: form.mode };
      if (form.mode === "matrix") base.skills = [{ id: uid(), label: "Kemahiran 1" }];
      if (form.mode === "unit") base.units = [{ id: uid(), label: "Unit 1" }];
      if (form.mode === "audio") base.checklist = [{ id: uid(), label: "Kriteria 1" }];
      setSubjects((p) => [...p, base]);
      setActiveSubjectId(id);
    }
    setSubjectForm(null);
  };
  const deleteSubject = (id) => {
    if (subjects.length <= 1) { showToast("Perlu ada sekurang-kurangnya satu subjek"); return; }
    setSubjects((p) => p.filter((s) => s.id !== id));
    if (activeSubjectId === id) setActiveSubjectId(subjects.find((s) => s.id !== id)?.id);
  };

  // Skills / Units / Checklist CRUD generik
  const updateSubjectListField = (field, updater) => setSubjects((p) => p.map((s) => (s.id === activeSubjectId ? { ...s, [field]: updater(s[field] || []) } : s)));
  const addListItem = (field, label) => updateSubjectListField(field, (list) => [...list, { id: uid(), label }]);
  const editListItem = (field, id, label) => updateSubjectListField(field, (list) => list.map((x) => (x.id === id ? { ...x, label } : x)));
  const deleteListItem = (field, id) => {
    const list = activeSubject[field] || [];
    if (list.length <= 1) { showToast("Perlu ada sekurang-kurangnya satu item"); return; }
    updateSubjectListField(field, (l) => l.filter((x) => x.id !== id));
  };

  // DSKP CRUD (bagi subjek aktif)
  const addDSKP = (entry) => updateSubjectListField("dskp", (list) => [...list, { id: uid(), ...entry }]);
  const editDSKP = (id, entry) => updateSubjectListField("dskp", (list) => list.map((d) => (d.id === id ? { ...d, ...entry } : d)));
  const deleteDSKP = (id) => updateSubjectListField("dskp", (list) => list.filter((d) => d.id !== id));

  const handlePrint = () => { setIsPrinting(true); setTimeout(() => window.print(), 80); };

  // ---- Google Sheets: log masuk & sinkron ----
  const googleAvailable = typeof window !== "undefined" && !!(window.google && window.google.accounts && window.google.accounts.oauth2);

  useEffect(() => { tokenClientRef.current = null; }, [sheetsConfig.clientId]);

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
      await sheetsFetch(sid, `/values/PBD_Config!A1?valueInputOption=RAW`, accessToken, {
        method: "PUT", body: JSON.stringify({ values: [[buildConfigJSON(classes, subjects, studentsByClass, records, attachments)]] }),
      });
      await writeSheetValues(sid, accessToken, "PBD_Rekod", buildRecordRows(classes, subjects, studentsByClass, records));
      await writeSheetValues(sid, accessToken, "PBD_DSKP", buildDSKPRows(subjects));
      showToast("Berjaya disimpan ke Google Sheets");
    } catch (err) {
      showToast(`Gagal menyimpan: ${err.message}`);
    } finally { setSheetsBusy(false); }
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
    } catch (err) {
      showToast(`Gagal memuat: ${err.message}`);
    } finally { setSheetsBusy(false); }
  };

  // Ringkasan
  let distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let assessedCount = 0;
  let contextLabel = "";
  if (activeSubject) {
    if (activeSubject.mode === "gallery" || activeSubject.mode === "audio") {
      students.forEach((s) => { const tp = records[getKey(s.id)]?.tp; if (tp) { distribution[tp]++; assessedCount++; } });
    } else if (activeSubject.mode === "matrix") {
      const skill = (activeSubject.skills || []).find((s) => s.id === activeSkillId);
      contextLabel = skill ? `Kemahiran: ${skill.label}` : "";
      students.forEach((s) => { const tp = records[getKey(s.id)]?.[activeSkillId]; if (tp) { distribution[tp]++; assessedCount++; } });
    } else if (activeSubject.mode === "unit") {
      const unit = (activeSubject.units || []).find((u) => u.id === activeUnitId);
      contextLabel = unit ? unit.label : "";
      students.forEach((s) => { const tp = records[recKey(activeSubjectId, selectedClassId, activeUnitId, s.id)]; if (tp) { distribution[tp]++; assessedCount++; } });
    }
  }
  const total = students.length;

  if (isPrinting && activeSubject) {
    return <PrintReport subject={activeSubject} classObj={selectedClass} students={students} records={records} attachments={attachments} contextLabel={contextLabel} />;
  }

  if (!activeSubject) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-slate-500 mb-3">Tiada subjek lagi.</p>
          <button onClick={() => setSubjectForm({})} className="text-sm font-semibold text-white bg-slate-800 rounded-lg px-4 py-2">Tambah Subjek</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4] pb-24 sm:pb-8" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
      <div className="sticky top-0 z-20 bg-white border-b border-[#E7E2D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ backgroundColor: activeSubject.color }}>PT</div>
              <div className="min-w-0">
                <p className="font-bold text-slate-800 text-sm leading-none">PBD Tracker</p>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">Sistem Perekodan Pentaksiran Bilik Darjah</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button onClick={() => setSheetsOpen(true)}
                className="h-9 flex items-center gap-1.5 rounded-lg border px-2.5 shrink-0 text-xs font-semibold"
                style={accessToken ? { borderColor: "#5B9470", color: "#3A6E5A", backgroundColor: "#F0F5F1" } : { borderColor: "#E7E2D8", color: "#6B675E" }}
                title="Sambungan Google Sheets"
              >
                <IconCloud size={15} />
                <span className={`h-1.5 w-1.5 rounded-full ${accessToken ? "bg-emerald-500" : "bg-slate-300"}`} />
                <span className="hidden sm:inline">Sheets</span>
              </button>
              <div className="relative">
                <select value={selectedClassId} onChange={(e) => setSelectedClassId(e.target.value)}
                  className="appearance-none text-sm font-semibold bg-[#F5F3EE] border border-[#E7E2D8] rounded-lg pl-3 pr-8 py-2 outline-none cursor-pointer">
                  {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <IconChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
              <button onClick={() => setManageClassesOpen(true)} className="h-9 w-9 rounded-lg border border-[#E7E2D8] flex items-center justify-center text-slate-500 shrink-0" title="Urus Kelas"><IconPencil size={14} /></button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 flex-1">
              {subjects.map((s) => {
                const active = s.id === activeSubjectId;
                return (
                  <button key={s.id} onClick={() => setActiveSubjectId(s.id)}
                    className="shrink-0 flex items-center gap-2 text-sm font-semibold px-3.5 py-2 rounded-xl border transition-colors"
                    style={active ? { backgroundColor: s.color, borderColor: s.color, color: "#fff" } : { backgroundColor: "#fff", borderColor: "#E7E2D8", color: "#6B675E" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: active ? "#fff" : s.color }} />
                    {s.label}
                  </button>
                );
              })}
            </div>
            <button onClick={() => setManageSubjectsOpen(true)} className="h-9 w-9 rounded-lg border border-[#E7E2D8] flex items-center justify-center text-slate-500 shrink-0" title="Urus Subjek"><IconSettings size={15} /></button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 space-y-5">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="inline-flex rounded-lg border border-[#E7E2D8] bg-white p-1">
            <button onClick={() => setContentView("pentaksiran")}
              className="text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
              style={contentView === "pentaksiran" ? { backgroundColor: activeSubject.color, color: "#fff" } : { color: "#6B675E" }}
            >Pentaksiran</button>
            <button onClick={() => setContentView("dskp")}
              className="text-xs font-semibold px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5"
              style={contentView === "dskp" ? { backgroundColor: activeSubject.color, color: "#fff" } : { color: "#6B675E" }}
            ><IconBookOpen size={13} /> Rujukan DSKP</button>
          </div>
          {contentView === "pentaksiran" && (
            <button onClick={() => setManageStudentsOpen(true)} className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 border border-[#DCD8CF] text-slate-600">
              <IconUsers size={14} /> Urus Murid
            </button>
          )}
        </div>

        {contentView === "pentaksiran" && (
          <>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <IconUsers size={15} />
              Kelas <span className="font-semibold text-slate-700">{selectedClass?.name}</span>
              <span className="text-slate-300">·</span>{total} murid berdaftar
            </div>

            <SummaryBar subject={activeSubject} contextLabel={contextLabel} assessedCount={assessedCount} total={total} distribution={distribution} />

            {activeSubject.mode === "gallery" && (
              <GalleryView subject={activeSubject} students={students} records={records} updateRecord={updateRecord} getKey={getKey} getAttachments={getAttachments} openAttachments={openAttachments} />
            )}
            {activeSubject.mode === "audio" && (
              <AudioView subject={activeSubject} students={students} records={records} updateRecord={updateRecord} getKey={getKey} getAttachments={getAttachments} openAttachments={openAttachments} onManageChecklist={() => setManageChecklistOpen(true)} />
            )}
            {activeSubject.mode === "matrix" && (
              <MatrixView subject={activeSubject} students={students} records={records} setCellTP={setCellTP} getKey={getKey} activeSkillId={activeSkillId} setActiveSkillId={setActiveSkillId} onManageSkills={() => setManageSkillsOpen(true)} getAttachments={getAttachments} openAttachments={openAttachments} />
            )}
            {activeSubject.mode === "unit" && (
              <UnitView subject={activeSubject} students={students} records={records} setUnitTP={setUnitTP} getUnitKey={getUnitKey} activeUnitId={activeUnitId} setActiveUnitId={setActiveUnitId} onManageUnits={() => setManageUnitsOpen(true)} getAttachments={getAttachments} openAttachments={openAttachments} />
            )}
          </>
        )}

        {contentView === "dskp" && (
          <DSKPPanel subject={activeSubject} onAdd={() => setDskpForm({})} onEdit={(item) => setDskpForm(item)} onDelete={deleteDSKP} />
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-[#E7E2D8] sm:static sm:bg-transparent sm:border-0 sm:mt-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-3">
          <button onClick={() => showToast("Rekod telah disimpan")} className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-xl py-2.5 px-5" style={{ backgroundColor: activeSubject.color }}>
            <IconSave size={16} /> Simpan Rekod
          </button>
          <button onClick={handlePrint} className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-2.5 px-5 border" style={{ borderColor: "#DCD8CF", color: "#4B4840" }}>
            <IconPrinter size={16} /> Cetak PDF
          </button>
        </div>
      </div>

      <Toast message={toast} />

      {manageClassesOpen && (
        <ManageItemsModal title="Urus Kelas" placeholder="Nama kelas baru" minItems={1}
          items={classes.map((c) => ({ id: c.id, label: c.name }))}
          onAdd={addClass} onEdit={editClass} onDelete={deleteClass}
          onClose={() => setManageClassesOpen(false)} />
      )}
      {manageStudentsOpen && (
        <ManageItemsModal title={`Urus Murid - ${selectedClass?.name}`} placeholder="Nama murid baru"
          items={students.map((s) => ({ id: s.id, label: s.name }))}
          onAdd={addStudent} onEdit={editStudent} onDelete={deleteStudent}
          onClose={() => setManageStudentsOpen(false)} />
      )}
      {manageSubjectsOpen && (
        <ManageSubjectsModal subjects={subjects}
          onEdit={(s) => setSubjectForm(s)} onDelete={deleteSubject} onAddNew={() => setSubjectForm({})}
          onClose={() => setManageSubjectsOpen(false)} />
      )}
      {subjectForm && <SubjectFormModal initial={subjectForm.id ? subjectForm : null} onSave={saveSubject} onClose={() => setSubjectForm(null)} />}
      {manageSkillsOpen && (
        <ManageItemsModal title="Urus Kemahiran" placeholder="Nama kemahiran baru" minItems={1}
          items={activeSubject.skills || []} onAdd={(l) => addListItem("skills", l)} onEdit={(id, l) => editListItem("skills", id, l)} onDelete={(id) => deleteListItem("skills", id)}
          onClose={() => setManageSkillsOpen(false)} />
      )}
      {manageUnitsOpen && (
        <ManageItemsModal title="Urus Unit / Tajuk DSKP" placeholder="Nama unit baru" minItems={1}
          items={activeSubject.units || []} onAdd={(l) => addListItem("units", l)} onEdit={(id, l) => editListItem("units", id, l)} onDelete={(id) => deleteListItem("units", id)}
          onClose={() => setManageUnitsOpen(false)} />
      )}
      {manageChecklistOpen && (
        <ManageItemsModal title="Urus Kriteria Senarai Semak" placeholder="Kriteria baru" minItems={1}
          items={activeSubject.checklist || []} onAdd={(l) => addListItem("checklist", l)} onEdit={(id, l) => editListItem("checklist", id, l)} onDelete={(id) => deleteListItem("checklist", id)}
          onClose={() => setManageChecklistOpen(false)} />
      )}
      {attachmentsFor && (
        <AttachmentsModal studentName={attachmentsFor.studentName} items={getAttachments(attachmentsFor.studentId)}
          onAdd={(url, source) => addAttachment(attachmentsFor.studentId, { id: uid(), url, source })}
          onReplace={(attId, url, source) => editAttachment(attachmentsFor.studentId, attId, { url, source })}
          onDelete={(attId) => deleteAttachment(attachmentsFor.studentId, attId)}
          onClose={() => setAttachmentsFor(null)} />
      )}
      {dskpForm && (
        <DSKPFormModal initial={dskpForm.id ? dskpForm : null}
          onSave={(entry) => { if (entry.id) editDSKP(entry.id, entry); else addDSKP(entry); setDskpForm(null); }}
          onClose={() => setDskpForm(null)} />
      )}
      {sheetsOpen && (
        <SheetsModal
          config={sheetsConfig} setConfig={setSheetsConfig}
          accessToken={accessToken} busy={sheetsBusy} available={googleAvailable}
          onSignIn={handleGoogleSignIn} onSignOut={handleGoogleSignOut}
          onSave={saveToSheets} onLoad={loadFromSheets}
          onClose={() => setSheetsOpen(false)}
        />
      )}
    </div>
  );
}

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
