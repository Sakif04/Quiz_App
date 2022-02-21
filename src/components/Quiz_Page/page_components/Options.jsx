import { Container,Row ,Button} from "react-bootstrap";

export default function Options({options}){

const optionStyle={
   width:'80rem',height:'2rem',backgroundColor:'rgb(40, 42, 42)',padding:'.5rem',border:'none',margin:'0.6rem 0rem',
}
    return(<>
         <Container>
          {  (options)?
           options.map((option,id)=> <Row key={id+1} >
               <Button  style={optionStyle}>{option}</Button>
            </Row>):""}
            
         </Container>
      </>
    )
}