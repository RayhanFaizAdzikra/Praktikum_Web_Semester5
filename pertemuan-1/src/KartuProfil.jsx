import React from 'react';

// Komponen Functional menerima properti (props) lewat destructuring
function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  const inisial = nama
    .split(' ')
    .map((kata) => kata[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="profil">
      <div className="profil-atas">
        {fotoUrl ? (
          <img src={fotoUrl} alt={`Foto ${nama}`} className="profil-foto" />
        ) : (
          <div className="profil-avatar">{inisial}</div>
        )}
        <div>
          <h3 className="profil-nama">{nama}</h3>
          <p className="profil-info">
            NPM: <strong>{npm}</strong>
          </p>
          <p className="profil-info">Kelas: {kelas}</p>
        </div>
      </div>

      <div className="profil-bawah">
        <span className={`badge-status ${status === 'Aktif' ? 'aktif' : 'lain'}`}>
          Status Akademik: {status}
        </span>
      </div>
    </div>
  );
}

export default KartuProfil;