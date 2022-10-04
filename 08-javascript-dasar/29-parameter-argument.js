// parameter adalah bahan baku atau material yang bisa kita gunakan
// di function

// devinisi parameter
// adalah variabel yang ditulis didalam kurung () pada saat function dibuat, digunakan
// untuk menampung nilai yang dikirimkan saat functin dipanggil.

// argument
// adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil

// contoh parameter dan argument

// function tambah(a, b) {
//   return a + b;
// }
// yang didalam kurung berisi a, b itu parameter

// var coba = tambah(5, 10);
// yang didalam kurung berisi 5, 10 itu argument

// argumen bisa juga opsional bisa disisi oleh user, menggunakan popup
// function tambah(a, b) {
//   return a + b;
// }

// var a = prompt("masukan nilai 1 :");
// var b = prompt("masukan nilai 2 :");
// var hasil = tambah(a, b);
// console.log(hasil);

// jika kita memasukan nilai a 1 dan nilai b 1 hasilnya akan 11 karna nilai yang
// kita masukan berbentuk String kita harus mengubahnya menjadi interger

// function tambah(a, b) {
//   return a + b;
// }

// var a = parseInt(prompt("masukan nilai 1 :"));
// var b = parseInt(prompt("masukan nilai 2 :"));
// var hasil = tambah(a, b);
// console.log(hasil);

// bisa juga kita memasukan operasi matematik

// function tambah(a, b) {
//   return a + b;
// }

// var a = parseInt(prompt("masukan nilai 1 :"));
// var b = parseInt(prompt("masukan nilai 2 :"));
// var hasil = tambah(a * 2, b * 2);
// console.log(hasil);

// contoh yang diatas adalah argumen menggunakan expresi

// kita bisa memasukan argumennya function juga

// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }

// var hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);

// jadi sebelum masuk ke function kali yang di kerjakan adalah yang di dalam
// kurung yaitu pertambahan

// ada pertanyaan "bagaimana jika parameter dan argumennya tidak sesuai"?
// contoh parameternya ada 3 sedangkan argumennya ada 2 atau sebaliknya

// jawaban
// jika parameter lebih sedikit dari argument maka argument kelebihannya
// akan diabaikan

// contoh:
// function tambah(a, b) {
//   return a + b;
// }

// var coba = tambah(5, 10, 20);
// maka nilai argument 20 akan diabaikan

// jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi
// dengan nilai undefined

// contoh:
// function tambah(a, b, c) {
//   return a + b;
// }

// var coba = tambah(5, 10,);
// nilai dari parameter c adalah undefined

// di dalam javascrips ada variabel yang namanya arguments yaitu array
// yang berisi nilai yang dikirimkan saat fungsi dipanggil biasa disebut
// sudo variabel atau variabel semu tidak kelihatan tapi ada

// contoh argument
// tambah(5,10,20,"hi",false);

// contoh arguments
// arguments= [5,10,20,"hi",false];
// masing2 nilai ini disebut index

// contoh;
// function tambah() {
//   return arguments;
// }

// var coba = tambah(5, 10, 20, "hi", false);
// console.log(coba);

// jadi walupun parameternya tidak ada jika kita me return
// arguments maka nilai yang ada di argument akan muncul
// berbentuk index

//  contoh sudo variabel arguments yang ada di function javascript

// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     // hasil = hasil + arguments[i];
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var coba = tambah(1, 2, 3);
// console.log(coba);
