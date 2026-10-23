import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAV62J2H5Q4_3OKN1LBz9Rx0x19Li_6DSY",
  authDomain: "ecotrack-7f330.firebaseapp.com",
  databaseURL: "https://ecotrack-7f330-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecotrack-7f330",
  storageBucket: "ecotrack-7f330.firebasestorage.app",
  messagingSenderId: "382728159610",
  appId: "1:382728159610:web:64fed587c881f55358d6c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const CATEGORIES = ["Sampah menumpuk","Selokan tersumbat","Pencemaran air","Pencemaran udara","Kerusakan ruang hijau"];
export const STATUSES = ["Menunggu Verifikasi","Diverifikasi","Ditolak","Sedang Ditangani","Selesai"];
