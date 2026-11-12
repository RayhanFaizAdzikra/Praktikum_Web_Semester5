import React from 'react';
import './App.css';
import KartuProfil from './KartuProfil';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';
import KartuProyek from './KartuProyek';

// 1. Data daftar mata kuliah praktikum semester ini
const daftarPraktikum = [
  { id: 101, kode: 'IF211', nama: 'Pemrograman Web (React & Laravel)', sks: 3, hari: 'Senin' },
  { id: 102, kode: 'IF212', nama: 'Sistem Basis Data (PostgreSQL)', sks: 3, hari: 'Rabu' },
  { id: 103, kode: 'IF213', nama: 'Rekayasa Perangkat Lunak Terapan', sks: 3, hari: 'Kamis' },
  { id: 104, kode: 'IF214', nama: 'Arsitektur Sistem Terdistribusi', sks: 2, hari: 'Jumat' },
];

// 2. Data keahlian (Latihan 1) - ubah sesuai kemampuanmu
const daftarSkill = [
  { id: 1, namaSkill: 'HTML & CSS', level: 'Mahir' },
  { id: 2, namaSkill: 'JavaScript', level: 'Menengah' },
  { id: 3, namaSkill: 'React JS', level: 'Pemula' },
  { id: 4, namaSkill: 'PostgreSQL', level: 'Menengah' },
  { id: 5, namaSkill: 'Laravel', level: 'Pemula' },
];

// 3. Data proyek untuk Showcase Portofolio Mini (Tugas Terstruktur)
//    Ganti linkGithub dengan URL repositori milikmu
const daftarProyek = [
  {
    id: 1,
    judul: 'Aplikasi To-Do List',
    deskripsi: 'Aplikasi pencatat tugas harian dengan fitur tambah, hapus, dan tandai selesai.',
    teknologi: ['React', 'Vite', 'CSS'],
    linkGithub: 'https://github.com/',
  },
  {
    id: 2,
    judul: 'Sistem Informasi Perpustakaan',
    deskripsi: 'Pengelolaan data buku, anggota, dan peminjaman berbasis web.',
    teknologi: ['Laravel', 'PostgreSQL', 'Bootstrap'],
    linkGithub: 'https://github.com/',
  },
  {
    id: 3,
    judul: 'Website Profil Kelas',
    deskripsi: 'Halaman statis responsif yang menampilkan profil dan galeri kegiatan kelas.',
    teknologi: ['HTML', 'CSS', 'JavaScript'],
    linkGithub: 'https://github.com/',
  },
  {
    id: 4,
    judul: 'Dashboard Nilai Praktikum',
    deskripsi: 'Visualisasi nilai praktikum mahasiswa dalam bentuk tabel dan grafik.',
    teknologi: ['React', 'Chart.js', 'REST API'],
    linkGithub: 'https://github.com/',
  },
];

function App() {
  // Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert('Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.');
  };

  return (
    <div className="halaman">
      <header className="hero">
        <span className="hero-label">MODUL 1</span>
        <h1>Praktikum Pemrograman Web</h1>
        <p>Laboratorium Informatika - Modul 1: Pengenalan React JS &amp; Vite</p>
      </header>

      <section className="section">
        <h2 className="section-judul">👤 Profil Mahasiswa Praktikan</h2>
        <KartuProfil nama="Rayhan Faiz Adzikra" npm="243040041" kelas="A" status="Aktif" />

        <h3 className="sub-judul">Keahlian</h3>
        <div className="skill-wrap">
          {daftarSkill.map((skill) => (
            <BadgeSkill key={skill.id} namaSkill={skill.namaSkill} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-judul">📚 Daftar Rencana Praktikum Semester</h2>
        <div className="daftar-matkul">
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-judul">🚀 Showcase Portofolio Mini</h2>
        <div className="grid-proyek">
          {daftarProyek.map((proyek) => (
            <KartuProyek key={proyek.id} {...proyek} />
          ))}
        </div>
      </section>

      <div className="tombol-wrap">
        <button className="tombol-sapaan" onClick={notifikasiSapaan}>
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>

      <footer className="footer">Praktikum Pemrograman Web · Modul 1 · React JS &amp; Vite</footer>
    </div>
  );
}

export default App;