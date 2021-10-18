// Destructuring Variable/ Assignment merupakas sebuah expression/sintaks pd Js yg membuat kita dpt membongkar nilai dari array atau properti dari object kedalam variabel yg terpisah/ unpacking array atau object

// Destructuring Array-
// // menggunakan teknik biasa--
// const perkenalan = ['halo', 'nama', 'saya', 'Puteri'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);

// menggunakan Destructuring--
// const perkenalan = ['halo', 'nama', 'saya', 'Puteri'];

// const [salam, satu, dua, nama] = perkenalan;
// console.log(dua);

// // Skipping Items ----
// const [salam, , , nama] = perkenalan;
// console.log(nama);


// swap items
// // menggunakan let karna isinya akan diubah, pakai const isinya tidak bisa diubah
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// // return value pd function
// function coba() {
//     return[1, 2];
// }

// const [a, b] = coba();
// console.log(a);


// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);



// Destructuring Object
// const mhs = {
//     nama: 'Puteri',
//     umur: 16
// }

// const { nama, umur } = mhs;
// console.log(nama);



// Assignment tanpa deklarasi object
// // tanpa const, syarat: harus menggunakan () dahulu
// ({ nama, umur } = { nama: 'Puteri', umur: 16 });
// console.log(nama);




// Assign ke variabel baru
// const mhs = {
//     nama: 'Puteri',
//     umur: 16
// }
// const { nama: n, umur:u } = mhs;
// console.log(u);



// Memberikan Default Value
// const mhs = {
//     nama: 'Puteri',
//     umur: 16,
//     email: 'husnulputeri@gmail.com'
// }
// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);



// kita bisa memberi nilai default = assign ke variabel baru
// const mhs = {
//     nama: 'Puteri',
//     umur: 16,
//     email: 'husnulputeri@gmail.com'
// }
// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);



// Rest Parameter
// const mhs = {
//     nama: 'Puteri',
//     umur: 16,
//     email: 'husnulputeri@gmail.com'
// }
// const { nama, ...value } = mhs;
// console.log(value);
// // jika consol nama hasilnya string dan jika console value bentuknya object



// ketika kita mau mengambil field pd object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
        nama: 'Puteri',
        umur: 16,
        email: 'husnulputeri@gmail.com'
    }

function getIdMhs({ id }) {
// bisa id saja, bisa tambah yg lain: nama -> return nama;
    return id;
}

console.log(getIdMhs(mhs));























































































































