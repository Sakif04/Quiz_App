// import { Select,MenuItem,InputLabel } from "@mui/material";
import { useState } from "react";
export default function SelectField({label,options}){
    const [select,setSelect]=useState(options[0]);
    const changeSelect=(e)=>{setSelect(e.target) }
    return(
<>
    <label htmlFor={label}>{label}</label>
    <select name="" id="" className="form-control" value={select} onChange={changeSelect}>       
    {options.map((option,key)=><option key={key} value={option}>{option}</option>)}
    </select>
</>
)

}