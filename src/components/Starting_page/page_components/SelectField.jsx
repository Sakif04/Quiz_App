import {selectCategory,selectDifficulty,selectType} from "../../../features/settings/reducer";
import { useState } from "react";
import { useSelector,useDispatch} from "react-redux";

export default function SelectField({label,options}){

    const dispatch=useDispatch();
    const state=useSelector((s)=>s.setting);
    console.log(state);
    
    
    const [selected,setSelect]=useState(options[0]);
    const changeSelect=(e)=>
    {
        let target=e.target.value;
        setSelect(e.target.value);
        
        switch(label){
            case "Select Category":
                dispatch(selectCategory(target)) ;
                break;
            case "Difficulty":
                dispatch(selectDifficulty(target)) ;
                break;
            case "Select Type":
                dispatch(selectType(target));
                break;
            
            default:
                return
        }
        console.log(state);
    }
    
    return(
<>
    <label htmlFor={label}>{label}</label>
    <select name="" id="" className="form-control" value={selected} onChange={changeSelect}>       
    {options.map((option,key)=><option key={key} value={option.id}>{option.name}</option>)}
    </select>
</>
)

}