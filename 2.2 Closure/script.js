// contoh dari Closure

// function init() {
//     // let nama = 'Puteri';
//     return function (nama) {
//         console.log(nama);
//     }
   
// }
// let panggilNama = init();
// panggilNama('Puteri');
// panggilNama('Husnul');
// ---

function ucapSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenyangkan!`);
    }
}
// Factory function
let selamatPagi = ucapSalam('Pagi');
let SelamatSiang = ucapSalam('Siang');
let selamatMalam = ucapSalam('Malam');

console.dir(selamatMalam('Puteri'));
// ---

let add = (function () {
    let counter = 0;
    return function() {
        return ++counter;
    } 
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

