
import { Route, Routes  } from 'react-router-dom'

import './Reset.css';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
function App() {
  return (
    <div className="App">  
     <Header/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          
          {/* <Route path="/loading" element={<Loading />} /> */}

       </Routes>
  
    </div>
  );
}

export default App;
