// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE


// var nama = 'Puteri';
// console.log(nama);

// Creation phase pada Global Context
// creation phase atau pembentukan yaitu terjadi di konteks global(langsung di file Js, tidak di dalam function)
// nama var = undefined
// nama function = fn()
// konsep ini disebunt Hoisting(keatas/diataskan)
// js mendefinisikan object window sebagai global object, dan js mendefinisikan this sebagai window
// window = globa object
// this = window

// execution phase yaitu mengeksekusi programnya perbaris dr atas ke bwh

// contoh lain dari EXECUTION CONTEXT, HOISTING
// var nama = 'Puteri';
// var umur = 16;

// console.log(sayHello());

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// // jika tidak ingin ada undefined, maka ganti console.log jadi return
// }

// function seolah" membuat lokal execution context
// yang didalamnya sama terdapat creation dan execution phase
// bedanya klo lokal exec context, selain bisa akses window, kita bisa akses ke argument yang bisa berisi apapun yg kita masukkan ke dlm parameter function
// di dalamnya ada juga Hoisting
// Bingung

// contoh kasus 1
// var nama = 'Puteri Husnul';
// var username = '@putr.hsl';

// function cetakURL() {

//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@puterihusnul', '@hcqn'));
// --





// contoh kasus 2
// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//     function c() {
//         console.log('ini c');
//     }

//     c();
//     }

//     b();
// }

// a();
// ---



// Latihan Js visualize
function satu() {
    var nama = 'Puteri';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Husnul';
satu();
dua('Khotimah');
console.log(nama);


















































