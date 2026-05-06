const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.get('/api/resource', (req, res) => {
    res.json({ message: 'Response from Service 2' });
});

// GET
app.get('/api/matkul', (req, res) => {
    res.json({
        status: 'success',
        message: 'Berhasil mengambil daftar mata kuliah dari Service 2',
        data: [
            { kode: "MK01", nama: "Dasar Pemrograman" },
            { kode: "MK02", nama: "Technopreneurship" }
        ]
    });
});

// POST
app.post('/api/matkul', (req, res) => {
    const dataBaru = req.body;
    res.status(201).json({
        status: 'created',
        message: 'Data mata kuliah berhasil ditambahkan di Service 2!',
        data_yang_disimpan: dataBaru
    });
});

// DELETE
app.delete('/api/matkul/:kode', (req, res) => {
    const kodeMatkul = req.params.kode;
    res.json({
        status: 'deleted',
        message: `Mata kuliah dengan kode ${kodeMatkul} berhasil dihapus dari Service 2.`
    });
});

app.listen(port, () => {
    console.log(`Service 2 sedang berjalan pada port ${port}`);
});