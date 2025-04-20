"use client"
import { login, signup } from './actions'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const [mode, setMode] = useState<'login' | 'signup'>('login')
    const router = useRouter()


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log("logging in")

        try {
            const action = mode === 'login' ? login : signup
            if (mode === 'login') {
                toast.loading("logging in...")
            } else if (mode === 'signup') {
                toast.loading("registering...")
            }
            await action(formData);
            toast.dismiss()
            toast.success("Success!")
            if (mode === 'signup') {
                toast.info("Please confirm your email at the link in your inbox to login", {
                    autoClose: 20000
                })
            }
            router.push('/')
        } catch (error) {
            toast.error("Error logging in...")
            toast.error("" + error)
            console.error(error)
        }
        
    }
    

    return (
        <>
             <form onSubmit={handleSubmit} className="flex flex-col p-10 border-2 rounded-md shadow-2xl bg-white">
                <div className="p-5">
                    <label htmlFor="email" className="pr-2 font-bold">Email:</label>
                    <input id="email" name="email" type="email" required className="border-2 rounded-md"/>
                </div>
                <div className="pb-5">
                    <label htmlFor="password" className="pr-2 font-bold">Password:</label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        required 
                        minLength={6}
                        onInvalid={(e) => e.currentTarget.setCustomValidity("Password must be at least 6 characters")}
                        onInput={(e) => e.currentTarget.setCustomValidity("")}
                        className="border-2 rounded-md"
                    />
                </div>
                <div className="flex flex-row justify-evenly">
                    <button type="submit" onClick={() => setMode('login')} className="border-2 rounded-md p-2 hover:bg-blue-300">Log in</button>
                    <button type="submit" onClick={() => setMode('signup')} className="border-2 rounded-md p-2 hover:bg-blue-300">Sign up</button>
                </div>
            </form>
        </>
    )
}