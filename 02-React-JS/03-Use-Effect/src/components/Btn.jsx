import React, { useEffect, useState } from 'react'

const Btn = ({title}) => {
    const [counter , setCounter] = useState(0)
    const [counter2 , setCounter2] = useState(0)

    // useEffect(()=>{
    //     console.log("component mounted")
    //     return ()=>{
    //         console.log("component unmounted");
            
    //     }
    // } , [counter]) // dependency array



    useEffect(()=>{
        console.log("component mounted");

        return ()=>{
            console.log("unmounted");      
        }
        
    } , [counter])

    
    return (
        <div className='border border-black rounded p-5 container'>
        <button className='btn btn-primary' onClick={()=> setCounter(counter + 1)}>{title} {counter} {counter2}</button>
        <button onClick={()=> setCounter2(counter2 + 1)}>counter 2 {counter2}</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {counter} Consequuntur esse voluptates veritatis officia sequi {counter2} sit accusantium quae. Distinctio natus voluptatum illo, libero incidunt eos sunt nobis, {counter} provident consectetur magnam quaerat.</p>
        </div>
    )
}

export default Btn


// component mount hota waqt agar koi specific task krwana ha to use effect use kronga.
// use effect 2 arguments leta haa pehla ma callback dosra depency array
// dependency array optional haa. agar ma dependency array naa do to is component ma jitni bhi states update hongi to use effect dobara chal jayega
// empty dependency array agar ma deta hoo to jab component mount hoga aik hi dafa use effect chal jayega.
// use effect by default 2 dafa react.strickmode ki waja sa chal rha tha.
// component unmount krta waqt agar koi specific task krwana haa to useffect ka undar function return krdo 