import { createClient } from "@/utils/supabase/server";
import LoginForm from "./LoginForm"
import Navbar from "../(components)/Navbar";

export default async function login() {
  const supabase = createClient()
  const { data: { user } } = await (await supabase).auth.getUser();


    return (
        <>
            <div className="shadow">
                <Navbar user={user}/>
            </div>
            <div className="h-screen">
                <div className="flex justify-center items-center h-10/12">
                    <LoginForm/>
                </div>
            </div>
        </>
    )
}