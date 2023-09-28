import './App.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import StudentForm from './Components/StudentForm';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/studentform' element={<StudentForm />} />
          <Route path='/' element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
