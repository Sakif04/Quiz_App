import React from 'react';
import Main from './components/Quiz_Page/Quiz_page';
import Header  from './components/Header';
import StartPage from './components/Starting_page/StartPage';
import { Navbar } from 'react-bootstrap';
import './styles/App.css';
import { useSelector } from 'react-redux';
import {Routes,BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Results from './components/Results_Page/Results';


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
