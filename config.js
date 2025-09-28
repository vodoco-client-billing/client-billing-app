// config.js

// Identificador de la app (queda como carpeta en Firestore)
window.__app_id = "clientbillinglive";

// Configuración de Firebase
window.__firebase_config = JSON.stringify({
  apiKey: "AIzaSyDEiUakvzE6acvLMwSVYoqqP7WKKHhyR4U",
  authDomain: "clientbillinglive.firebaseapp.com",
  projectId: "clientbillinglive",
  storageBucket: "clientbillinglive.firebasestorage.app",
  messagingSenderId: "400586974621",
  appId: "1:400586974621:web:1acecdaa4158ab0de4bb74"
});

// De momento usamos null, así entra con login anónimo
window.__initial_auth_token = null;
