const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { musteriNo, sifre } = req.body;
  if (musteriNo === '8152887' && sifre === '123456') {
    return res.json({ message: 'Giriş başarılı' });
  }
  return res.status(401).json({ message: 'Hatalı giriş' });
});


const PORT = process.env.PORT; 
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});