import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Navbar from './containers/navbar/navbar';
import ForgotPassword from './components/forgotpassword/forgotpassword';
import Home from './containers/home/main';
import CCAT from './containers/ccat/main';
import DocsPage from './containers/docs/main';
import Tdoc from './containers/tdoc/main';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/ccat' element={<CCAT />} />
        <Route path='/docs' element={<DocsPage />} />
        <Route path='/docs/user/:id/doc/:id' element={<Tdoc />} />
      </Routes>
    </Router>
  )
}

export default App
