import {Container,ButtonGroup,Card,Button} from "react-bootstrap";
import { useNavigate,useParams } from "react-router-dom";
 import { updateScore } from "../../../features/settings/reducer";
import {useDispatch} from "react-redux";
export default function Nav({amount}){
    const {id}=useParams();
    const navStyle={padding:'1rem',color:'#fff',fontSize:'1rem'};
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const cancelQuiz=(e)=>{
        e.preventDefault();
        dispatch(updateScore(0));
        navigate("../");
    }
    const moveToNextPage=(e)=>{
        e.preventDefault();

        if (parseInt(id)<amount){
            navigate("/q"+(parseInt(id)+1));
        }
        else{
            navigate("/r");

        }
    }
    return(
    <Card bg="secondary"style={navStyle}>
        <Container>
            <ButtonGroup>
                <Button onClick={cancelQuiz}className='mx-2' variant="danger" >Cancel</Button> 
                <Button onClick={moveToNextPage}className='mx-2' >Next</Button>
            </ButtonGroup>
        </Container>
    </Card>)
}