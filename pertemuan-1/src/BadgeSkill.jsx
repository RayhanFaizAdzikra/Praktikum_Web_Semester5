import React from 'react';

// Kelas CSS dipilih secara dinamis berdasarkan level
const kelasLevel = {
  Pemula: 'pemula',
  Menengah: 'menengah',
  Mahir: 'mahir',
};

function BadgeSkill({ namaSkill, level }) {
  const kelas = kelasLevel[level] || 'lainnya';

  return (
    <span className={`badge-skill ${kelas}`}>
      {namaSkill} · {level}
    </span>
  );
}

export default BadgeSkill;