import { useState } from 'react';
import Kotak from './Kotak';

function Penghitung() {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => {
    setJumlah(jumlah + 1);
  };

  const ulangi = () => {
    setJumlah(0);
  };

  return (
    <Kotak judul="Penghitung Klik">
      <div className="penghitung">
        <div>
          <div className="angka">{jumlah}</div>
          <p className="keterangan">Tombol sudah diklik {jumlah} kali</p>
          {jumlah >= 5 && <p className="pujian">Wah, kamu rajin sekali mengklik!</p>}
        </div>
        <div className="baris">
          <button className="tombol" onClick={tambah}>Klik Saya</button>
          <button className="tombol tombol-ghost" onClick={ulangi}>Ulangi</button>
        </div>
      </div>
    </Kotak>
  );
}
export default Penghitung;