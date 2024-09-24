import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  Routes,Route
} from "react-router-dom";
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import Tictactoe from './pages/Tictactoe';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<BlogDetail/>} />
        <Route path='/game' element={<Tictactoe/>} />
      </Routes>
    </div>
  );
}

export default App;
