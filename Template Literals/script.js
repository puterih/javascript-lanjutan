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




// HTML Fragment
const mhs = {
    nama: 'Puteri',
    umur: 16,
    nrp: '0123456',
    email: 'husnulputeri@gmail.com' 
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);