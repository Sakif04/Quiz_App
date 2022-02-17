import Options from "./Options"
import Question from "./Question";
import Nav from "./Nav";
import { Container} from 'react-bootstrap';
import { useSelector } from "react-redux";
export default function Main(){   
    
    const main_style={backgroundColor:'rgb(108, 117, 125)',color:'#F9E4D4'}
    const score=useSelector(state=>state.setting.score);
    console.log(score);
    return(
    <Container className="col-sm-10" style={main_style}>
           <Container bg="secondary"><h2>{score}</h2></Container>
            <Question/>
            <Options/>  
            <Nav/>     
    </Container>)


}