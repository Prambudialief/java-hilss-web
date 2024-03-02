// JavaScript code

function search_animal() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let cars = document.querySelectorAll('.car');

  cars.forEach((car) => {
      let h1 = car.querySelector('h1'); // Ambil elemen h1 di dalam car
      let text = h1.textContent.toLowerCase(); // Ambil teks dari elemen h1

      // Jika teks pencarian ditemukan dalam teks elemen h1, tampilkan car; jika tidak, sembunyikan car
      if (text.includes(input)) {
          car.style.display = "block";
      } else {
          car.style.display = "none";
      }
  });
}
  