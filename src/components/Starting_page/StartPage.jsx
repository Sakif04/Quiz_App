import {Container,Button} from "react-bootstrap";
import TriviaType from "./page_components/TriviaType";
import SelectField from "./page_components/SelectField";
import Category from "./page_components/Category";
import {changeAmount} from "../../features/settings/reducer"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function StartPage(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
   
   
    const difficultyOptions=[
        {id:'',name:'Any'},
        {id:'easy',name:'Easy'},
        {id:'medium',name:'Medium'},
        {id:'hard',name:'Hard'}];
        
    const [questionNumber,setQuestionNumber]=useState(10);
    const handleSubmit=(e)=>{
        
        navigate("/q1");

    }
    const handleInput=(e)=>{
        let target=e.target.value;
        setQuestionNumber(target);
        dispatch(changeAmount(target)); 
    }
    return(

    <form onSubmit={handleSubmit} className="form-api">
       <Container className="col-sm-10 bg-secondary purple"> 
            <h2 className="form-signin-heading text-center orange bg-secondary">Quiz APP </h2>
            <label htmlFor="trivia_amount orange" >Number of Questions:</label>
            <input type="number" name="trivia_amount" id="trivia_amount" className="form-control text-center" min="1" max="50" value={questionNumber} onChange={handleInput} />
            <br/>
            <Category />
    
            <br />

            <SelectField label='Difficulty' options={difficultyOptions}  />

            <br />

            <TriviaType />
            
            <br />
           
            <Button className="btn-lg btn-primary my-3 " type="submit">
                Start Quiz
            </Button>
       </Container>              
    </form>
    )
}