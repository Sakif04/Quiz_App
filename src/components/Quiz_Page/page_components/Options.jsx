import { Container} from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import Option from "./Option";
export default function Options({options,correctOption,qNumber}){


    return(<>
         <Container>
          {  (options)?
           options.map((option,id)=> <Option  key={id} option={option} correctOption={correctOption}/>):""}         
         </Container>
      </>
    )
}