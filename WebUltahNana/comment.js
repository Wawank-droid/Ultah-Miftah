import { ref, onValue, remove } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { db } from "./firebase.js";

const list = document.getElementById("adminList");

onValue(ref(db, "comments"), (snapshot) => {
    list.innerHTML = "";
    snapshot.forEach((child) => {
        const data = child.val();
        const key = child.key;

        const li = document.createElement("li");
        li.innerHTML = `
            <p>${data.isi}</p>
            <small>${data.tanggal} • ${data.waktu}</small>
            <button data-id="${key}">Hapus</button>
        `;
        list.appendChild(li);
    });

    // add listener delete
    document.querySelectorAll("button[data-id]").forEach(btn => {
        btn.onclick = () => {
            const id = btn.getAttribute("data-id");
            remove(ref(db, "comments/" + id));
        };
    });
});
