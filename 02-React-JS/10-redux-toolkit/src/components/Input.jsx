import React, { useState } from 'react'

const Input = ({placeholder , label , func}) => {
    const [val , setVal] = useState('')
  return (
    <div style={{margin: '20px'}}>
    <label htmlFor="input">
        {label}:
        <input id='input' type="text" placeholder={placeholder} onChange={(e)=>setVal(e.target.value)} />
        <button onClick={()=>func(val)}>click</button>
    </label>
    </div>
  )
}

export default Input