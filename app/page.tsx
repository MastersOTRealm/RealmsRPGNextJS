import Image from "next/image";

export default function Home() {
  return (
    <>
    <header id="header"></header>
    <main className="">
      <div className="w-full h-16 text-053357">
        <div className="h-full flex flex-row justify-center items-center">
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
    <div className="w-full h-[50vh] flex bg-[url('/vista.png')] bg-cover bg-center justify-center">
      <div className="w-full flex justify-center items-center">
        {/* <h2 className="text-5xl font-extrabold row p-8">Welcome to Realms</h2>
        <p className="row">Explore the world of Realms, create your characters, and define their powers.</p>
        <a href="/login" >Get Started</a> */}
        <Image className="w-1/2 h-fit" src="/logo-full.png" alt="logo-full" width={242} height={100}/>
      </div>
    </div>
    <section >
        <div >
            <h3>Create Characters</h3>
            <p>Design your unique characters with detailed attributes and backgrounds.</p>
        </div>
        <div >
            <h3>Define Powers</h3>
            <p>Customize and create powerful abilities for your characters.</p>
        </div>
        <div >
            <h3>Join Adventures</h3>
            <p>Participate in epic adventures and quests with other players.</p>
        </div>
    </section>
    </main>
    <footer id="footer"></footer>
    </>
  );
}
