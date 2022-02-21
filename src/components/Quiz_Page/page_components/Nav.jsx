import {Container,ButtonGroup,Card,Button} from "react-bootstrap";
import { useNavigate,useParams } from "react-router-dom";
export default function Nav(){
    const {id}=useParams();
    const navStyle={/**background:'#3222f3',**/padding:'1rem',color:'#fff',fontSize:'1rem'}
    const navigate=useNavigate();
    const cancelQuiz=(e)=>{
        e.preventDefault();
        navigate("../")
    }
    const moveToNextQuestion=(e)=>{
        e.preventDefault();
        navigate("/q"+(parseInt(id)+1))
    }
    return(
    <Card bg="secondary"style={navStyle}>
        <Container>
            <ButtonGroup>
                <Button onClick={cancelQuiz}className='mx-2' variant="danger" >Cancel</Button> 
                <Button onClick={moveToNextQuestion}className='mx-2' >Next</Button>
            </ButtonGroup>
        </Container>
    </Card>)
}