import {Card,Button} from "react-bootstrap";
import { updateScore } from "../../features/settings/reducer";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
export default function Results(){
    const score=useSelector((state)=>state.setting.score)
    const navigate=useNavigate();
    const dispatch=useDispatch();
   
    const restart=(e)=>{
        e.preventDefault();
        dispatch(updateScore(-score));
        navigate("../")

    }
    return(
        
           <Card className="container col-sm-10 bg-secondary  text-light">
            <h2>{score}</h2>
            <Button onClick={restart} className='mx-2' variant="danger" >Restart</Button> 
           </Card>
        
    )

}
