let a =  [
    {
        name: `puteri`,
        umur: 40
    },
    {
        name: `ibuk`,
        umur: 20
    },
    {
        name: `abang`,
        umur: 12
    }
];

let map = a.map(baris => {
    if(baris.umur > 30) {
        baris.name = `Buk ${baris.name}` 
    }else{
        baris.name = `Mbak ${baris.name}`
    }

    return baris;
});

let b = () => {
    console.log(`hai`)
}

b();

function x(z) {
    // simpen data z
    // kirim data ke server
    
    z();
}

let v = 1

x(b);
