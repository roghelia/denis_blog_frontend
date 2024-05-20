import React, { useState } from 'react'

const page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [deleted, setDeleted] = useState(false)
    
    async function signUp(e) {
        e.preventDefault()
        //receives response and as per the status, we set the state and work on frontend accordingly.
        const response = await fetch("http://localhost:8000/api/users/delete", {
            body: JSON.stringify(
                email, password
            )
        })

        if(response.status == 200){
            setDeleted(true)
        } else {
            setDeleted(false)
        }
    }

    return (
        <form onSubmit={signUp} className='text-center'>
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Author'/> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Description'/> <br /> <br />
            <button className='w-20 bg-slate-700 text-white  rounded-xl' type='submit'>Submit</button>
        </form>
    )
}

export default page