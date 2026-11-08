
import logoUrl from "../assets/mark.svg";
export default function Hero() {
  return (
    <section
      className="hero wrap"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="availability">
          <span aria-hidden="true" />
          Ubahin 1.0 untuk Windows
        </p>

        <h1 id="hero-title">
          Beda format?
          <br />
          Ubahin aja.
        </h1>

        <p className="intro">
          Gambar, PDF, audio, sampai video.
          <br className="wide-only" />
          Ubah dalam satu aplikasi, langsung di
          komputer kamu.
        </p>

        <div className="hero-actions">
          <a className="button" href="#unduh">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
            </svg>
            Unduh untuk Windows
          </a>

          <a className="text-link" href="#panduan">
            Lihat cara pakainya
          </a>
        </div>

        <p className="hero-note">
          Gratis. Tanpa akun. File tetap di komputermu.
        </p>
      </div>

      <figure
        className="conversion-art"
        aria-label="Ilustrasi perubahan format gambar PNG menjadi WebP"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <div className="glass-file file-back">
          <span className="file-label">PNG</span>

          <div className="landscape">
            <span className="sun" />
            <span className="mountain one" />
            <span className="mountain two" />
          </div>

          <span className="file-line" />
          <span className="file-line short" />
        </div>

        <div className="glass-file file-front">
          <span className="file-label">WebP</span>

          <div className="landscape">
            <span className="sun" />
            <span className="mountain one" />
            <span className="mountain two" />
          </div>

          <span className="file-line" />
          <span className="file-line short" />
        </div>

        <div className="transform-token">
          <img
            src={logoUrl}
            width={68}
            height={68}
            alt=""
          />
        </div>

        <figcaption>
          <span className="check" aria-hidden="true">
            ✓
          </span>
          {" "}Format baru. File asli tetap utuh.
        </figcaption>
      </figure>
    </section>
  );
}
