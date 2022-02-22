import Options from "./page_components/Options"
import Question from "./page_components/Question";
import Nav from "./page_components/Nav";
import { useParams } from "react-router-dom";
import { Markup } from 'interweave';
import {getQuestions} from "../../features/settings/reducer";
import { Container} from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import UseData from "../../hooks/useData";

export default function Main(){   
    
    const shuffle=()=>Math.random-0.5;
    const {id}=useParams();

    const score=useSelector(state=>state.setting.score);
    const {
        category,
        difficulty,
        type,
        questionAmount,
        questions
        }=useSelector((state)=>state.setting);
        const dispatch=useDispatch();

        let apiUrl="api.php?amount="+questionAmount;
        
    if (category){
            apiUrl.concat("&category="+category)
    }
    if (difficulty){
            apiUrl.concat("&difficulty="+difficulty)
    }
    if (type){
            apiUrl.concat("&type="+type)
    }
    console.log(apiUrl);
        
    const {response}=UseData({url:apiUrl});
    if(response){
        dispatch(getQuestions(response.results))
    }
    let tempQuestion=null;

    if (questions){
            tempQuestion=questions[id-1]        
    }
    let question,answerOptions,correctAnswer,incorrectAnswers;
    if(tempQuestion){
            question=tempQuestion.question;
            correctAnswer=tempQuestion.correct_answer;
            incorrectAnswers=tempQuestion.incorrect_answers;
            answerOptions=[correctAnswer,...incorrectAnswers].sort(shuffle)
    }
    const questionStr=<Markup content={`${id}) ${question}`} />
    const main_style={backgroundColor:'rgb(108, 117, 125)',color:'#F9E4D4'}
    
    
    return(
    <Container className="col-sm-10" style={main_style}>
           <Container bg="secondary"><h2>{score}</h2></Container>
            <Question question={questionStr}/>
            <Options options={answerOptions} correctOption={correctAnswer}/>  
            <Nav/>     
    </Container>)

}