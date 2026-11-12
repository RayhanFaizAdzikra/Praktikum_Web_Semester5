import React from 'react';

function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div className="matkul">
      <div>
        <div>
          <span className="matkul-kode">{kode}</span>
          <span className="matkul-nama">{nama}</span>
        </div>
        <div className="matkul-jadwal">📅 Jadwal Sesi: {hari}</div>
      </div>
      <span className="matkul-sks">{sks} SKS</span>
    </div>
  );
}

export default ItemMatkul;