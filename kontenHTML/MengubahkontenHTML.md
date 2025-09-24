Menyesuaikan ukuran gambar yang terlalu kecil.

1.  const gambar = document.getElementById('gambar');
2.  gambar.setAttribute('width', 300);
    gambar.setAttribute('height', 215);

Menonaktifkan button ke-4 (Play (Coming Soon)).

1. kita tidak bisa mengakses tombol Play Coming Soon melalui method getElementById() karena elemen ini tidak memiliki atribut id yang unik
2. const buttons = document.querySelectorAll('.button');
3. Karena tombol yang kita tuju adalah tombol ke-4 (pada array buttons terletak pada indeks ke-3), cara mengaksesnya seperti berikut.
   const playButton = buttons[3];
4. Kita baru hanya mendapatkan elemen <div>, sedangkan kita hanya ingin mengakses elemen button. Lantas bagaimana caranya? Kita bisa menggunakan properti children yang akan mengembalikan semua child element yang terdapat di dalam tag <div> dalam bentuk HTMLCollection. Karena elemen tersebut hanya memiliki satu child element, kita bisa memanggilnya dengan indeks 0.
   const playButtonElement = playButton.children[0];
5. playButtonElement.setAttribute('disabled', true);
