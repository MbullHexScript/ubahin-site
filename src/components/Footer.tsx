
const RELEASE_URL =
  "https://github.com/MbullHexScript/ubahin-site/releases/download/v1.0.0";

export default function Footer() {
  return (
    <footer className="wrap">
      <div>
        <a
          className="wordmark"
          href="#utama"
          aria-label="Ubahin, kembali ke atas"
        >
          <img
            src="/assets/mark.svg"
            width={32}
            height={32}
            alt=""
          />
          ubahin.
        </a>

        <p>
          Dibuat oleh NaufalNyaa.
          <br />
          Beda format? Ubahin aja.
        </p>
      </div>

      <nav aria-label="Navigasi footer">
        <a href="#unduh">Unduhan</a>
        <a href="#panduan">Panduan</a>
        <a href="#privasi">Privasi</a>
        <a href={`${RELEASE_URL}/LICENSE.txt`}>
          Lisensi
        </a>
      </nav>

      <p className="copyright">
        © 2026 NaufalNyaa
      </p>
    </footer>
  );
}
