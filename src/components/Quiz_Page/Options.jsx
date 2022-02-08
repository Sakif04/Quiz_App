import { Row ,Button} from "react-bootstrap";

export default function Options(){

const optionStyle={
   backgroundColor:'rgb(10, 82, 111)',padding:'.5rem',margin:'0.6rem 0',
}
    return(<>
            <Row>
               <Button style={optionStyle}>Hashem Abul kamal tamal</Button>
            </Row>
            <Row>
               <Button style={optionStyle}>Hashem Abul kamal tamal</Button>
            </Row>
            <Row>
            <Button style={optionStyle}>Hashem Abul kamal tamal</Button>
            </Row>
            <Row>
            <Button style={optionStyle}>Hashem Abul kamal tamal</Button>
            </Row>
      </>
    )
}