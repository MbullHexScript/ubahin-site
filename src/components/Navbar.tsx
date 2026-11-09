
import { useEffect, useRef, useState } from "react";
import logoUrl from "../assets/mark.svg";
import "./Navbar.css";

type ThemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "ubahin-site-theme";

const navItems = [
  { label: "Format", id: "format" },
  { label: "Panduan", id: "panduan" },
  { label: "Catatan rilis", id: "rilis" },
];

function getInitialTheme(): ThemePreference {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Storage mungkin tidak tersedia.
  }

  return "system";
}

function getSystemDark() {
  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
}

export default function Navbar() {
  const shellRef = useRef<HTMLElement>(null);

  const [theme, setTheme] =
    useState<ThemePreference>(getInitialTheme);

  const [systemDark, setSystemDark] =
    useState(getSystemDark);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] =
    useState<string | null>(null);

  const isDark =
    theme === "system"
      ? systemDark
      : theme === "dark";

  // Ikuti perubahan tema sistem.
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = () => {
      setSystemDark(media.matches);
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  // Pertahankan sistem tema Ubahin lama.
  useEffect(() => {
    document.documentElement.dataset.theme =
      isDark ? "dark" : "light";

    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    );

    if (meta) {
      meta.content = isDark ? "#111827" : "#f7f9fc";
    }
  }, [isDark]);

  function toggleTheme() {
    const next = isDark ? "light" : "dark";

    setTheme(next);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Tema tetap berubah meski storage gagal.
    }
  }

  // Efek kaca saat scroll dan indikator section.
  useEffect(() => {
    const updateNavigation = () => {
      setScrolled(window.scrollY > 20);

      let current: string | null = null;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (
          section &&
          section.getBoundingClientRect().top <= 170
        ) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    updateNavigation();

    window.addEventListener("scroll", updateNavigation, {
      passive: true,
    });
    window.addEventListener("resize", updateNavigation);

    return () => {
      window.removeEventListener(
        "scroll",
        updateNavigation
      );
      window.removeEventListener(
        "resize",
        updateNavigation
      );
    };
  }, []);

  // Tutup menu dengan Escape atau klik di luar navbar.
  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        !shellRef.current?.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 920) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
      document.removeEventListener(
        "keydown",
        handleEscape
      );
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip ub-nav-skip" href="#utama">
        Lewati ke konten
      </a>

      <header
        ref={shellRef}
        className={`ub-nav-shell ${
          scrolled ? "ub-nav-scrolled" : ""
        }`}
      >
        <div className="ub-nav-bar">
          <a
            className="ub-nav-brand"
            href="#utama"
            aria-label="Ubahin, kembali ke beranda"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logoUrl}
              width={36}
              height={36}
              alt=""
            />

            <span className="ub-nav-brand-name">
              ubahin<span>.</span>
            </span>
          </a>

          <nav
            className="ub-nav-desktop"
            aria-label="Navigasi utama"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                className="ub-nav-link"
                href={`#${item.id}`}
                aria-current={
                  activeSection === item.id
                    ? "location"
                    : undefined
                }
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="ub-nav-actions">
            <button
              className="ub-nav-icon-button"
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark
                  ? "Gunakan tema terang"
                  : "Gunakan tema gelap"
              }
              title={
                isDark ? "Tema terang" : "Tema gelap"
              }
            >
              {isDark ? (
                <svg
                  className="ub-nav-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              ) : (
                <svg
                  className="ub-nav-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
                </svg>
              )}
            </button>

            <a
              className="ub-nav-cta"
              href="#unduh"
              onClick={() => setMenuOpen(false)}
            >
              <span className="ub-nav-cta-long">
                Unduh gratis
              </span>
              <span className="ub-nav-cta-short">
                Unduh
              </span>
            </a>

            <button
              type="button"
              className="ub-nav-icon-button ub-nav-menu-button"
              aria-label={
                menuOpen ? "Tutup menu" : "Buka menu"
              }
              aria-expanded={menuOpen}
              aria-controls="ub-nav-mobile"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg
                  className="ub-nav-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              ) : (
                <svg
                  className="ub-nav-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav
          id="ub-nav-mobile"
          className="ub-nav-mobile"
          aria-label="Navigasi mobile"
          hidden={!menuOpen}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="ub-nav-mobile-link"
              aria-current={
                activeSection === item.id
                  ? "location"
                  : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
