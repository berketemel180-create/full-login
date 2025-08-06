const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());


app.use(express.static(path.join(__dirname, '..', 'frontend')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.post('/login', (req, res) => {
  const { musteriNo, sifre } = req.body;

  if (musteriNo === '8152887' && sifre === '123456') {
    res.json({ message: 'Giriş başarılı' });
  } else {
    res.status(401).json({ message: 'Hatalı giriş' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
