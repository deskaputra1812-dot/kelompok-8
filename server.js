let express = require('express');
let app = express();
const port = 8000;

let waktuMulai = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>Selamat datang di server Kelompok 8</h2>");
    res.end();
});

app.get('/info', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h3>Server ini mulai dijalankan pada: " + waktuMulai + "</h3>");
    res.end();
});

app.get('/anggota', (req, res) => {
    let dataAnggota = [
        {nama: 'Deska Wahyu Eka Putra', nim: '20250040030'},
        {nama: 'Anmas Prabuokto', nim: '20250040084'},
        {nama: 'Muhammad Chikal Ziaulhaq', nim: '20250040072'},
        {nama: 'Juwita', nim: '20250040146'}

    ];
    
    res.writeHead(200);
    res.write(JSON.stringify(dataAnggota));
    res.end();
});

// Menjalankan server
var server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});