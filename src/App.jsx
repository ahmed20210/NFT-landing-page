import { useState } from 'react'
// components
import Header from './components/Header'
// import Footer from './components/Footer'
import Market from './components/Market'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Features from './components/Features'
import Home from './components/Home'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <div className='mx-3 sm:mx-5 md:mx-10 lg:mx-20'>
      <Header />
      <Home />
      <WhyUs />
      <Features />
      <Market />
      <Team />
      <Footer/>
    </div>
  );
}

export default App
