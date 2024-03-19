// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMoV-gqobNWe0wHZHajsv1bPYaYw7KQFE",
    authDomain: "chative-com.firebaseapp.com",
    projectId: "chative-com",
    storageBucket: "chative-com.appspot.com",
    messagingSenderId: "137291701816",
    appId: "1:137291701816:web:da3732f450d8343f8010cd",
    measurementId: "G-YLGP1EVQPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function htmlEscape(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
        return '&#'+c.charCodeAt(0)+';';
    });
}

function base64Escape(str) {
    return (String(str).replace(/[^A-Za-z0-9+/=]/g, ''));
}