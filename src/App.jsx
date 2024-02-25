import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Singup from './components/signup/singup';
import HomePage from './containers/home/home';

function App() {
  return (
    <Router>
      <HomePage>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Singup />} />
        </Routes>
      </HomePage>
    </Router>
  )
}

export default App
