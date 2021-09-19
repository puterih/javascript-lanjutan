// 2.1 EXECUTION CONTEXT, HUISTING & SCOPE

// console.log(nama);
// var nama = 'Puteri';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution pharse
// --
// var nama = 'Puteri';
// var umur = 16;

// console.log(sayHello());
// function sayHello() {
//     return(`halo, nama saya ${nama}, saya ${umur} tahun.`);
// }
// --
// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


// ----
// var nama = 'Puteri Husnul';
// var username = '@putr.hsl';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));
// ---


// -----
// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();

// ----

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

















































