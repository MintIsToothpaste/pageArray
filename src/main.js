import App from './App.svelte';
import firebase from "firebase/app";
import "firebase/firestore";

// 파이어베이스 sdk 설정들
var app = new App({
	target: document.body
});

const firebaseConfig = {
	apiKey: "AIzaSyB5CjIBc8dsRFh3Uyc5qDegxPFD3jh6X1Q",
	authDomain: "pagearraysave.firebaseapp.com",
	projectId: "pagearraysave",
	storageBucket: "pagearraysave.appspot.com",
	messagingSenderId: "874287836949",
	appId: "1:874287836949:web:1e4b475aab8b99f987831c"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default app;