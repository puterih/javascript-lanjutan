// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Puteri';
//     this.umur = 16;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const puteri = new Mahasiswa();
// ---


// Arrow Function
// *Arrow function tidak memiliki konsep this
// const Mahasiswa = function() {
//     this.nama = 'Puteri';
//     this.umur = 16;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const puteri = new Mahasiswa();
// ---


// // Object Literal
// const mhs1 = {
//     nama: 'Puteri',
//     umur: 16,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         console.log(this);
// // muncul window krn arrow function tidak memiliki konsep this
//     }
// }
// // -----




// // Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Puteri';
//     this.umur = 16;
//     this.sayHello = function() {
// // function ini adalah function expression disimpan ke dlm var sayHello, maka console log tidak akan kena hoisting
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }

//     setInterval(() => {
// // setInterval adalah function declaraton, ketika menggunakan ini akan terkena hoisting
// // sehingga pd this dipanggil, maka akan dicek ke Global
//     console.log(this.umur++);
//     }, 500);

// }

// const puteri = new Mahasiswa();
// // ----



const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
// toggle untuk menambahkan class jikalau tidak ada, jika ada akan dihilangkan
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});































































