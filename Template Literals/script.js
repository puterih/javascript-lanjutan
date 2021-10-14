// Template Literals / Template String

// const nama = 'Puteri';
// const umur = 16;
// // console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log(`Halo, nama saya ` + nama + `, dan saya ` + umur + ` tahun.`);



// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 10;
// console.log(`${( x % 2 == 0) ? 'genap' : 'ganjil'}`);




// // HTML Fragment
// const mhs = {
//     nama: 'Puteri',
//     umur: 16,
//     nrp: '0123456',
//     email: 'husnulputeri@gmail.com' 
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);

// ------------

// LATIHAN Template Literals Bagian 2
// 1. HTML Fragments]

// const mhs = {
//     nama: 'Puteri',
//     umur: 16,
//     nrp: '0123456',
//     email: 'husnulputeri@gmail.com' 
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;
// document.body.innerHTML = el;



// 2. Looping

// const mhs = [
//     {
//         nama: 'Puteri Puteri',
//         email: 'puteri@gmail.com'
//     },
//     {
//         nama: 'Puteri Husnul',
//         email: 'husnul@gmail.com'
//     },
//     {
//         nama: 'Puteri Khotimah',
//         email: 'khotimah@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')}
// </div>`;

// document.body.innerHTML = el;



// 3. Conditionals
// Ternary

// const lagu = {
//     judul: 'Tetap dalam jiwa',
//     penyanyi: 'Isyana Sarasvati',
  
// }

// const el = `<div class ="lagu">
// <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>`;

// document.body.innerHTML = el;

// ----not yet
// 4. Nested
// HTML Fragments Bersarang

// const mhs = {
//     nama: 'Puteri Husnul'
//     semester: 5,
//     mataPelajaran: [
//         'Senibudaya',
//         'sejarah',
//         'bahasa indonesia'
//     ]
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>

// </div>`
// document.body.innerHTML = el;

// lanjut besok












































































