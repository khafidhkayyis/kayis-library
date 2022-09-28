// cara kerja function
// -input
//     masukan bahan/ material kedalam function
// -function
//     lakukan sesuatu terhadap bahan/ material tadi
// -output
//     menghasilkan sesuat

// function yang baik hanya mengerjakan 1 hal saja

// dengan function
// -blok kode yang dibuat untuk melakukan tugas spesifik
// -dapat dipanggil secara berulang
// -mempermudah penelusuran jika terjadi error
// -reusability (penggunaan ulang dari program kita)

// sekarang kita mengerjakan study kasus menjumlahkan volume
// 2buah kubus
// cek algoritmanya
// 1. ketahui sisi masing2 kubus
// 2. hitung volume masing2
// 3. jumlahkan hasilnya
// 4. kembalikan nilai jwabannya

// jika tidak menggunakan function
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;
// console.log(total);

// jika kita menambah kubus c maka kita harus menulis ulang spserti
// contoh yang diatas maka disini bergunalah yang namanya function

// flow dalam penggunaan function
// 1. kita menullis keyword function untuk memberitau interpreter
// javascript bahwa kita akan memulai menuliskan sebuah fungsi
// 2. bungkus functio dengan kurung kurawal {}, untuk menandai awal dan akhir
// 3. beri nama function yang menjelaskan apa yanga akan dilakukan namanya agak panjang tidak apa2
// 4. selalu tuliskan kurang untuk menyimpan parameter/ argumen/ bahan baku
// untuk nantinya digunakan dalam function yang nantinya akan digunakan di dalam kurung kurawal {}
// 5. parameter/ argumen
//     - daa yang dikirim dari luar saat pemanggilan function,
//     untuk digunakan didalam function
//     - anggap sebagai variabel khusus untuk function
//     - optional, boleh ada atau tidak
//     - jika tidak ada kosongkan, tapi kurung harusa tetap ditulis
//     - jika ada, boleh sebanyak mungkin sesuai kebutuhan
// 6. sebuah function biasanya mengembalikan sebuah nilai
// 7. menggunakan keyword return, lalu diikutin dengan nilai kembalinya
// 8. kegunaannya adalah untuk memberitau interpreter bahwa kita telah selesai mengerjakan sesuatu
// dan 'inilah hasilnya'
// 9. setelah sampai pada keyword return, function akan berhenti berjalan

// kasus menghitung volume kubus jika menggunakan function maka seperti ini

// ini membuat function
function jumlahVolumeDuaKubus(a, b) {
  var total, volumeA, volumeB;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}

// ini menjalankan function
// jumlahVolumeDuaKubus(8, 3);
console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(10, 3));

// jika ingin menggunakan alert tinggal ganti saja console nya
