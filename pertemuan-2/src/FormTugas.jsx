import { useState } from 'react';

function FormTugas({ onTambah }) {
  const [teks, setTeks] = useState('');

  const terlaluPanjang = teks.length > 50;
  const tidakValid = teks.trim() === '' || terlaluPanjang;

  const tanganiKirim = (event) => {
    event.preventDefault();
    if (tidakValid) return;
    onTambah(teks.trim());
    setTeks('');
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="baris">
        <input
          className={terlaluPanjang ? 'input input-salah' : 'input'}
          type="text"
          placeholder="Contoh: Kerjakan laporan Modul 2"
          value={teks}
          onChange={(event) => setTeks(event.target.value)}
        />
        <button className="tombol" type="submit" disabled={tidakValid}>
          Tambah
        </button>
      </div>
      <div className="bantu">
        {terlaluPanjang && <span className="galat">Judul tugas maksimal 50 karakter.</span>}
        <span className={terlaluPanjang ? 'hitung lewat' : 'hitung'}>{teks.length}/50</span>
      </div>
    </form>
  );
}
export default FormTugas;