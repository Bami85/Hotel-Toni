import React from 'react'
// Components hur de funkar att passa data som props

export default function IndexCommenst (){
    const showCommenst = {text:"show texten här", description:"du måste vissa all description här"}
    return(
        <div>
            <Commenst {...showCommenst} />
        </div>
    )
}


function Commenst ({text, description}){
    return(
        <div className="mt-6 text-large text-black-500"> 
            <h1>
                {text} 
                {description}
             </h1>
        </div>
    )
}
