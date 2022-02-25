import { Row } from "react-bootstrap";


export default function Question({question}){
    return(
        <Row>       
            <h4 id="question" className="py-3 ">{question}</h4>
        </Row>
    )
}