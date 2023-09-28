import './App.css';
import StudentTable from './Components/StudentTable';
import Navbar from './Components/Navbar';
import Charts from './Components/Charts';
import MainPage from './Components/MainPage';
function App() {
  return (
    <div >
      <Navbar />
      <div className='p-2'>
        <MainPage></MainPage>
      </div>

    </div>
  );
}

export default App;
