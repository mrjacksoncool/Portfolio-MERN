import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import bgImage from '../src/assets/images/background-img.jpg'

function App() {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar />
      <div className='flex flex-col h-full justify-center items-center text-center'>
        <p className='text-3xl text-bold text-white'>
          Hi, I'm a Full-Stack <br />
          Web Developer
        </p>
        <button className='bg-white hover:bg-gray-200 text-black font-bold mt-4 py-1 px-4 rounded-3xl'>My work</button>
      </div>
    </div>
  );
}

export default App;
