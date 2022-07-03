import React from 'react';

import { Navbar } from 'react-bootstrap';
import './styles/App.css';
//redux imports
import { useSelector } from 'react-redux';
import {Routes,BrowserRouter as Router,Route,Link} from 'react-router-dom';

// Import all the Pages
import Results from './pages/Results_Page/Results';
import Main from './pages/Quiz_Page/Quiz_page';
import Header  from './components/Header';
import StartPage from './pages/Starting_page/StartPage';


function App() {

  const score=useSelector((state)=>state.setting.score);
  return (
  <div className="App">
 
    <Router>
    <Navbar bg="secondary" className='col-sm-10 mx-auto' >
            
      <Link className="text-light mx-auto " to="/">Home</Link>
      <Link className="text-light mx-auto " to="/r">Results</Link>
      

    </Navbar>
    <Header/>    
      <Routes>
        <Route path="/r" element={<Results score={score}/>} />
        <Route  path="/" element={  <StartPage/>}/>      
        <Route  path='/q:id' element={<Main />} /> 
        
      </Routes>
    </Router>
  </div>
  );
}

export default App;
