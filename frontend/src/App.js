import React from 'react';
import Header from './component/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Recipes from './component/Recipes';
import Menu from './component/Menu';
import ShoppingList from './component/ShoppingList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Recipes />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="ShoppingList" element={<ShoppingList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
