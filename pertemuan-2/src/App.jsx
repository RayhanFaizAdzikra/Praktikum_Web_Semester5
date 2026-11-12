import { useState, useEffect } from 'react';
import './App.css';
import Kotak from './Kotak';
import Penghitung from './Penghitung';
import FormTugas from './FormTugas';
import ItemTugas from './ItemTugas';

function App() {
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ];
  });

  // Tugas 1: 'semua' | 'belum' | 'selesai'
  const [filter, setFilter] = useState('semua');

  // Efek A: sekali saat pertama tampil
  useEffect(() => {
    console.log('Aplikasi Daftar Tugas siap digunakan!');
  }, []);

  // Efek B: judul tab
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  // Efek C: simpan ke localStorage
  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Tugas 2
  const hapusSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  const persen = daftarTugas.length === 0 ? 0 : Math.round((jumlahSelesai / daftarTugas.length) * 100);

  // Tugas 1
  const tugasTampil = daftarTugas.filter((tugas) => {
    if (filter === 'belum') return !tugas.selesai;
    if (filter === 'selesai') return tugas.selesai;
    return true;
  });

  const pilihanFilter = [
    { nilai: 'semua', label: 'Semua' },
    { nilai: 'belum', label: 'Belum Selesai' },
    { nilai: 'selesai', label: 'Selesai' },
  ];

  return (
    <div className="wadah">
      <header className="kepala">
        <svg className="logo" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="lapisan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#c4b5fd" />
              <stop offset="1" stopColor="#6d28d9" />
            </linearGradient>
          </defs>
          <path d="M32 6 58 20 32 34 6 20Z" fill="#fff" stroke="#b9aedb" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6 34 32 48 58 34" stroke="url(#lapisan)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 46 32 60 58 46" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
        </svg>
        <div>
          <h1 className="judul">Daftar Tugas Praktikum</h1>
          <p className="subjudul">Laboratorium Informatika - Modul 2: React Lanjutan</p>
        </div>
      </header>

      <Penghitung />

      <Kotak judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kotak>

      <Kotak judul="Daftar Tugas">
        <div className="progres-info">
          <p className="ringkasan">
            {jumlahSelesai} dari {daftarTugas.length} tugas selesai
          </p>
          <span className="persen">{persen}%</span>
        </div>
        <div
          className="progres"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={persen}
        >
          <div className="progres-isi" style={{ width: `${persen}%` }} />
        </div>

        <div className="kontrol">
          {/* Tugas 1 */}
          <div className="baris filter">
            {pilihanFilter.map((p) => (
              <button
                key={p.nilai}
                className={
                  filter === p.nilai
                    ? 'tombol tombol-kecil tombol-aktif'
                    : 'tombol tombol-kecil tombol-filter'
                }
                onClick={() => setFilter(p.nilai)}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Tugas 2 */}
          {jumlahSelesai > 0 && (
            <button className="tombol tombol-ghost tombol-kecil" onClick={hapusSelesai}>
              Hapus Semua yang Selesai
            </button>
          )}
        </div>

        {daftarTugas.length === 0 ? (
          <p className="kosong">Belum ada tugas. Yuk tambahkan tugas pertamamu!</p>
        ) : tugasTampil.length === 0 ? (
          <p className="kosong">Tidak ada tugas pada filter ini.</p>
        ) : (
          <ul className="daftar">
            {tugasTampil.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kotak>
    </div>
  );
}
export default App;