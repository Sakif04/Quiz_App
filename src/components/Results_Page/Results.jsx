import {Card,Button} from "react-bootstrap";
import { Chart, registerables } from 'chart.js';
import { updateScore } from "../../features/settings/reducer";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);
export default function Results(){
    const score=useSelector((state)=>state.setting.score)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const questionAmount=useSelector(state=>state.setting.questionAmount);
    const incorrect=questionAmount-score;
    const restart=(e)=>{
        e.preventDefault();
        dispatch(updateScore(-score));
        navigate("../")

    }
    return(
    <> 
           <Card className="container col-sm-10 bg-secondary  text-light">
            <h2>{score}</h2>
                <Button onClick={restart} className='mx-2' variant="danger" >Restart</Button> 
           </Card>
           <Card className="container col-sm-10 text-primary">
                <Bar data={{
                    labels:["correct","incorrect"],
                    datasets:[
                        {
                          label: 'Succes Diagram',
                          data: [score,incorrect],
                          backgroundColor: ["rgba(5, 200, 0, 0.9)","rgba(255, 0, 0, 0.9)"]
                            
                        }]
                }} 
                options={{
                    maintainAspectRatio: false,
                    
                  }}/>
           </Card>
    </>
        
    )

}
