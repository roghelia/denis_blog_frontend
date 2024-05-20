'use client'
import React, { useState } from 'react'

const page = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    
    async function createBlog(e) {
        e.preventDefault()
        const response = await fetch("http://localhost:8000/api/blogs/update", {
            body: JSON.stringify(
                title, author, description, image
            )
        }).then(console.log("success")).catch(console.log(error))
    }

    return (
        <form onSubmit={createBlog} className='text-center'>
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder='Title' /> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={author} onChange={(e) => {setAuthor(e.target.value)}} placeholder='Author'/> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder='Description'/> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={image} onChange={(e) => {setImage(e.target.value)}} placeholder='Image'/> <br /> <br />
            <button className='w-20 bg-slate-700 text-white  rounded-xl' type='submit'>Submit</button>
        </form>
    )
}

export default page