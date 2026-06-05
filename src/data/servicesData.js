const CorporateIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`;
const TaxIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 14l2-2 4 4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
const LawIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>`;
const UsersIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`;
const PermitIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`;

export const allServices = [
  {
    id: 1,
    title: 'Pendirian Badan Usaha',
    subtitle: 'Pendirian PT, CV, & PMA • Legalitas Korporasi • Anggaran Dasar & Kepatuhan',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    icon: CorporateIcon,
    slug: 'pendirian-badan-usaha'
  },
  {
    id: 2,
    title: 'Konsultasi Pajak',
    subtitle: 'Pendampingan Pemeriksaan Pajak • Restitusi Pajak • Penasihat Keuangan',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    icon: TaxIcon,
    slug: 'konsultasi-pajak'
  },
  {
    id: 3,
    title: 'Litigasi dan Insolvensi',
    subtitle: 'Pidana & Perdata • Pengadilan Hubungan Industrial & Pajak • PKPU & Insolvensi',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    icon: LawIcon,
    slug: 'litigasi-dan-kepailitan'
  },
  {
    id: 4,
    title: 'Ketenagakerjaan dan SDM',
    subtitle: 'Rekrutmen & Outsourcing • Manajemen Payroll & SOP • Pendampingan & Konsultasi KPI',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop',
    icon: UsersIcon,
    slug: 'ketenagakerjaan-dan-sdm'
  },
  {
    id: 5,
    title: 'Lisensi dan Permit Bisnis',
    subtitle: 'Izin Operasional & Komersial • Sertifikasi Sektoral (OSS-RBA) • Pemenuhan Komitmen Regulasi',
    image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',    
    icon: PermitIcon,
    slug: 'lisensi-dan-permit-bisnis'
  }
];