import {Container} from "react-bootsrap";
import TriviaType from "./TriviaType";
import EncodingType from "./EncodingType";
import Category from "./Category";
import DifficultySelect from "./DifficultySelect";
export default function StartPage(){
    return(

    <form action="" method="post" className="form-api">
       <Container className="col-sm-5 bg-secondary purple"> 
            <h2 className="form-signin-heading text-center orange bg-secondary">Quiz APP </h2>
            <label for="trivia_amount orange" >Number of Questions:</label>
            <input type="number" name="trivia_amount" id="trivia_amount" className="form-control text-center" min="1" max="20" value="10" />
            <br/>
       
            <Category />
    
            <br />

           <DifficultySelect />

                <br />

            <TriviaType />
            
            <br />
            <EncodingType />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Start Quiz</button>
       </Container>
               
    </form>
    )
}