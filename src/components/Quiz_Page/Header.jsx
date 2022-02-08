import {Container,Row} from 'react-bootstrap';
export default function Header(){
    const header_styles={backgroundColor:'#313552', color:'#fff',padding:'1rem',textAlign:'center',};
return(
<>
    <Container style={header_styles} >   
    <Row ><h1>QUIZ APP</h1></Row>   
    </Container>
</>)
}