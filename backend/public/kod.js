window.onload = function () {

  // gizle göster
  document.getElementById("show").addEventListener("change", function () {
    const sifre = document.getElementById("mpassword");
    sifre.type = this.checked ? "text" : "password";
  });

  // şifre sadece rakam
  document.getElementById("mpassword").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  // email sadece rakam
  const emailim = document.getElementById("mno");
  emailim.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  // beni hatırla
  const cekle = document.getElementById("save"),
        emailGiris = document.getElementById("mno");

  if (localStorage.checkbox && localStorage.checkbox !== "") {
    cekle.checked = true;
    emailGiris.value = localStorage.username || "";
  } else {
    cekle.checked = false;
    emailGiris.value = "";
  }

  cekle.addEventListener("change", function () {
    if (cekle.checked && emailGiris.value !== "") {
      localStorage.username = emailGiris.value;
      localStorage.checkbox = "true";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("checkbox");
    }
  });

     qrKodOlusturSagAlan();
  qrtimer = setInterval(qrKodOlusturSagAlan, 45000);
};

function qrKodOlusturSagAlan() {
  const qrDiv = document.getElementById("qrBox");
  qrDiv.innerHTML = "";

  const veri = "XBank-Login-" + Date.now();
  new QRCode(qrDiv, {
    text: veri,
    width: 160,
    height: 160
  });

  // Geri sayım göstergesi
  let kalanSure = 45;
  const countdownEl = document.getElementById("qrCountdown");
  countdownEl.textContent = `${kalanSure} sn içinde yenilenecek`;

  clearInterval(countdownEl._interval);
  countdownEl._interval = setInterval(() => {
    kalanSure--;
    countdownEl.textContent = `${kalanSure} sn içinde yenilenecek`;
    if (kalanSure <= 0) clearInterval(countdownEl._interval);
  }, 1000);

};
//email input force rakam
const emailim = document.getElementById("mno");
emailim.addEventListener("input",function(){
emailim.value=emailim.value.replace(/[^0-9]/g, '');
})

//DİL ÇEVİRİ
const translations = {
  "English" : "Türkçe",
  "Müşteri Numaranız / TCKN :": "Your Customer No / ID Number:",
  "Şifre :": "Password:",
  "Giriş Yap": "Login",
  "QR İle Gir": "Login with QR",
  "Dijital Banka Müşterimiz Olmak İçin": "To Become Our Digital Bank Customer",
  "Başvur": "Apply",
  "Beni Hatırla": "Remember Me",
  "Gizle / Göster": "Hide / Show",
  "Şifremi Unuttum?": "Forgot Password?",
  "X Bankası Dijital İnternet Bankacılığı'na Hoş Geldiniz": "Welcome to X Bank Digital Internet Banking"
};

/*document.querySelector(".dil").addEventListener('click',function translate(){
   document.querySelectorAll("label, input[type='button'], h1, h2, a, p").forEach(el => {
    const originalText = el.textContent.trim();
    if (translations[originalText]) {
      el.textContent = translations[originalText];
    }
  });
})
*/
let currentLang = "tr";

document.querySelector(".dil").addEventListener('click', function () {
  const elements = document.querySelectorAll("label, input[type='button'], h1, h2, a");
  const buttons = document.querySelectorAll("input[type='button']");
  elements.forEach(el => {
    let text = el.textContent.trim();

    if (currentLang === "tr") {
      
      if (translations[text]) {
        el.textContent = translations[text];
      }
    } else {

      for (let key in translations) {
        if (translations[key] === text) {
          el.textContent = key;
          break;
        }
      }
    }
  });
  buttons.forEach(btn => {
    const val = btn.value.trim();
    if (currentLang === "tr" && translations[val]) {
      btn.value = translations[val];
    } else {
      for (let key in translations) {
        if (translations[key] === val) {
          btn.value = key;
          break;
        }
      }
    }
  });

  this.textContent = (currentLang === "tr") ? "Türkçe" : "English";
  currentLang = (currentLang === "tr") ? "en" : "tr";
});
/*let qrtimer=null;

const qrbuton = document.getElementById("qrgiris");

const qrkod = document.querySelector(".qr-code");

const gizle1 = document.getElementById("mno");
const gizle2 = document.getElementById("etiket");
const gizle3 = document.getElementById("save");
const gizle4 = document.getElementById("show");
const gizle5 = document.getElementById("mpassword");
const gizle6=document.getElementsByClassName("mno");
const gizle7=document.getElementsByClassName("mpassword");
const gizle8=document.getElementsByClassName("forgot-psw");
const gizle9=document.getElementsByClassName("etiket");
const gizle10=document.getElementsByClassName("mno");


qrbuton.addEventListener('click',function(){
  if (qrbuton.value == "QR İle Gir") {
  qrbuton.value ="Kapat";
  gizle1.style.display="none";
gizle2.style.display="none";
gizle3.style.display="none";
gizle4.style.display="none";
gizle5.style.display="none";
qrkod.style.display = "block";
const classList =[gizle6,gizle7,gizle8,gizle9];
classList.forEach(itemList =>{
for (let i = 0;i < itemList.length;i++) {
  itemList[i].style.display="none";
}
});
 qrKodOlustur();
 qrtimer = setInterval(qrKodOlustur,45000);
}
else{
qrbuton.value = "QR İle Gir";
gizle1.style.display="block";
gizle2.style.display="block";
gizle3.style.display="block";
gizle4.style.display="block";
gizle5.style.display="block";
qrkod.style.display = "none";
const classList =[gizle6,gizle7,gizle8,gizle9];
classList.forEach(itemList =>{
for (let i = 0;i < itemList.length;i++) {
  itemList[i].style.display="block";
}
});
clearInterval(qrtimer);
qrtimer=null;
}
})

function qrKodOlustur() {
  const qrDiv = document.querySelector(".qr-code");
  qrDiv.innerHTML = ""; 

  const veri = "XBank-Login-" + Date.now();
  new QRCode(qrDiv, {
    text: veri,
    width: 200,
    height: 200
  });
}
*/

const form = document.getElementById("loginForm");
document.querySelector("input[type='button']").addEventListener("click",function(e){
  e.preventDefault();
  const musteriNo =document.getElementById("mno").value;
  const sifre = document.getElementById("mpassword").value;
fetch("http://localhost:3000/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ musteriNo, sifre })
})
.then(response => response.json())
.then(data => alert(data.message))
.catch(error => {
  console.error("hata:", error);
  alert("sunucuya bağlanılmadı");
});
});

 
