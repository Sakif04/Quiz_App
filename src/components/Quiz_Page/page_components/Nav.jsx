import {Container,ButtonGroup,Card,Button} from "react-bootstrap";
import { useNavigate,useParams } from "react-router-dom";
 import { updateScore } from "../../../features/settings/reducer";
import {useSelector,useDispatch} from "react-redux";
export default function Nav(){
    const {id}=useParams();
    const navStyle={padding:'1rem',color:'#fff',fontSize:'1rem'};
    const questionNum=useSelector((state)=>state.setting.questionAmount);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const cancelQuiz=(e)=>{
        e.preventDefault();
        dispatch(updateScore(0));
        navigate("../");
    }
    const moveToNextPage=(e)=>{
        e.preventDefault();
        if (id>=questionNum){
            navigate("/r");
        }
        else{
            navigate("/q"+(parseInt(id)+1))
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