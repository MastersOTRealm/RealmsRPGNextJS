'use client'
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { toast } from "react-toastify";
import { Database, Tables, Enums } from "@/database.types";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function Navbar({ user }: { user: User | null }) {
    const supabase = createClient();
    const router = useRouter()

    async function handleLogout() {
        const {error} = await supabase.auth.signOut();
        if (error) {
            toast.error("Error logging out: " + error)
        }
        else {
          toast.success("logged out!")
        }
        router.push("/login")
    }

    return (
        <>
            <div className="w-full h-16 text-053357">
                    <div className="h-full flex flex-row justify-evenly items-center">
                      <div className="h-full mr-10 ml-10 flex justify-self-end justify-end items-center">
                          <Image src="/logo-mini.png" alt="logo-mini" width={50} height={50} />
                      </div>
                      <div className="h-full w-full flex justify-center items-center pl-17">
                        <a href="/login" className="mr-10">Characters</a>
                        <a href="/register" className="mr-10">Library</a>
                        <a href="/login" className="mr-10">Rules</a>
                        <a href="/register" className="mr-10">Codex</a>
                        <a href="/login" className="mr-10">Creators</a>
                        <a href="/register" className="mr-10">RM Tools</a>
                        <a href="/register" className="mr-10">Campaigns</a>
                      </div>
                      <div className="h-full mr-10 ml-10 flex justify-self-end justify-end items-center">
                        {user && 
                          <button onClick={() => {handleLogout()}} className="rounded-md p-2 hover:bg-blue-300">Logout</button>
                        }
                        {!user &&
                          <a href="/login">Login</a>
                        }
                        <Image src="/userIcon.png" alt="userIcon" width={12} height={12} className="ml-2"/>
                          {/* <a href="/register" className="">Register</a> */}
                      </div>
                    </div>
                </div>
        </>
    )
}