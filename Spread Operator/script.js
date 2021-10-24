// Spread Operator 
// memecah iterables menjadi single element


// const mhs = ['Puteri', 'Husnul', 'Khotimah'];
// console.log(mhs);
// console.log(...mhs);
// jika ditambahkan ... maka yg tadinya Array, jd pecah menjadi tiap elemen *Puteri Husnul Khotimah
// --


// menggabungkan 2 array, atau lebih
// const mhs = ['Puteri', 'Husnul', 'Khotimah'];
// const dosen = ['hana', 'erza', 'veza'];
// // // cara menggabungkannya
// const orang = [...mhs, 'aji', ...dosen];
// // bisa menggunakan cara yang lain menggunakan sebuah method array yaitu concat
// // const orang = mhs.concat(dosen);
// console.log(orang);



// meng-copy array
// const mhs = ['Puteri', 'Husnul', 'Khotimah'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] ='Hace';
// // console.log(mhs);
// console.log(mhs1);




// Cara ingin mengambil nama pakai Js lalu disimpan ke Array
const liMhs = document.querySelectorAll('li');
// const mhs = [];
// // cara looping biasa
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// cara singkat
const mhs = [...liMhs].map(m => m.textContent);
console.log(mhs);





























































































