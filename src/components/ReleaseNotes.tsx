
export default function ReleaseNotes() {
  return (
    <section
      className="release wrap section"
      id="rilis"
      aria-labelledby="release-title"
    >
      <h2 id="release-title">
        Catatan rilis
      </h2>

      <article>
        <div>
          <span className="release-version">
            1.0.0
          </span>

          <p>Rilis pertama</p>
        </div>

        <div>
          <h3>
            File berbeda, alur yang sama.
          </h3>

          <p>
            Konversi gambar, ikon, PDF, audio dan
            video. Antrean campuran, cancel/retry,
            riwayat lokal, tema terang/gelap,
            serta Office ke PDF melalui
            LibreOffice opsional.
          </p>

          <p className="muted">
            Dukungan awal Windows 11 x64.
            Installer unsigned. Pembaruan berikutnya
            akan mengikuti masukan pengguna.
          </p>
        </div>
      </article>
    </section>
  );
}
