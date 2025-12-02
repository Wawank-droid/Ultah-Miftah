//background animasi
const numLeaves = 30; // jumlah total objek jatuh
const container = document.body;

// Daftar gambar yang digunakan
const leafImages = ["img/tb1.png", "img/tb2.png", "img/tb3.png"];

for (let i = 0; i < numLeaves; i++) {
  const leaf = document.createElement("img");

  // Pilih gambar acak dari array leafImages
  const randomImage = leafImages[Math.floor(Math.random() * leafImages.length)];
  leaf.src = randomImage;

  leaf.classList.add("falling");

  // Posisi acak (horizontal)
  leaf.style.left = Math.random() * 100 + "vw";

  // Ukuran acak
  const size = 20 + Math.random() * 40;
  leaf.style.width = size + "px";
  leaf.style.height = "auto";

  // Durasi animasi acak
  leaf.style.animationDuration = 8 + Math.random() * 6 + "s";

  // Waktu tunda acak (agar tidak jatuh bersamaan)
  leaf.style.animationDelay = Math.random() * 5 + "s";

  container.appendChild(leaf);
}
//background animasi js end

// 🧩 Logika pertanyaan
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCheck");
  const input = document.getElementById("answer");
  const msg = document.getElementById("errorBox");

  
  btn.addEventListener("click", function() {
    const ans = input.value.trim();

    if (ans === "CINA") {
      window.location.href = "content.html";
    } else {
      // Tampilkan pesan salah
      msg.textContent = "Auu Salah Mko Itu, Nulupa Mi kah?? ";
      msg.classList.remove("hidden");
      msg.classList.add("show");
      
      
      // 🔴 Efek shake di input
      input.classList.add("shake");

      // Hapus efek shake biar bisa diulang lagi
      setTimeout(() => {
        input.classList.remove("shake");
      }, 500);

      // Hilangkan lagi setelah 3 detik
      setTimeout(() => {
        msg.classList.remove("show");
        setTimeout(() => msg.classList.add("hidden"), 500);
      }, 3000);
    }
  });

    // 🎯 Tekan ENTER = klik tombol otomatis
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      btn.click(); // jalankan event klik tombol
    }
  });

});
