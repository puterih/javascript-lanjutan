const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka yg >= 3
// for
const newAngka = [];
for( let i = 0; i < angka.length; i++) {
    if( angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}
console.log(newAngka);