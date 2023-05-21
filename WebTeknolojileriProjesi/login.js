document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Giriş bilgilerini kontrol et
    if (email === "b221210561@ogr.sakarya.edu.tr" && password === "b221210561") {
      document.getElementById("loginForm").style.display = "none"; // Formu gizle
      document.getElementById("welcomeMessage").style.display = "block"; // Hoşgeldin mesajını göster
    }
  });
  