import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Navbar from './containers/navbar/navbar';
import ForgotPassword from './components/forgotpassword/forgotpassword';
import Home from './containers/home/main';
import CCAT from './containers/ccat/main';
import DocsPage from './containers/docs/main';
import Tdoc from './containers/tdoc/main';
import Statistics from './containers/statistics/main';
import QuizResultPage from './components/statistics/quiz-result-page.jsx'
import QuizPage from './containers/quiz-page/main.jsx';
import QuizPlay from './containers/play-quiz/main.jsx';

function App() {
  return (
    <Router>
      <div className='h-[10vh] mb-[3rem]'>
        <div className='w-full top-0 fixed bg-white z-[400000000000000] border-b-[1.5px]'>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/ccat' element={<CCAT />} />
        <Route path='/docs' element={<DocsPage />} />
        <Route path='/docs/user/:id/doc/:id' element={<Tdoc />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/statistics/user/:id/quiz/:id' element={<QuizResultPage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/quiz/:id' element={<QuizPlay />} />
      </Routes>
    </Router>
  )
}

export default App
