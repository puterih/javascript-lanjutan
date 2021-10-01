// Closure merupakan kombinasi antara function dan lingkungan leksikal(lexical scope) di dalam function tersebut.
// Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi
// --
// function init() {
//     // let nama = 'Puteri';
//     return function (nama) {
//         console.log(nama);
//     }

// }
// let panggilNama = init();
// panggilNama('Puteri');
// panggilNama('Husnul');
// --
// Closure untuk membuat Function Factories, privat method
// ---

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('Puteri'));
// ---


let add = (function () {
    let counter = 0;
    return function () {
 return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());






























