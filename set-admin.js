// Jalankan di KOMPUTER ANDA (bukan di hosting): node set-admin.js email@admin.com
const admin = require("firebase-admin");
admin.initializeApp({ credential: admin.credential.cert(require("./serviceAccountKey.json")) });
admin.auth().getUserByEmail(process.argv[2])
  .then(u => admin.auth().setCustomUserClaims(u.uid, { admin: true }))
  .then(() => { console.log("Berhasil: akun ini sekarang admin."); process.exit(0); })
  .catch(e => { console.error(e.message); process.exit(1); });
