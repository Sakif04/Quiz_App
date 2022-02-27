import { Row,Button } from "react-bootstrap";

import { useDispatch,} from "react-redux";
import { updateScore } from "../../../features/settings/reducer";


export default function Option({option,clickedStatus,setClickStatus,isCorrect}){
    const dispatch=useDispatch();

    const optionStyle={
        width:'80rem',height:'2rem',backgroundColor:'rgb(40, 42, 42)',
        padding:'.5rem',border:'none',margin:'0.6rem 0rem'
    }
    
    
  
   
    const correctStyle={
        width:'80rem',height:'2rem',backgroundColor:'rgb(30, 206, 13)',color:"#fff",padding:'.5rem',border:'none',margin:'0.6rem 0rem'
    }
    const incorrectStyle={ 
        width:'80rem',height:'2rem',backgroundColor:'rgb(240, 0, 0)',color:"#fff",padding:'.5rem',border:'none',margin:'0.6rem 0rem'
    }
    let btnColor=isCorrect?correctStyle:incorrectStyle;
    
    

    const handleClick=(e)=>
    {  e.preventDefault();
       if(clickedStatus===false){
            setClickStatus(true);
            if(isCorrect){
                dispatch(updateScore(1));
            }
        }
       
    }
  
    
    return(
    <Row >
        <Button onClick={handleClick} style={clickedStatus?btnColor:optionStyle}>{option}
        </Button>
    </Row>)

}