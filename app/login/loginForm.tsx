"use client"
import { login, signup } from './actions'
import { toast } from 'react-toastify'

export default function LoginForm() {
    

    return (
        <>
             <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    minLength={6}
                    onInvalid={(e) => e.currentTarget.setCustomValidity("Password must be at least 6 characters")}
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                />
                <button formAction={login}>Log in</button>
                <button formAction={signup}>Sign up</button>
            </form>
        </>
    )
}