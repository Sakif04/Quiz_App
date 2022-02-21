import React from 'react';
import Main from './components/Quiz_Page/Main';
import Header  from './components/Header';
import StartPage from './components/Starting_page/StartPage';
import { Navbar } from 'react-bootstrap';
import './styles/App.css';
import {Routes,BrowserRouter as Router,Route,Link} from 'react-router-dom';
function App() {
  return (
  <div className="App">
 
    <Router>
    <Navbar bg="secondary" className='col-sm-10 mx-auto' >
            
        <Link className="text-light mx-auto " to="/">Home</Link>
        <Link className="text-light mx-auto" to="/q">Question</Link>
      

    </Navbar>
    <Header/>    
      <Routes>

        <Route  path="/" element={  <StartPage/>}/>
        
        <Route  path='/q:id' element={<Main />} /> 
        
      </Routes>
    </Router>
  </div>
  );
}

export default App;
