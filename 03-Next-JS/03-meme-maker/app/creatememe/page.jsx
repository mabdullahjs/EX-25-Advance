"use client"

import React, { useRef, useState } from 'react'

const Creatememe = ({ searchParams }) => {
    const [img , setImg] = useState('')
    const text1 = useRef()
    const text2 = useRef()


    // https://api.imgflip.com/caption_image?template_id=<memeId>&username=<imgflipusername>&password=<imgflippassword>&text0=<text1FromUser>&text1=<text2FromUser&gt
    const createMeme = async (event)=>{
        event.preventDefault()
        console.log(text1.current.value);
        console.log(text2.current.value);

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}` , {
            method: 'POST'
        })
        const response = await data.json()
        console.log(response.data.url);
        setImg(response.data.url)
        
        

    }
    return (
        <>
            <div>Creatememe {searchParams.url}</div>
            <img className='w-[300px]' src={searchParams.url} alt="meme-image" />

            <form onSubmit={createMeme}>
                <input type="text" placeholder='enter text 1' ref={text1} />
                <input type="text" placeholder='enter text 2' ref={text2} />
                <button type='submit'>create meme</button>
            </form>
            {img && <img src={img} alt="final meme"/>}
        </>
    )
}

export default Creatememe