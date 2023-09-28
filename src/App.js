import './App.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import StudentForm from './Components/StudentForm';
import AuthcontextProvider from './Components/AuthContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  let loginToken = localStorage.getItem('token') === "true" || false;
  const [isLogin, setIsLogin] = useState(loginToken);
  return (
    <AuthcontextProvider.Provider value={{isLogin,setIsLogin}}>
      <BrowserRouter>
        <Navbar />
        <div className='p-2'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/studentform' element={<StudentForm />} />
            <Route path='/' element={<MainPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthcontextProvider.Provider>
  );
}

export default App;
