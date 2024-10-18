/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const path = require('path');

// Tentukan file input dan output
const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

// Membuat readable stream dengan highWaterMark 15 karakter
const readableStream = fs.createReadStream(inputFilePath, { encoding: 'utf-8', highWaterMark: 15 });

// Membuat writable stream
const writableStream = fs.createWriteStream(outputFilePath);

readableStream.on('data', (chunk) => {
  // Menulis ulang tiap bagian teks yang dibaca dengan menambahkan baris baru
  writableStream.write(chunk + '\n');
});

readableStream.on('end', () => {
  console.log('Teks berhasil dibaca dan dituliskan ulang pada berkas output.txt');
});

readableStream.on('error', (error) => {
  console.error('Terjadi kesalahan saat membaca berkas:', error);
});

writableStream.on('error', (error) => {
  console.error('Terjadi kesalahan saat menulis berkas:', error);
});
