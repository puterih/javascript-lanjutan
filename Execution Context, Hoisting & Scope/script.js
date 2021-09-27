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


var nama = 'Puteri';
var umur = 16;

console.log(sayHello());

function sayHello() {
    console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun.`);
}