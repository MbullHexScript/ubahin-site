
const questions = [
  {
    question: "Apakah file saya dikirim ke internet?",
    answer:
      "Tidak. Aplikasi desktop mengonversi file secara lokal, tanpa akun dan tanpa unggahan. Internet mungkin diperlukan saat memasang WebView2 yang belum tersedia.",
  },
  {
    question: "Apakah bisa mengubah semua format?",
    answer:
      "Belum. Format dan codec yang didukung tercantum di bagian Format. File terenkripsi, macro Office, format lama DOC/XLS/PPT, dan beberapa isi dokumen aktif ditolak. Ubahin memberi alasan ketika file tidak dapat diproses.",
  },
  {
    question: "Bagaimana dengan Windows 10 dan ARM?",
    answer:
      "Rilis pertama diuji untuk Windows 11 x64. Windows 10 dan ARM64 belum diklaim teruji atau didukung.",
  },
  {
    question: "Bagaimana memperbarui atau menghapus aplikasi?",
    answer:
      "Pasang pembaruan dari installer baru yang dibagikan pengembang. Belum ada update otomatis. Untuk menghapus, buka Pengaturan Windows → Aplikasi → Ubahin. Simpan hasil konversi di folder milikmu dan perhatikan pilihan hapus data di wizard.",
  },
  {
    question: "Ada file yang gagal dikonversi?",
    answer:
      "Catat versi Ubahin, langkah kejadian, format, dan pesan kesalahannya saat melapor ke pengembang di komunitas tempat kamu mendapatkan aplikasi. Gunakan file contoh sintetis, bukan dokumen pribadi.",
  },
];

export default function FAQ() {
  return (
    <section
      className="help wrap section"
      aria-labelledby="help-title"
    >
      <div>
        <h2 id="help-title">
          Ada yang ingin
          <br />
          kamu tahu?
        </h2>

        <p>Hal kecil sebelum mulai.</p>
      </div>

      <div className="faq">
        {questions.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
