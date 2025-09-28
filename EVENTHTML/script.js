// Munculkan elemen saat halaman dimuat
function welcome() {
  alert("Simsalabim muncullah elemen elemen HTML!");
  document.querySelector(".contents").removeAttribute("hidden");

  // Tombol tambah angka
}
document.getElementById("").onclick = increment;
document.body.onload = welcome;

// Tambah angka di span #count
function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenmessage = document.createElement("h4");
    hiddenmessage.innerText = "Selamat anda menemukan hadiah tersembunyi ";

    const image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg"
    );

    const contents = document.querySelector(".contents");
    contents.appendChild(hiddenmessage).appendChild(image);
  }
}
