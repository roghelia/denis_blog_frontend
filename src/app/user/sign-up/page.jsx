import React from 'react'

const page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedin, setLoggedIn] = useState(false)
    
    async function signUp(e) {
        e.preventDefault()
        //receives response and as per the status, we set the state and work on frontend accordingly.
        const response = await fetch("http://localhost:8000/api/users/sign-up", {
            body: JSON.stringify(
                name, email, password
            )
        })

        // here we set conditions so that we can manage the login state.
        if(response.status == 200) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }

    return (
        <form onSubmit={signUp} className='text-center'>
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Title' /> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Author'/> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Description'/> <br /> <br />
            <button className='w-20 bg-slate-700 text-white  rounded-xl' type='submit'>Submit</button>
        </form>
    )
}

export default page