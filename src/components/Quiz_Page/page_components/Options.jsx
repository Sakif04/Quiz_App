import {Container} from "react-bootstrap";
import Option from "./Option";
import { useState } from "react";
export default function Options({options,correctOption}){
  const [clickedStatus,setClickStatus]=useState(false);
  
    return(<>
         <Container>
          {  (options)?
            options.map((option,id)=> 
            option===correctOption?
            <Option clickedStatus={clickedStatus} isCorrect setClickStatus={setClickStatus} key={id} option={option} />
            :
            <Option clickedStatus={clickedStatus} setClickStatus={setClickStatus} key={id} option={option} />)
            :""}         
         </Container>
      </>
    )
}