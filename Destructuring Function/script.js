// Destructuring function
// bisa destructuring ketika return valuenya array
function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b];
}

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// // console.log(jumlah);
// console.log(kali);
// --

// jika return array, urutan destructuring harus benar, tidak boleh acak!
const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// kasih nilai default 'tidak ada' jika di return tidak tidak ada value a/b
// jika ada value di retun, maka ada
console.log(bagi);



