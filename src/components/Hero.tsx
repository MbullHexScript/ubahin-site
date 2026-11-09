
import { ArrowRight, Download } from "lucide-react";
import appDark from "../assets/ubahin-app-dark.png";
import "./Hero.css";


export default function Hero() {
  return (

        <section
        className="ub-showcase-hero relative overflow-hidden bg-[#060b18] text-white"
        aria-labelledby="hero-title"
        >

      {/* Smooth background, menyatu di belakang navbar */}
      <div

        className="ub-showcase-backdrop pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(
              ellipse 65% 40% at 50% 18%,
              rgba(91, 75, 190, 0.18),
              transparent 85%
            ),
            radial-gradient(
              ellipse 50% 40% at 85% 40%,
              rgba(25, 110, 170, 0.1),
              transparent 85%
            ),
            linear-gradient(
              180deg,
              #101827 0%,
              #080e1d 35%,
              #060b18 100%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-20 pt-10 sm:px-6 sm:pb-24 lg:px-8 lg:pt-14">

        {/* Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <h1
            id="hero-title"
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl"
          >
            Beda format?
            <br />
            <span className="bg-gradient-to-b from-white to-[#bcc8e9] bg-clip-text text-transparent">
              Ubahin aja.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#b6c1d5] sm:text-lg">
            Gambar, PDF, audio, sampai video.
            Ubah berbagai format dalam satu aplikasi,
            langsung di komputer kamu.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#unduh"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              style={{ color: "#111827" }}
            >
              <Download
                size={19}
                color="#111827"
                strokeWidth={2}
              />
              <span style={{ color: "#111827" }}>
                Unduh untuk Windows
              </span>
            </a>

            <a
              href="#panduan"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-white/10"
            >
              Lihat cara pakainya
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Real application showcase */}
        <div className="relative mx-auto mt-16 w-full max-w-6xl sm:mt-20">
          {/* Static subtle glow */}
          <div
            className="pointer-events-none absolute -inset-5 -z-10 rounded-[40px]"
            aria-hidden="true"
            style={{
              background: `
                radial-gradient(
                  ellipse at 50% 50%,
                  rgba(78, 91, 185, 0.16),
                  transparent 75%
                )
              `,
            }}
          />

          {/* Showcase frame */}
          <div className="overflow-hidden rounded-[22px] border border-white/[0.14] bg-[#11192a] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-3 lg:p-4">
            {/* Showcase header */}
            <div className="mb-3 flex items-center justify-between px-2 py-2 text-xs text-[#aebbd2] sm:px-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Ubahin Desktop</span>
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px]">
                v1.0.0
              </span>
            </div>

            {/* Original application screenshot */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101827] sm:rounded-2xl">
              <img
                src={appDark}
                alt="Tampilan asli aplikasi Ubahin Desktop dalam mode gelap, menampilkan menu Konversi dan area pemilihan file."
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
                width={1649}
                height={928}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
