// materi kali ini kita kan membuat kodingan kita menjadi lebih efisien/
// bisa di sebut REFACTORING

// REFACTORING = sebuah proses mengubah kode agar menjadi lebih baik
// tampa mengubah fungsionalitasnya

// kenapa?

// 1. Readability = keterbacaan sebuah program, progam yang baik bisa dibaca
// oleh sendiri dan orang lain
// 2. DRY (Don't Reapeat Yourself) = dupplikasi kode penggunaan
// variabel berlebihan, effisiensi penggunaakn function dan method
// 3. Testability = penulisan kode krtika melakukan pengujian
// 4. Performance = bagaimana cara penulisan untuk meningkatkan performance
// dari programnya contoh meluping dan menggunakan tipe data yang tepat atau pengolakasian memory yg efektif
// 5. Maintainability = bagaimana progaram dapat mudah di kelola dan di kembangkan

// kali ini kita tidak membahas semuanya hanya akan memberi contoh penggunaan
// refactoring

// disini ada penjumlahan perhitungan volume kubus yang pernah dibuat sebelumnya

function jumlahVolumeDuaKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}

alert(jumlahVolumeDuaKubus(8, 3));

// dalam progam diatas tidak ada masalah sudah berjalan dengan normal
// akan teteapi bisa kita buat lebih efisien
// disini kita terlalu banyak menggunakan variabel

function jumlahVolumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(8, 3));

// ini adalah contoh refactoring sederhana
