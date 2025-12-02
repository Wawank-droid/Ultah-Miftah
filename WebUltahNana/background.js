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

window.addEventListener("load", () => {
    const popup1 = document.getElementById("popup1");
    const popup2 = document.getElementById("popup2");
    const popup3 = document.getElementById("popup3");
    const popup4 = document.getElementById("popup4");
    const popup5 = document.getElementById("popup5");

    popup1.classList.add("hidden");

});