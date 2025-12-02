// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyAPT3o7WvfTJ0mvbfO6E7gkceVKZfTFj7Y",
    authDomain: "ultah-miftah.firebaseapp.com",
    databaseURL: "https://ultah-miftah-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ultah-miftah",
    storageBucket: "ultah-miftah.firebasestorage.app",
    messagingSenderId: "217507090422",
    appId: "1:217507090422:web:1c8516d920beeeac64c1d7"
  };

// Init Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
