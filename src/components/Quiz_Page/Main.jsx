import Options from "./Options"
import Question from "./Question";
import Nav from "./Nav";
import {Container} from 'react-bootstrap';
export default function Main(){   
    
    const main_style={backgroundColor:'#1572A1',color:'#F9E4D4'}
    
    return(
    <Container style={main_style}>
        <Question/>
        <Options/>  
        <Nav/>  
    </Container>)


}