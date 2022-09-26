// MEMBUAT GAME SUWIT JAWA DENGAN JAVASCRIPT

// dalam sebuah kasus ketika ingin membuat javascript kita fahami
// terlebihdahulu konsepnya (algoritma)

// - menangkap pilihan player
// - menangkap pilihan computer
// - membangkitkan bilangan random
// - menentukan rules
// - tampilkan hasilnya

// var p = prompt("pilih : gajah, semut, orang");
// // - menangkap pilihan player

// var comp = Math.random();

// if (comp < 0.34) {
//   comp = "gajah";
// } else if (comp >= 0.34 && comp < 0.67) {
//   comp = "orang";
// } else {
//   comp = "semut";
// }
// // - menangkap pilihan computer
// // - membangkitkan bilangan random

// var hasil = "";
// // menentukan rules
// if (p == comp) {
//   hasil = "seri";
// } else if (p == "gajah") {
//   // if (comp == 'orang'){
//   //     hasil = 'menang';
//   // }else {
//   //     hasil = 'kalah';
//   // }
//   // kita bisa menggunakan metode tenary
//   hasil = comp == "orang" ? "menang" : "kalah";
// } else if (p == "orang") {
//   hasil = comp == "gajah" ? "kalah" : "menang";
// } else if (p == "semut") {
//   hasil = comp == "orang" ? "kalah" : "menang";
// } else {
//   hasil = "anda memasukan pilihan yang salah";
// }

// // tampilkan hasilnya
// alert(
//   "kamu memilih :" +
//     p +
//     "dan computer memilih :" +
//     comp +
//     "\nMaka hasilnya : kamu" +
//     hasil
// );

// disini kita perlu mereload untuk memulainya kembali, sekrang kita tambahkan looping agar tidak perlu
// menekan XMLHttpRequestUpload, kita bungkus semuanya menggunakan while

var tanya = true;
while (tanya) {
  var p = prompt("pilih : gajah, semut, orang");

  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";

  if (p == comp) {
    hasil = "seri";
  } else if (p == "gajah") {
    // if (comp == 'orang'){
    //     hasil = 'menang';
    // }else {
    //     hasil = 'kalah';
    // }
    // kita bisa menggunakan metode tenary
    hasil = comp == "orang" ? "menang" : "kalah";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "kalah" : "menang";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "kalah" : "menang";
  } else {
    hasil = "anda memasukan pilihan yang salah";
  }

  alert(
    "kamu memilih :" +
      p +
      "dan computer memilih :" +
      comp +
      "\nMaka hasilnya : kamu" +
      hasil
  );

  tanya = confirm("bermain lagi");
}

alert("terimakasih");
