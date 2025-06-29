// firestore-config.js

// Configuración real de Firebase (copia desde Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBVRvcTz8Ac-5y1LRitBIjQablEQhQgllY",
  authDomain: "drift-and-cloud.firebaseapp.com",
  projectId: "drift-and-cloud",
  storageBucket: "drift-and-cloud.firebasestorage.app",
  messagingSenderId: "893953764443",
  appId: "1:893953764443:web:17d634c5be675c3788a37e"
};

// Inicializa Firebase si no está inicializado aún
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Exportar instancias globales
const auth = firebase.auth();
const db = firebase.firestore();
