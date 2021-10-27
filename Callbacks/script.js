// Callback adalah function yang dikirimkan sebagai parameter pada function yang lain
// // Synchronous callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

function tampilkanPesan(callback) {
    const nama = prompt('massukan nama : ');
    callback(nama);
}

tampilkanPesan(nama => alert(`Halo, ${nama}`));