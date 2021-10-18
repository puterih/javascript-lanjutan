// Destructuring function

function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b];
}

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// // console.log(jumlah);
// console.log(kali);

const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
console.log(bagi);

