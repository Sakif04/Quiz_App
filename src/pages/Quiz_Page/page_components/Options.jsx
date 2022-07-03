import { useState ,memo} from "react";
import {Container} from "react-bootstrap";
import Option from "./Option";
import { useParams } from "react-router-dom";

 function Options({options,correctOption}){
  const [clickedStatus,setClickStatus]=useState(false);
  const {id}=useParams();
  const [page,setPage]=useState(id);
  if (page!==id){
      setClickStatus(false)        
      setPage(id);
  }
  

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

export default memo(Options);