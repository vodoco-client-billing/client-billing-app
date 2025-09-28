// config.js

// Identificador único de tu app
window.__app_id = "clientbillinglive";

// Configuración de tu proyecto Firebase
window.__firebase_config = JSON.stringify({
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "1:XXXXXXXXXX:web:YYYYYYYYYY"
});

// Por ahora lo dejamos en null, más adelante podemos poner un token fijo
window.__initial_auth_token = null;
