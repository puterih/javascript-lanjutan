// Tagged Templates yaitu bentuk yg lebih kompleks dari Template Literals

const nama = 'Puteri Husnul';
const umur = 16;

function coba(strings, ...values) {
// ...values untuk memanggil semua expression ${}
    return values;
}

const str = coba`Halo, nama saya ${nama}, dan saya ${umur} tahun.`;
console.log(str);
// Not yet