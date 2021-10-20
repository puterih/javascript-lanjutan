// Looping baru pada javascript yaitu for of.. & for..in 
// Menggunakan Array
// const mhs = ['Puteri', 'Husnul', 'Khotimah'];
// 1. menggunakan for biasa
// for( let i = 0; i < mhs.length; i++ ) {
//     console.log(mhs[i]);
// }
// --
// 2. menggunakan forEach
// mhs.forEach( m => console.log(m));
// --
// 3. mengguanakan for..of
// for( const m of mhs ) {
//     console.log(m);
// }
// --

// Menggunakan String
// // forEach tidak bisa digunakan untuk looping string karna dia bukan Array(forEach khusus untuk array)
// const nama = 'Puteri';
// for(const n of nama) {
//     console.log(n);
// }

const mhs = ['Puteri', 'Husnul', 'Khotimah'];
// mhs.forEach((m, i) => {
//     // console.log(m);
//     // console.log(i);
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// jika ingin menggunakan for..of maka pakai method entries()
// // cara 1
// for(const m of mhs.entries()) {
//     console.log(m);
// }
// // cara 2
// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }




// NodeList, yaitu ketika kita melakukan query pada DOM
const liNama = document.querySelectorAll('.nama');
// console.log(linama);

// liNama.forEach(n => console.log(n.textContent));
// // bisa menggunakan innerHTML/text.Content

for( n of liNama) {
    console.log(n.innerHTML);
}











































































