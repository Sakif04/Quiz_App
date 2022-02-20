import { Container,Row ,Button} from "react-bootstrap";

export default function Options({options}){

const optionStyle={
   width:'80rem',height:'2rem',backgroundColor:'rgb(40, 42, 42)',padding:'.5rem',border:'none',margin:'0.6rem 0rem',
}
    return(<>
         <Container>
          {/* { options.map((option,id)=> <Row >
               <Button style={optionStyle}>{option}Hashem Abul kamal tamal</Button>
            </Row>)} */}
            <Row>
               <Button style={optionStyle}>Hashem Abul kamal tamal</Button>
            </Row>
            <Row>
            <Button style={optionStyle}>Hashem Abul kamal tamal</Button>
            </Row>
            <Row>
            <Button style={optionStyle}>Hashem Abul kamal tamal</Button>
            </Row>
         </Container>
      </>
    )
}