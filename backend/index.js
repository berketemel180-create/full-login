const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// ✅ Statik dosyalar için
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Ana sayfayı gönder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { musteriNo, sifre } = req.body;

  if (musteriNo === '8152887' && sifre === '123456') {
    res.json({ message: 'Giriş başarılı' });
  } else {
    res.status(401).json({ message: 'Hatalı giriş' });
  }
});

// ✅ PORT için Heroku'nun verdiği değeri kullan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
