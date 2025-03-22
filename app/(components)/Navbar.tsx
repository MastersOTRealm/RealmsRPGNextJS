import Image from "next/image";

export default function Navbar() {

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
                          <a href="/login">Login</a>
                          {/* <a href="/register" className="">Register</a> */}
                      </div>
                    </div>
                </div>
        </>
    )
}