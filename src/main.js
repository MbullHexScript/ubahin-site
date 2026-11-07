const themeButton = document.querySelector("#theme");
const preference = window.matchMedia("(prefers-color-scheme: dark)");
let selectedTheme;
try {
  selectedTheme = localStorage.getItem("ubahin-site-theme");
} catch {
  /* Storage may be unavailable. */
}
function applyTheme() {
  const dark =
    selectedTheme === "dark" ||
    (selectedTheme !== "light" && preference.matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  themeButton.setAttribute(
    "aria-label",
    dark ? "Gunakan tema terang" : "Gunakan tema gelap",
  );
  document.querySelector('meta[name="theme-color"]').content = dark
    ? "#111827"
    : "#f7f9fc";
}
applyTheme();
themeButton.hidden = false;
preference.addEventListener("change", applyTheme);
themeButton.addEventListener("click", () => {
  selectedTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("ubahin-site-theme", selectedTheme);
  } catch {
    /* Theme still works for this visit. */
  }
  applyTheme();
});
const copyButton = document.querySelector("#copy-command");
if (navigator.clipboard?.writeText) copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(
      document.querySelector("#npm-command").textContent,
    );
    status.textContent = "Perintah disalin.";
  } catch {
    status.textContent =
      "Tidak bisa menyalin otomatis. Pilih teks perintah, lalu salin secara manual.";
  }
});
