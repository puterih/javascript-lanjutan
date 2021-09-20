// Meng-Review kembali Object pada js
// Prototype yaitu konsep dari object
// Cara untuk Membuat Object pada Javascript
//    1. Object Literal - Membuat object langsung
// let mahasiswa1 = {
//     nama: 'Puteri',
//     energy: 10,
// Object berisi 2 property, yaitu nama & energy
// method adalah function yg ada di dalam object
// misal
//    makan: function (porsi) {
//        this.energy = this.energy + porsi;
//        console.log(`Halo ${this.nama}, selamat makan!`);
//    }
// }
// ---
// let mahasiswa2 = {
//     nama: 'Husnul',
//     energy: 20,
// // Object berisi 2 property, yaitu nama & energy
// // method adalah function yg ada di dalam object
// // misal
//    makan: function (porsi) {
//        this.energy = this.energy + porsi;
//        console.log(`Halo ${this.nama}, selamat makan!`);
//    }
// }



//    2. Function Declaration
function Mahasiswa(nama, energy) {
    let mahasiswa = {};
// buat property: mahasiswa.makan = kemudian isi dengan apapun di dalam parameter: nama;
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

// method
    mahasiswa.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
// Harus return
   return mahasiswa;
}
// instansiasi
let puteri = Mahasiswa('Puteri Husnul', 10);


































//    3. Constructor Function
//    4. Object.create()
// ---
