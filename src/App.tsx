import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  Routes,Route
} from "react-router-dom";
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<BlogDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
