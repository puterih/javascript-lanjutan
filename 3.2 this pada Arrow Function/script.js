// konsep this pada Arrow function

// Constructor Function(Object)
// const Mahasiswa = function() {
//     this.nama = 'Puteri';
//     this.umur = 16;
//     console.log(this);
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const hc = new Mahasiswa();
// ---

// Arrow Function
// const Mahasiswa = function() {
//     this.nama = 'Puteri';
//     this.umur = 16;
//     console.log(this);
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const hc = new Mahasiswa();
// ---

// Object Literal
// const mhs1 = {
//     nama: 'Puteri',
//     umur: 13,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}`);  undefined
//         console.log(this);
//     }
// }
// ----


const Mahasiswa = function() {
    this.nama = 'Puteri';
    this.umur = 16;
    console.log(this);
    this.sayHello = function() {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}

const hc = new Mahasiswa();

























