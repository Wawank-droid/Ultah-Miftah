window.addEventListener("load", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopup");
  const popup1 = document.getElementById("popup1");
  const tapArea = document.getElementById("tapToBlow");

  // 🎊 Warna konfeti
  const colors = ['#bb0000', '#ffffff'];

  // 🎉 Status konfeti
  let confettiActive = true;

  
  popup1.classList.add("hidden");
  
  // Fungsi animasi konfeti berulang
  function frame() {
    if (!confettiActive) return; // kalau sudah ditutup → stop
    
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
    
    requestAnimationFrame(frame);
  }
  function resetSVG() {
    const oldSVG = document.getElementById("cake");
    
    const newSVG = oldSVG.cloneNode(true); // copy svg baru
    oldSVG.replaceWith(newSVG);            // ganti SVG lama → animasi reset
  }
  
  // 🔥 Tampilkan popup dan mulai konfeti
  popup.classList.remove("hidden");
  frame(); // mulai animasi konfeti
  
  // 🚫 Tutup popup → hentikan konfeti
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    popup1.classList.remove("hidden");
    resetSVG();
    confettiActive = false;
    setTimeout(() => {
      tapArea.classList.add("tap-show");
    }, 8000);
    
    tapArea.addEventListener("click", () => {
      tiupLilin();
      setTimeout(() => {
        popup2.classList.remove("hidden");
        popup1.classList.add("hidden");
        }, 1000);
        
        tapArea.classList.remove("tap-show");
    });
    
    function tiupLilin() {
      
      // 1. Mulai confetti
      confettiActive = true;
      frame(); // mulai loop
      
      // 2. Padamkan api
      document.querySelectorAll(".fuego").forEach(f => {
        f.classList.add("mati");   // → fade-out 1 detik
      });
      
      // 3. Stop confetti setelah 5 detik
      setTimeout(() => {
        confettiActive = false;
        }, 2000);
      }
    });

    const popup3 = document.getElementById("popup3");
    const nextbtn = document.getElementById("next");

    nextbtn.addEventListener("click", () => {
      popup2.classList.add("hidden");
      popup3.classList.remove("hidden");
    });

    const popup4 = document.getElementById("popup4");
    const popup5 = document.getElementById("popup5");
    const nextbtn2 = document.getElementById("next2");
    const nextbtn3 = document.getElementById("next3");

    nextbtn2.addEventListener("click", () => {
      popup3.classList.add("hidden");
      popup4.classList.remove("hidden");
    });

    nextbtn3.addEventListener("click", () => {
      popup4.classList.add("hidden");
      popup5.classList.remove("hidden");
    });



  
});