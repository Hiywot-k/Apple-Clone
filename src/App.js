import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from "./Sections/Main"
import AppRout from './Router/Router';

function App() {
  return (
    <div>
     <Header/>
     <AppRout/>
     <Footer/>
    </div>
  );
}

export default App;
