
const steps = [
  {
    number: 1,
    title: "Tambahkan file",
    description:
      "Tarik ke aplikasi, pilih beberapa file, atau tambahkan satu folder.",
  },
  {
    number: 2,
    title: "Pilih format tujuan",
    description:
      "Atur format dan mutu tiap kategori, lalu pilih folder hasil.",
  },
  {
    number: 3,
    title: "Ubahin, lalu buka hasil",
    description:
      "Pantau antrean, batalkan jika perlu, atau ulangi file yang gagal.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="how section"
      id="panduan"
      aria-labelledby="how-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <h2 id="how-title">
            Dari file ke hasil,
            <br />
            tanpa berbelit.
          </h2>

          <a
            className="text-link"
            href="https://github.com/MbullHexScript/ubahin-site/releases/download/v1.0.0/PANDUAN-1.0.md"
            download
          >
            Unduh panduan lengkap
          </a>
        </div>

        <ol className="steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="step-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
