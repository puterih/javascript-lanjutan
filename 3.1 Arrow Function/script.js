// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log (tampilNama('Puteri'));

// ----

// Cara menjadi Arrow Function
// 1 Parameter tidak harus pakai kurung awal tutup (nama)
// const tampilNama = (nama) => { return `Halo, ${nama}`;}
// console.log('Puteri Husnul');
// ----
// 2 Parameter harus menggunakan kurung awal tutup
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Puteri', 'Malam'));
// ----
// impplisit return yaitu tidak perlu menggunakan return dan kurung kurawal
// const tampilNama = nama => `Halo, ${nama}`;
// console.log('Puteri Husnul');
// ----
// contoh tanpa parameter wajib menuliskan kurung awal tutup()
// const tampilNama = () => `Hello world!`;
// console.log(tampilNama());


// contoh lain dari Arrow Function
// dengan menggunakan function map pd Js untuk mematahkan sebuah function ke array
// let mahasiswa = ['Puteri Husnul', 'Erza Fadliyah', 'Hana Salsabilah'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);
// ---
// ubah menjadi Arrow function
// let mahasiswa = ['Puteri Husnul', 'Erza Fadliyah', 'Hana Salsabilah'];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// mengembalikan dalam bentuk objek bukan array
let mahasiswa = ['Puteri Husnul', 'Erza Fadliyah', 'Hana Salsabilah'];
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
// console.log(jumlahHuruf);
// menggunakan console.table agar terlihat rapi
console.table(jumlahHuruf);


























