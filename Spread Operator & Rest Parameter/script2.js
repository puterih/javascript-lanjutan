// Rest Parameter, notasi ... sesuatu yg merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// cara 1
// function myFunc(a,b, ...myArgs) {
// // ...myArgs akan membentuk array
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }

// console.log(myFunc(1,2,3,4,5));


// cara 2
// function myFunc(...myArgs) {
//     // ...myArgs akan membentuk array
//         return myArgs;
//     }
    
// console.log(myFunc(1,2,3,4,5));
// // Rest(sisa)...myArgs parameter hanya bisa digunakan di akhir dari argument


// Cara 3
// function myFunc() {
//     // // ...myArgs akan membentuk array
//     //     return arguments;
//     // di console akan menghasilkan argument bentuknya object, maka harus diubah menjadi array dahulu
//         return Array.from(arguments);
//     // // atau menggunakan spread operator
//     //     return [...arguments];
//     }
    
// console.log(myFunc(1,2,3,4,5));


// Cara 1: Penjumlahan parameter menggunakan for..of
// function jumlahkan(...angka) {
//     let total = 0;
// // menggunakan let karna akan akan dimasukkan ke dalam Looping
//     for(const a of angka) {
//         total += a;
//     }

//     return total;

// }

// console.log(jumlahkan(1,2,3,4,5));


// Cara 2: Penjumlahan parameter secara ringkas pakai higher order function reduce
function jumlahkan(...angka) {
    return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1,2,3,4,5));


























