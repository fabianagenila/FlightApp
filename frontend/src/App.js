import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage/Home';
import AdminPage from './pages/Admin/AdminPage';
import FlightPage from './pages/FlightPage/Flightpage';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>                
             <Route path='/admin' element={<AdminPage />}/>               
             <Route path='/flights' element={<FlightPage />}/>
             <Route exact path='/' element={<Home />}/>            
      </Routes>
      <div>
      </div>
    </div>
  );
}

export default App;

