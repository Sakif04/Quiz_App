import React from 'react';
import Main from './components/Quiz_Page/Main';
import Header  from './components/Header';
import StartPage from './components/Starting_page/StartPage';
import { Navbar,Nav } from 'react-bootstrap';
import './styles/App.css';
import {Switch,BrowserRouter as Router,Route,Link} from 'react-router-dom';
function App() {
  return (
  <div className="App">
 
    <Router>
    <Navbar bg="secondary" className='col-sm-10 mx-auto' >
            
        <Link className="text-light mx-auto " to="/">Home</Link>
        <Link className="text-light mx-auto" to="/q">Question</Link>
      

    </Navbar>
    <Header/>    
      <Switch>

        <Route exact path="/">
          <StartPage/>
        </Route>

        <Route path='/q'> 
          <Main />
        </Route>

      </Switch>
    </Router>
  </div>
  );
}

export default App;
