import { Row,Button } from "react-bootstrap"
import {  useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateScore } from "../../../features/settings/reducer";

export default function Option({option,correctOption}){
    const dispatch=useDispatch();
    const normalStyle={
        width:'80rem',height:'2rem',backgroundColor:'rgb(40, 42, 42)',padding:'.5rem',border:'none',margin:'0.6rem 0rem'
    }
    
    const [optionStyle,setStyle]=useState(normalStyle);
    const {id}=useParams();
    const [page,setPage]=useState(id);
    if (page!==id){
        setStyle(normalStyle)
        setPage(id);
    }
    
   
    
    const correctStyle={ width:'80rem',height:'2rem',backgroundColor:'rgb(30, 186, 13)',color:"#fff",padding:'.5rem',border:'none',margin:'0.6rem 0rem'
    }
    const incorrectStyle={ width:'80rem',height:'2rem',backgroundColor:'rgb(240, 42, 42)',color:"#fff",padding:'.5rem',border:'none',margin:'0.6rem 0rem'
}

    const handleClick=(e)=>
    {  e.preventDefault();
       
       if(option===correctOption){
        dispatch(updateScore(1))
        setStyle(correctStyle);
       }
       else{
        setStyle(incorrectStyle);
        dispatch(updateScore(-1))
       }
    }
 
    
    return(<Row >
    <Button onClick={handleClick} style={optionStyle} >{option}</Button>
    </Row>)



}