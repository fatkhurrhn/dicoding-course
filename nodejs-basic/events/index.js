// TODO 1
const EventEmitter = require('events'); // Mengimpor variabel EventEmitter dari core module events

// TODO 2
const myEmitter = new EventEmitter(); // Membuat instance dari EventEmitter

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}

// TODO 3
myEmitter.on('birthday', birthdayEventListener); 

// TODO 4
myEmitter.emit('birthday', 'Fathur');
