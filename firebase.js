// Import the functions you need from the SDKs you need
const firebase = require("firebase/compat/app");
const firestore = require("firebase/compat/firestore");

// import webScriper from "./webScripter";
// import webScriper from "../webScripter";

const firebaseConfig = {
  apiKey: "AIzaSyDqiqKKe-px2jdTpmSCtvDSPFl528i7ezQ",
  authDomain: "tiktok-clone-react-15841.firebaseapp.com",
  projectId: "tiktok-clone-react-15841",
  storageBucket: "tiktok-clone-react-15841.appspot.com",
  messagingSenderId: "83274407825",
  appId: "1:83274407825:web:5f746c36d8641a3ef5c430",
  measurementId: "G-TEKEWNBQR1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

module.exports = db;
