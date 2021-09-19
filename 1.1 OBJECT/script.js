// Cara untuk menbuat Object pada Javascript
// 1. Object literal
// PROBLEM = Tdak efektif untuk objek jang banyak
// let mahasiswa1 = {
// 	nama: 'Puteri',
// 	energ1: 10,
// 	makan: function (porsi) {
// 		this.energ1 = this.energ1 + porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}
// }

// let mahasiswa2 = {
// 	nama: 'husnul',
// 	energ1: 20,
// 	makan: function (porsi) {
// 		this.energ1 = this.energ1 + porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}
// }

// 2. Function Declaration

// const methodMahasiswa = {
// 	makan: function (porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	},

// 	main: function (jam) {
// 		this.energi -= porsi;
// 		console.log(`Halo ${this.nama}, selamat Bermain!`);
// 	},

// 	tidur: function(jam) {
// 		this.energi += jam * 2;
// 		console.log(`Halo ${this.nama}, selamat Tidur!`);
// 	}
// };

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = Object.create(methodMahasiswa);
// // Object.create langsung menunjukkan parent objectnya
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

//  return mahasiswa;
// }

// let puteri = Mahasiswa('Puteri', 10);
// let husnul = Mahasiswa('husnul', 20);


function Mahasiswa(nama, energi) {
	// let mahasiswa = Object.create(methodMahasiswa);
// Object.create langsung menunjukkan parent objectnya
   let mahasiswa = {};
	mahasiswa.nama = nama;
	mahasiswa.energi = energi;

 return mahasiswa;
}









// 3. Constructor function
// Keyward new
// function Mahasiswa(nama, energi) {
// 	// let mahasiswa = {};  ini dihapus karna otomatis
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function (porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}

// 	this.main = function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`)
// 	}
// 	// return mahasiswa;   dihapus
// }

// let puteri = new Mahasiswa('Puteri', 10);


// 4. 0bject.create
