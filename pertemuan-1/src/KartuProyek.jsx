import React from 'react';

function KartuProyek({ judul, deskripsi, teknologi, linkGithub }) {
  return (
    <div className="proyek">
      <div className="proyek-atas" />
      <div className="proyek-isi">
        <h3 className="proyek-judul">{judul}</h3>
        <p className="proyek-deskripsi">{deskripsi}</p>

        <div className="tag-wrap">
          {teknologi.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>

        <a
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="proyek-tombol"
        >
          Lihat Repositori GitHub →
        </a>
      </div>
    </div>
  );
}

export default KartuProyek;