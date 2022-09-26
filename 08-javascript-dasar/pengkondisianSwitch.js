// MENGINGAT PENGGUNAAN ELSE IF
// if (kondisi 1) {
//     aksi 1
// } else if (kondisi 2){
//     aksi 2
// } else if (kondisi 3) {
//     aksi 3
// } else if (kondisi n) {
//     aksi n
// } else {
//     aksi default
// }

// penggunaan switch hanya mempunyai satu kondisi nanti akan
// mengecek hasil dari kondisinya

// switch (ekspresi) {
//     case "nilai 1":
//         aksi 1
//         [break;]
//     case "nilai 2":
//         aksi 2
//         [break;]
//     case "nilai n":
//         aksi n
//         [break;]
//     default:
//         aksi default
//         [break;]
// }

// sebelum masuk ke switch
// perlu dingat soal perbandingan
// jika == operator perbandingan
// jika === operator indentitas

// contoh
// var angka = propt ('masukan angka :');

// if (angka == 1) {
//     alert ('anda memasukan angka 1');
// } else if (angka == 2) {
//     alert ('anda memasukan angka 2');
// }else if (angka == 3) {
//     alert ('anda memasukan angka 3');
// } else if (angka == 4){
//     alert ('anda memasukan angka 4');
// }
// ketika menggunakan == kita masih bisa memasukan angka

// var angka = prompt ('masukan angka :');

// if (angka === 1) {
//     alert ('anda memasukan angka 1');
// } else if (angka === 2) {
//     alert ('anda memasukan angka 2');
// }else if (angka === 3) {
//     alert ('anda memasukan angka 3');
// } else if (angka === 4){
//     alert ('anda memasukan angka 4');
// }
// ketika menggunakan === dia akan mengangkap angka itu sebagai string sedangkan kita
// membandingkannya dengan interger
// - solusinya perbandingannya harus string juga
// - atau var angka = parseInt (prompt ('masukan angka :'));

// kita masuk ke materis switch

// var angka = prompt("masukan angka :");

// switch (angka) {
//   case "1":
//     alert("anda memasukan angka 1");
//     break;
//   case "2":
//     alert("anda memasukan angka 2");
//     break;
//   case "3":
//     alert("anda memasukan angka 3");
//     break;
//   default:
//     alert("angka yang anda masukan salah");
//     break;
// }

// contoh2
var item = prompt(
  "masukan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)"
);

switch (item) {
  case "nasi":
    alert("makanan / minuman SEHAT!");
    break;
  case "daging":
    alert("makanan / minuman SEHAT");
    break;
  case "susu":
    alert("makanan / minuman SEHAT");
    break;
  case "hamburger":
    alert("makanan/ minuman TIDAK SEHAT");
    break;
  case "softdrink":
    alert("makanan/ minuman TIDAK SEHAT");
    break;
  default:
    alert("anda memasukan nama makanan / minuman yang salah");
    break;
}

// - jika kita tidak menggunakan break; maka akan menampilkan alert selanjutnya alias dobble

// cara lain
switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman SEHAT");
    break;
  case "hamburger":
  case "softdrink":
    alert("makanan/ minuman TIDAK SEHAT");
    break;
  default:
    alert("anda memasukan nama makanan / minuman yang salah");
    break;
}
//  - bisa menggunakan katagori seperti ini
