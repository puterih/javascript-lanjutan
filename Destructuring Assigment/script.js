// Destructuring Variable/ Assignment merupakas sebuah expression/sintaks pd Js yg membuat kita dpt membongkar nilai dari array atau properti dari object kedalam variabel yg terpisah/ unpacking array atau object

// Destructuring Array
// // menggunakan teknik biasa
// const perkenalan = ['halo', 'nama', 'saya', 'Puteri'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);

// menggunakan Destructuring
const perkenalan = ['halo', 'nama', 'saya', 'Puteri'];

// const [salam, satu, dua, nama] = perkenalan;
// console.log(dua);

// Skipping Items ----
const [salam, , , nama] = perkenalan;
console.log(nama);