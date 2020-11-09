import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import OnlineStore from './components/OnlineStore/OnlineStore';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
// import * as firebase from "firebase/app";
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhajkUnmvmPBVd7kjwEu9TCwKO0p3PMBY",
  authDomain: "motsunabe-2020.firebaseapp.com",
  databaseURL: "https://motsunabe-2020.firebaseio.com",
  projectId: "motsunabe-2020",
  storageBucket: "motsunabe-2020.appspot.com",
  messagingSenderId: "493081116797",
  appId: "1:493081116797:web:a5c43bd682266958993114",
  measurementId: "G-DCNEPY7PW2"
};

function App() {
  return (
    <div className="App">
      <Header />
      <OnlineStore />
      <About />
      <Footer />
    </div>
  );
}

export default App;
