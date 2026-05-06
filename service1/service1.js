const express = require('express');
const app = express();
const port = 3001;

// Middleware
app.use(express.json());

app.get('/api/resource', (req, res) => {
    res.json({ message: 'Response dari Service 1' });
});

// GET
app.get('/api/mahasiswa', (req, res) => {
    res.json({
        status: 'success',
        message: 'Berhasil mengambil data mahasiswa dari Service 1',
        data: [
            { nim: "2410511081", nama: "Saif Ali" },
            { nim: "2410511067", nama: "Nyalit Ini" }
        ]
    });
});

// POST
app.post('/api/mahasiswa', (req, res) => {
    const dataBaru = req.body;
    res.status(201).json({
        status: 'created',
        message: 'Data mahasiswa berhasil ditambahkan di Service 1!',
        data_yang_disimpan: dataBaru
    });
});

// DELETE
app.delete('/api/mahasiswa/:kode', (req, res) => {
    const NIM = req.params.kode;
    res.json({
        status: 'deleted',
        message: `Mahasiswa dengan NIM ${NIM} berhasil dihapus dari Service 2.`
    });
});

app.listen(port, () => {
    console.log(`Service 1 sedang berjalan pada port ${port}`);
});