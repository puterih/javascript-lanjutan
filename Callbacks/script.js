// Callback adalah function yang dikirimkan sebagai parameter pada function yang lain

// // Synchronous callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('massukan nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

const mhs = [
    {
        "nama": "Puteri Husnul",
        "nrp": "043040023",
        "email": "husnulputeri@gmail.com",
        "jurusan": "Teknik Informatika",
        "idDosenWali": 1
    },
    {
        "nama": "Erza Fadliyah",
        "nrp": "034504023",
        "email": "erza@gmail.com",
        "jurusan": "Teknik Mesin",
        "idDosenWali": 2
    },
    {
        "nama": "Hannah salsabilah",
        "nrp": "752446346",
        "email": "hannah@gmail.com",
        "jurusan": "KeDokteran",
        "idDosenWali": 2
    }
];
console.log('mulai');
mhs.forEach(m => {
    for (let i = 0; i < 10000000; i++) {
        let date = new Date();
    }
    console.log(m.nama)});
console.log('selesai');


// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest;

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4 ) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if( xhr.status = 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.semd();
// }

// getDataMahasiswa('data');
