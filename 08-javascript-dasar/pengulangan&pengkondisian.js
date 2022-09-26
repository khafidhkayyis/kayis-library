// PENGULANGAN & PENGKONDISIAN BERSARANG PADA JAVASCRIPT

// sekarang kita ingin menampilkan * di console sebanyak 5x

// s += '*'; adalah s = s + '*';

// var s = "";
// for (var i = 0; i < 5; i++) {
//   s += "*";
// }
// console.log(s);

// hasilnya bintang akan tampil secara horizontal,
// skrang kita jadikan * nya menjadi vertikal

// var s = "";
// for (var i = 0; i < 5; i++) {
//   s += "*";
//   s += "\n";
// }
// console.log(s);

// skrang kita ingin masing2 baris membunyai 5 bintang

var s = "";
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// skrang saya ingin mempunyai 10 baris masing2 memiliki 7 bintang

var s = "";
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 7; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// sekrang saya ingin mempunyai bintang sesuai barisnya

var s = "";
for (var i = 0; i < 10; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// sekarang saya ingin kebalikannya

var s = "";
for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
