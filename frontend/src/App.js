import React from 'react';
import Header from './component/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipes from './component/Recipes';
import Menu from './component/Menu';
import ShoppingList from './component/ShoppingList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>        
            <Route path="/" element={<Recipes />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="ShoppingList" element={<ShoppingList />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
