
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | null;

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("ubahin-site-theme");
      return saved === "light" || saved === "dark"
        ? saved
        : null;
    } catch {
      return null;
    }
  });

  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const isDark = theme === null ? systemDark : theme === "dark";

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setSystemDark(event.matches);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark
      ? "dark"
      : "light";

    const themeMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    );

    if (themeMeta) {
      themeMeta.content = isDark ? "#111827" : "#f7f9fc";
    }
  }, [isDark]);

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    setTheme(next);

    try {
      localStorage.setItem("ubahin-site-theme", next);
    } catch {
      // Tema tetap berfungsi selama sesi berlangsung.
    }
  }

  return (
    <>
      <a className="skip" href="#utama">
        Lewati ke konten
      </a>

      <header className="header">
        <a
          className="wordmark"
          href="#utama"
          aria-label="Ubahin, beranda"
        >
          <img
            src="/assets/mark.svg"
            width="36"
            height="36"
            alt=""
          />
          ubahin<span className="brand-dot">.</span>
        </a>

        <nav aria-label="Navigasi utama">
          <a href="#format">Format</a>
          <a href="#panduan">Panduan</a>
          <a href="#rilis">Catatan rilis</a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Gunakan tema terang"
                : "Gunakan tema gelap"
            }
            title="Ganti tema"
          >
            <span aria-hidden="true">◐</span>
          </button>

          <a className="button small" href="#unduh">
            Unduh gratis
          </a>
        </div>
      </header>
    </>
  );
}
