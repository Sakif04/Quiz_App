import Options from "./Options"
import Question from "./Question";
import Nav from "./Nav";
import {Container} from 'react-bootstrap';
export default function Main(){   
    
    const main_style={backgroundColor:'rgb(108, 117, 125)',color:'#F9E4D4'}
    
    return(
    <Container className="col-sm-10" style={main_style}>
       
            <Question/>
            <Options/>  
            <Nav/>  
       
    </Container>)


}