// // Ada 2 bahasa pemograman yang memiliki 2 konsep yaitu
// // block scope vs function scope

// // block scope = biasa digunakan oleh bahasa C dan JAVA

// // int i = 2;

// // if( i % 2 == 0){
// //     bool genap = true ;
// // }

// // if (genap){
// //     printf("genap!");
// // }
// //  disini  kita menjalan kan sebuah program sederhana dr bahasa C
// //  ada varabel i kemudian ada if didalamnya ada variabel baru
// //  kemudian di bawahnya ada if lagi didalmnya dia memanggil variabel
// //  yang di dalam if sebelumnya yaitu genap, apa kah berhasil dikarnakan nilainya true?

// //  jawabannya error : 'genap' is undeclared

// // dikarnakan variabel baru yaitu genap yang dibuat didalam if yg pertama itu
// // berlaku hanya di dalam if tersebut yg bisa di sebut block scope, jadi
// // variabel genap itu tidak bisa digunakan diluar

// // jika program dalam javascript

// // var i = 2;

// // if (i % 2 == 0) {
// //   var genap = true;
// // }

// // if (genap) {
// //   console.log("genap");
// // }

// // ini hasilnya di console akan muncul genap, mengapa ? karana didalam
// // javascript tidak menganut block scope akan tetapi menganut function scope

// // function scope

// // global scope / window scope

// // var a = 1;

// // function tes() {
// //   var b = 2;
// // }

// // tes();
// // console.log(b);

// // maka ketika di jalankan di console akan bertuliskan
// // b is not defined
// // dikarnakan variabel b itu didalam function
// // beda lagi kasusnya jika console nya di dalam function

// // var a = 1;

// // function tes() {
// //   var b = 2;
// //   console.log(b);
// // }

// // tes();

// // tentu saja skrang akan tampil 2 di console dikarnakan kita bisa mengakses
// // variabel b di dlm function

// // bagaimana jika consolenya saya ubah menjadi a apa yg terjadi

// // var a = 1;

// // function tes() {
// //   var b = 2;
// //   console.log(a);
// // }

// // tes();

// // maka hasilnya akan muncul 1 karna kita bisa mengakses variabel global didalam
// // function akan tetapi kita gabisa mengakses variabel local jika di panggil dari global

// // ibaratkan ada kaca filem mobil kita bisa melihat dari dalam keluar, akan tetapi
// // orang yang dari luar tidak bisa melihat kedalam

// // contoh

// // var a = 1;

// // function tes() {
// //   var b = 2;
// //   console.log(a); // dalam function bisa mengintip variabel global
// // }

// // tes();
// // console.log(b); // dari global tidak bisa melihat variabel local

// // contoh kasus lagi bagaimana jika variabel global dan local itu sama

// var a = 1;

// function tes(){
//     var a =2;
// }

// tes();
// console.log(a);

// yg terjadi akan muncul angka 1 walupun variabelnya sama a yang didalam local tidak
// akan menimpa a yang di global ,

// contoh yang menimpa variabel global

// var a = 1;
// var a = 2;

// function tes(){
//     var a =2;
// }

// tes();
// console.log(a);

// jika ingin mengakses variabel global didalam function contohnya seperti

// var a = 1;
// var a = 2;

// function tes(){
//     var a =2;
//     console.log(window.a);
// }

// tes();

// jika kita hapus keyword varnya apa yang terjadi?

// var a = 1;

// function tes(){
//     a =2;
// }

// tes();
// console.log(a);

// yang terjadi hasilnya di console log 2

// bagaimana variabelnya var global saya hapus?

// function tes(){
//     a =2;
// }

// tes();
// console.log(a);

// yang terjadi nilainya tetap 2 tetapi a yang di dalm function akan mengecek
// keluar function ada keyword var a tidak jika tidak dia kan
// membuat var sendiri sehingga tampilannya sperti ini

// var a;

// function tes(){
//     a =2;
// }

// tes();
// console.log(a);

// sehingga a yang didalam function adalah a global bukan a local

// agar tidak terjadi seperti itu kita buat deklarasi varnya di dalam
// function

// function tes(){
//     var a;
//     a =2;
// }

// tes();
// console.log(a);

// cara lain untuk mengatasinya adalah dengan use strict

// "use strict";

// function tes (){
//     a= 2;
// }

// tes();
// console.log(a);

// yg nantinya javascript akan menggunakan mode strict artinya
// ketika kalian menulis use strict maka javascript akan mengerti
// dan akan membuat variabel di local

// jika ada kasus seperti ini apa yg terjadi

// var a = 1;
// function tes(a){
//     console.log(a);
// }

// tes(2);

// hasilnya adalah2
// penjelasannya dikarnakan argument akan selamanya menjadi local
// yg menjadi parameter function

// var a = 1;
// function tes(a){
//     console.log(a);
// }

// tes(2);
// console.log(a);

// jika seperti ini akan muculnya 1 dikarnakan mengarah ke global variabel

// jika kasusnya argumen parameter kita ganti a

// var a = 1;
// function tes(a){
//     console.log(a);
// }

// tes(a);
// console.log(a);

// hasilnya satu ketika di console ada 2 hasil
// 1 di global dan 1 di local
