//Module, metode untuk mengisolasi file secara terpisah dengan menggunakan import untuk memanggil variabel dari file lain dan export untuk mengekspor variabel

//mengimport variabel, object, dan function dari file export.js
import salam, { name as nick, people as person } from "./export.js";

console.log(nick);
console.log(person);
salam(person.nama);

// Pada materi yang diberikan, bahwa penggunaan module dilakukan dengan menambahkan type="module" pada tag script
// dan berhasil memang run di browser, tetapi kalau dijalankan di terminal dengan node js, akan ada error.
// Oleh karena itu, kami coba inisialisasi project kami dengan npm kemudian menambahkan type="module" didalam package.json
