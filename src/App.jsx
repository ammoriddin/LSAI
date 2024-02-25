import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Singup from './components/signup/singup';
import Navbar from './containers/navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Singup />} />
      </Routes>
    </Router>
  )
}

export default App
