import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Pages/AppRouter';
import Navbar from './UI/Navbar/Navbar';

function App() {


  return (
<BrowserRouter>
<Navbar/>
<AppRouter/>
</BrowserRouter>
  );
}

export default App;
