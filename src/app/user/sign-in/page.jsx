'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkLogin, setCheckLogin] = useState(false)
    const router = useRouter();

    async function signIn(e) {
        e.preventDefault()
        const response = await fetch("http://localhost:8000/api/users/sign-in", {
            body: JSON.stringify(
                email, password
            )
        })

        if(response.status == 200){
            setCheckLogin(true)
            router.push("/")
        } else {
            setCheckLogin(false)
            throw new Error("Invalid Login")
        }
    }

    return (
        <form onSubmit={signIn} className='text-center'>
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Author'/> <br /> <br />
            <input className='bg-slate-700 text-white  rounded-xl' type="text" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Description'/> <br /> <br />
            <button className='w-20 bg-slate-700 text-white  rounded-xl' type='submit'>Submit</button>
        </form>
    )
}

export default page