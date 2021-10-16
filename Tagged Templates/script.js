// Tagged Templates yaitu bentuk yg lebih kompleks dari Template Literals

const nama = 'Puteri Husnul';
const umur = 16;

function coba(strings, ...values) {
// // ...values untuk memanggil semua expression ${}
//     let result = '';
//     strings.forEach((str, i) => {
//         result += `${str}${values[i] || ''}`;
// // menggunakan || '' untuk supaya menghapus tanda undefined di console web
//     });
//     return result;

// cara gampang menggunakan higher oreder function Reduce
return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}
`, '')
}

const str = coba`Halo, nama saya ${nama}, dan saya ${umur} tahun.`;
console.log(str);
