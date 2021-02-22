import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import OnlineStore from './components/OnlineStore/OnlineStore';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
// import * as firebase from "firebase/app";
import 'firebase/storage';
import InstagramSection from './components/InstagramSection/InstagramSection';

function App() {
  return (
    <div className="App">
      <Header />
      <OnlineStore />
      <About />
      <InstagramSection />
      <Footer />
    </div>
  );
}

export default App;
