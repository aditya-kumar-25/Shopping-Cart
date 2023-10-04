import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import CartHome from './Components/CartHome';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={ <Layout /> }>
            <Route index element={ <Home />} />
            <Route path='/cart' element={<CartHome />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
