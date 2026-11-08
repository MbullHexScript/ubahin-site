
import { useEffect, useState } from "react";

const RELEASE =
  "https://github.com/MbullHexScript/ubahin-site/releases/download/v1.0.0";

const RELEASE_PAGE =
  "https://github.com/MbullHexScript/ubahin-site/releases/tag/v1.0.0";

const NPM_COMMAND = [
  "npm install -g ./ubahin-desktop-installer-1.0.0.tgz",
  "ubahin-install --installer ./Ubahin-1.0.0-Setup-x64.exe",
].join("\n");

export default function Download() {
  const [canCopy, setCanCopy] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    setCanCopy(
      typeof navigator.clipboard?.writeText === "function"
    );
  }, []);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(NPM_COMMAND);
      setCopyStatus("Perintah disalin.");
    } catch {
      setCopyStatus(
        "Tidak bisa menyalin otomatis. Pilih teks perintah, lalu salin secara manual."
      );
    }
  }

  return (
    <section
      className="download-section wrap section"
      id="unduh"
      aria-labelledby="download-title"
    >
      <div className="download-card">
        <img
          className="download-logo"
          src="/assets/mark.svg"
          width="78"
          height="78"
          alt=""
        />

        <h2 id="download-title">
          Siap ubah file pertamamu?
        </h2>

        <p>Ubahin 1.0.0 untuk Windows 11 x64.</p>

        <a
          className="button download-button"
          href={`${RELEASE}/Ubahin-1.0.0-Setup-x64.exe`}
          download
        >
          Unduh Ubahin
          <span className="button-meta">
            53,87 MiB
          </span>
        </a>

        <p className="download-caption">
          Installer .exe • Gratis digunakan dan dibagikan
        </p>

        <div className="requirements">
          <p>
            <strong>Sebelum memasang</strong>
            <br />
            Memerlukan Microsoft Edge WebView2. Jika
            belum tersedia, pemasangan runtime
            memerlukan internet. Konversi sesudahnya
            tetap lokal.
          </p>

          <p>
            <strong>
              Informasi keamanan Windows
            </strong>
            <br />
            Installer belum ditandatangani. Windows
            mungkin menampilkan peringatan atau
            memblokirnya. Jangan menonaktifkan
            perlindungan Windows.
          </p>
        </div>

        <a
          className="text-link"
          href={`${RELEASE}/SHA256SUMS.txt`}
        >
          Lihat checksum SHA-256
        </a>
      </div>

      <div className="download-extras">
        <details>
          <summary>
            Alternatif pemasangan melalui npm
          </summary>

          <p>
            Untuk pengguna Node.js 22.19–22.x.
            Unduh{" "}
            <a
              href={`${RELEASE}/ubahin-desktop-installer-1.0.0.tgz`}
              download
            >
              paket bridge npm
            </a>{" "}
            dan installer di atas ke folder yang
            sama, lalu jalankan dari folder itu:
          </p>

          <pre>
            <code id="npm-command">
              {NPM_COMMAND}
            </code>
          </pre>

          {canCopy && (
            <button
              type="button"
              className="copy"
              id="copy-command"
              onClick={copyCommand}
            >
              Salin perintah
            </button>
          )}

          <span id="copy-status" role="status">
            {copyStatus}
          </span>

          <p>
            Bridge memverifikasi installer dan
            membuka wizard Windows. Konversi tetap
            melalui GUI. Belum ada paket registry
            publik. Menghapus paket npm tidak
            menghapus aplikasi desktop.
          </p>
        </details>

        <details>
          <summary>
            Lisensi &amp; sumber komponen pihak ketiga
          </summary>

          <p>
            Ubahin gratis dipakai dan dibagikan;
            kode asli aplikasi tetap privat.
            Hak komponen pihak ketiga mengikuti
            lisensinya sendiri.
          </p>

          <ul>
            <li>
              <a href={`${RELEASE}/LICENSE.txt`}>
                Izin penggunaan Ubahin
              </a>
            </li>

            <li>
              <a
                href={`${RELEASE}/THIRD-PARTY-NOTICES.md`}
              >
                Notices komponen pihak ketiga
              </a>
            </li>

            <li>
              <a
                href={`${RELEASE}/THIRD-PARTY-SOURCES.txt`}
              >
                Petunjuk sumber dan rebuild
              </a>
            </li>

            <li>
              <a href={RELEASE_PAGE}>
                Sumber komponen pihak ketiga
                (2 bagian, total 2,13 GiB)
              </a>
            </li>
          </ul>

          <p>
            Kamu cukup mengunduh installer untuk
            memakai Ubahin. Jika membagikannya
            kembali, sediakan juga izin, notices,
            checksum, dan tautan arsip sumber di
            halaman rilis yang sama. Petunjuk
            penyatuan arsip sumber disertakan
            pada rilis.
          </p>
        </details>
      </div>
    </section>
  );
}
