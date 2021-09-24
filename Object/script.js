// Meng-Review kembali Object pada js
// Prototype yaitu konsep dari object
// Cara untuk Membuat Object pada Javascript
//    1. Object Literal - Membuat object langsung
// PROBLEM: tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Puteri',
//     energy: 10,
// // Object berisi 2 property, yaitu nama & energy
// // method adalah function yg ada di dalam object
// // misal
//    makan: function (porsi) {
//        this.energy = this.energy + porsi;
//        console.log(`Halo ${this.nama}, selamat makan!`);
//    }
// }
// // ---
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

const methodMahasiswa = {
    // method
    makan: function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },
    // jika ditambah method
    main: function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },
// membuat method baru di dalam object
    tidur: function (jam) {
        this.energy += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
};

function Mahasiswa(nama, energy) {
// bagaimana function declaration ini tau bahwa 3 method(main,makan,tidur) yg dibuat di object lain ini punya object mahasiswa??
// caranya menggunakan Object.create() dengan menggunakan ini bisa langsung kasih tau parent object yg terhubung dgn Mahasiswa, jd tidak perlu daftar ulang methodnya
    let mahasiswa = Object.create(methodMahasiswa);
// buat property: mahasiswa.nama = kemudian isi apapun di dalam parameter: nama;
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

// Harus return
   return mahasiswa;
}
// instansiasi untuk menambah siswa
let puteri = Mahasiswa('Puteri Husnul', 10);
let Khotimah = Mahasiswa('Khotimah', 20);







//    3. Constructor Function,
// tidak perlu menulis deklarasi variabel & return, karna sudah secara otomatis dilakukan oleh Js
// keywoard new
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

// // method
//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     // jika ditambah method
//     this.main = function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }

// let Puteri = new Mahasiswa('Puteri', 10);





//    4. Object.create()
// ---
