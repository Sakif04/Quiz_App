import {Container,ButtonGroup,Card,Button} from "react-bootstrap";

export default function Nav(){

    const navStyle={/**background:'#3222f3',**/padding:'1rem',color:'#fff',fontSize:'1rem'}

    return(
    <Card bg="secondary"style={navStyle}>
        <Container>
            <ButtonGroup>
                <Button className='mx-2' variant="danger" >Cancel</Button> 
                <Button className='mx-2' >Next</Button>
            </ButtonGroup>
        </Container>
    </Card>)
}