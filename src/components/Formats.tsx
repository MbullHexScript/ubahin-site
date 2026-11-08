
export default function Formats() {
  return (
    <section
      className="formats wrap section"
      id="format"
      aria-labelledby="formats-title"
    >
      <div className="section-heading">
        <h2 id="formats-title">
          Banyak format.
          <br />
          Satu tempat.
        </h2>

        <p>
          Pilih tujuan yang cocok dengan filemu.
          <br />
          Ubahin menampilkan pilihan yang bisa diproses.
        </p>
      </div>

      <div className="format-list">
        <article>
          <div className="category-icon blue" aria-hidden="true">
            <span>IMG</span>
          </div>

          <div>
            <h3>Gambar &amp; ikon</h3>
            <p>PNG, JPG, WebP, BMP, dan ICO</p>
          </div>

          <p className="target">
            Ke PNG, JPG, WebP, ICO atau PDF
            <small>Sesuai jenis input</small>
          </p>
        </article>

        <article>
          <div className="category-icon coral" aria-hidden="true">
            <span>PDF</span>
          </div>

          <div>
            <h3>PDF</h3>
            <p>Dari dokumen ke gambar per halaman</p>
          </div>

          <p className="target">
            Ke PNG atau JPG
            <small>Semua halaman, berurutan</small>
          </p>
        </article>

        <article>
          <div className="category-icon lilac" aria-hidden="true">
            <span>AUD</span>
          </div>

          <div>
            <h3>Audio</h3>
            <p>MP3, WAV, FLAC, dan M4A</p>
          </div>

          <p className="target">
            Ke MP3, WAV atau FLAC
            <small>Codec input harus didukung</small>
          </p>
        </article>

        <article>
          <div className="category-icon mint" aria-hidden="true">
            <span>VID</span>
          </div>

          <div>
            <h3>Video</h3>
            <p>MP4, MOV, MKV, dan WebM</p>
          </div>

          <p className="target">
            Ke MP4 atau WebM
            <small>Ekstrak MP3/WAV jika ada audio</small>
          </p>
        </article>

        <article>
          <div className="category-icon slate" aria-hidden="true">
            <span>DOC</span>
          </div>

          <div>
            <h3>
              Dokumen Office{" "}
              <span className="tag">Opsional</span>
            </h3>

            <p>DOCX, XLSX, PPTX, ODT, ODS, dan ODP</p>
          </div>

          <p className="target">
            Ke PDF
            <small>Perlu LibreOffice eksternal</small>
          </p>
        </article>
      </div>

      <p className="fine-print">
        Dukungan mengikuti isi dan codec file. HEIC, AVIF, SVG,
        arsip ZIP, OCR, dan PDF ke Word belum tersedia.
        Tata letak Office dapat berbeda; periksa hasilnya
        sebelum digunakan.
      </p>
    </section>
  );
}
