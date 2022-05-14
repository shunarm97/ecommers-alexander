import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ProtectedPages from './pages/ProtectedPages';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Inicio from './pages/Inicio';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*Rutas publicas*/}
        <Route path='/login' element={<Login />} />
        <Route path='/signup'  />
        {/*Rutas protegidas*/}
        <Route element={<ProtectedPages />} >
          <Route path='/' element={<Inicio/>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/success' element={<Success/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
