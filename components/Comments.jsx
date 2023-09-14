import { Data } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react'
// Components hur de funkar att passa data som props

export default function IndexCommenst (){
    const showCommenst = {text:"show texten här", description:"du måste vissa all description här"}
    return(
        <div>
            <Commenst {...showCommenst} />
        </div>
    )
}


function Commenst ({text, completed, description}){
    const [textState, setTextState] = useState(text);
    useEffect (()=>{
        setTextState(`${text} ${new Data()}`);

    },[]);
    return(
        <div className= {completed}> 
            <h1>
                {text} 
             </h1>
        </div>
    )
}
