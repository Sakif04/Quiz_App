import { useEffect, useState } from "react";

export default function UseData({url}){
    const baseUrl='https://opentdb.com/';
    const [response,setResponse]=useState(null);
    const [err,setErr]=useState(null);
    const [loading,setLoading]=useState(true);
    const API=`${baseUrl}${url}`;
 
    useEffect(()=>{
        fetch(API)
        .then((res=>res.json()))
        .then((res)=>{
            setResponse(res);
        }
            )
        .catch((e)=>setErr(e))
        .finally(()=>setLoading(false))

    },[url,API])

    return({response,err,loading})

}