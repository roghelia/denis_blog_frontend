import React, { useState } from 'react'

const page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userUpdated, setUserUpdated] = useState(false)
    
    async function updateUser(e) {
        e.preventDefault()
        //receives response and as per the status, we set the state and work on frontend accordingly.
        const response = await fetch("http://localhost:8000/api/users/update", {
            body: JSON.stringify(
                name, email, password
            )
        })
        if(response.status == 200) {
            userUpdated(true)
        } else {
            userUpdated(false)
        }
    }

    return (
        <form onSubmit={updateUser} className='text-center'>
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Title' /> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Author'/> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Description'/> <br /> <br />
            <button className='w-20 bg-slate-700 text-white  rounded-xl' type='submit'>Submit</button>
        </form>
    )
}

export default page