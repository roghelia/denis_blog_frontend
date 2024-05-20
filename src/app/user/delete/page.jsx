'use client'
import React, { useState } from 'react'

const page = () => {
    const [title, setTitle] = useState('')
    
    async function deleteBlog(e) {
        e.preventDefault()
        await fetch("http://localhost:8000/api/blogs/delete", {
            body: JSON.stringify(
                title
            )
        }).then(console.log("success")).catch(console.log(error))
    }

    return (
        <form onSubmit={deleteBlog} className='text-center'>
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder='Title' /> <br /> <br />
            <button className='w-20 bg-slate-700 text-white  rounded-xl' type='submit'>Submit</button>
        </form>
    )
}

export default page