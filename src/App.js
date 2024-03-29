import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path='/' element={<Landing />} /> */}
    <Route path='/sign' element={< Signup />} />
    <Route path='/login' element={< Login />} />
    <Route path='/home' element={< Home />} />


    
    </Routes>
    </BrowserRouter>

  );
}

export default App;
