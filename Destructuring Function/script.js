// Destructuring function
// bisa destructuring ketika return valuenya array
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
// --
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// // console.log(jumlah);
// console.log(kali);
// --

// // jika return array, urutan destructuring harus benar, tidak boleh acak!
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// // kasih nilai default 'tidak ada' jika di return tidak tidak ada value a/b
// // jika ada value di retun, maka ada
// console.log(bagi);




// // jika ingin urutannya tidak berpengaruh, return value bisa diganti jadi object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }
// // object bisa di Distructuring menggunakan {}
// // jadi urutannya bisa berurut, bisa acak karena sudah terasosiasi dengan nama propertinya, bukan lagi urutannya
// const {bagi, kali, kurang, tambah} = kalkulasi(2, 3);
// console.log(kurang);




// Destruction function arguments
const mhs1 = {
    nama: 'Puteri Husnul',
    umur: 16,
    email: 'husnulputeri@gmail.com',
// ada object di dalam object
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// cara destruction untuk mempermudah tulisan jika isinya kompleks
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, dan saya ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));


// // cara lain 1
// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, dan saya ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));


// // cara lain 2
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, dan saya ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));













