    /* ================= HALAMAN UTAMA (index.html) ================= */
import { ref, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { db } from "./firebase.js";

/* ================= HALAMAN UTAMA (content.html) ================= */

const comment = document.getElementById("comment") || null;
const kirim = document.getElementById("sendBtn") || null;
const notif = document.getElementById("notif") || null;

if (kirim && comment && notif) {

    kirim.addEventListener("click", () => {
        const text = comment.value.trim();
        if (!text) return;

        const now = new Date();
        const tanggal = now.toLocaleDateString("id-ID");
        const waktu = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

        // Kirim ke Firebase Realtime Database
        push(ref(db, "comments"), {
            isi: text,
            tanggal: tanggal,
            waktu: waktu
        });

        // Notifikasi
        notif.textContent = "Komentar terkirim ✔";
        notif.classList.remove("hidden");
        notif.classList.add("show");
        setTimeout(() => notif.classList.add("hidden"), 2000);

        comment.value = "";
    });

};
