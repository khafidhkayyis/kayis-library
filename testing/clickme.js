var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

function hello() {
  hasil.innerHTML = "hello javascript";
}

tombol.addEventListener("click", hello);
