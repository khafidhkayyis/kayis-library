// function adalah kunci utama pada javascript
// yang membbuat javascript sangat powerfull

// hanya dengan function kalian bisa melakukan
// - method
// - class
// - constructor
// - module

// devinisi function
// - sebuah sub-program / sub-routine yang dapat
// dipanggil di bagian lain pada program.
// - merupakan struktur dasar pembentukan dari javascript
// - disebut juga sebagai prosedur (kumpulan statement untuk
// melakukan tugas atau menghitung sebuah nilai)
// - untuk dapat menggunakannya, kita harus membuat terlebih
// dahulu function tersebut, lalu memanggilnya
// - termasuk kedalam first-class object

// mengapa kita harus menggunakan function?
// - reusability (DRY: Do not Reapeat Yourself)
// penggunakan kembali kode yang kita buat , dari pada kita
// menulis program secara berulang lebih baik kita
// membuat 1 block program yang nantinya bisa kita panggil
// secara berulang

// - Dekomposisi / Abstraksi
// untuk menyembunyikan kompleksitas program yang kita buat,
// nantinya kita pecah-pecah

// - Modularitas
// ketika kita menyembunyikan kompleksitasnya dengan membuat
// program kita menjadi sub modul, yang nantinya mempermudah
// mencari kesalahan ketika dbading

// katagori function berdasarkan pembuatannya
// - built- in function
// function yang sudah disediakan oleh javascript(kita tinggal pakai)
// contoh : -alert();, confirm();, prompt();
// dan masih banyak lagi

// built-in function : String
// chart(), slice(), split(), toString(), toLowerCase(), toUpperCase().
// lebih lengkapnya bisa cek di W3schools

// builtin function:Math
// sin(), cos(), tan(), random(), round(), floor(),
// ceil(), log()
// lebih lengkapnya bisa cek di w3school

// - user-defined function
// function yang kita buat sendiri
// menggunakan keyword functionnama function (optional)
// parameter /argumen
//     -disimpan didalam ()
//     -boleh ada atau tidak, jika ada boleh lebih dari statusbar
//     -dipisahkan oleh koma (,)
// function body, dibungkus dengan {}

// membuat user-defined function
//     -dengan deklarasi/ function declaration
//     -dengan ekspresi/ function expression

// function declaration
// function jumlahDuaBilangan(a, b){
//     var total ;
//     total= a+ b;

//     return total;
// }

// function expression
// var jumlahDuaBilangan= function(a, b){
//     var total;
//     total = a + b;

//     return total;
// }

// memanggil/ menjalankan function
// alert(jumlahDuaBilangan(1,2));
// alert(jumlahDuaBilangan(25,30));
// alert(jumlahDuaBilangan(1500,17,5));
// contoh kita memanggilnya menggunakan alert kita panggil nama functionnya
// dan bisa kita tambahkan parameternya, jika di perlukan.
// dan bisa memanggilnya sekaligus atau berulang- ulang
