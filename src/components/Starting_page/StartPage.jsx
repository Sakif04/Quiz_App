import {Container,Button} from "react-bootstrap";
import TriviaType from "./TriviaType";
import SelectField from "./SelectField";
import Category from "./Category";
// import DifficultySelect from "./DifficultySelect";
import { useState } from "react";
export default function StartPage(){

    const difficulty=['Easy','Medium','Hard'];
    const [questionNumber,setQuestioNumber]=useState(10);

    return(

    <form action=""  className="form-api">
       <Container className="col-sm-10 bg-secondary purple"> 
            <h2 className="form-signin-heading text-center orange bg-secondary">Quiz APP </h2>
            <label htmlFor="trivia_amount orange" >Number of Questions:</label>
            <input type="number" name="trivia_amount" id="trivia_amount" className="form-control text-center" min="1" max="20" value={questionNumber} onChange={(e)=>setQuestioNumber(e.target.value)} />
            <br/>

            <Category />
    
            <br />

            <SelectField label='Difficulty' options={difficulty} />

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