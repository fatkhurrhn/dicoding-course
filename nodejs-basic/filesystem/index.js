// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs'); // Mengimpor modul fs

fs.readFile('notes.txt', 'utf8', (err, data) => { // Membaca isi file notes.txt
  if (err) {
    console.error('Error reading file:', err); // Menangani kesalahan
    return;
  }
  console.log(data); // Menampilkan isi file di console
});
