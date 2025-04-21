import Image from "next/image";
import Navbar from "./(components)/Navbar";
import { createClient } from "@/utils/supabase/server";
// import { useState } from "react";
// import Carousel from "./(components)/Carousel";
// import { Database } from "@/database.types";

export default async function Home() {
  const supabase = createClient()
  const { data: { user } } = await (await supabase).auth.getUser();

  // const reviews: Array<Database['public']['Tables']['review']> = await getReviews()

  return (
    <>
    <header id="header"></header>
    <Navbar user={user}/>
    <main className="">
    <div className="w-full h-[400px] flex bg-[url('/vista.png')] bg-cover bg-center justify-center drop-shadow-2xl">
      <div className="w-full flex justify-center items-center">
        {/* <h2 className="text-5xl font-extrabold row p-8">Welcome to Realms</h2>
        <p className="row">Explore the world of Realms, create your characters, and define their powers.</p>
        <a href="/login" >Get Started</a> */}
        <Image className="w-1/2 h-fit" src="/logo-full.png" alt="logo-full" width={242} height={100}/>
      </div>
    </div>
    <section className="bg-[#D9D9D9] flex items-center">
      <div className="flex flex-row justify-evenly p-20">
        <div className="w-1/5 p-px bg-gradient-to-br from-[#9B988A]">
          <div className="p-5 h-full bg-[#D9D9D9]">
              <h3 className="font-[Nova Flat] text-[#767468] pb-3">CREATE CHARACTERS</h3>
              <p className="font-[Nunito] text-[#053357]">Design your unique characters with detailed attributes and backgrounds.</p>
          </div>
        </div>
        <div className="w-1/5 p-px bg-gradient-to-tl from-[#9B988A]">
          <div className="p-5 h-full bg-[#D9D9D9]">
              <h3 className="font-[Nova Flat] text-[#767468] pb-3">DEFINE POWERS</h3>
              <p className="font-[Nunito] text-[#053357]">Customize and create powerful abilities for your characters.</p>
          </div>
        </div>
        <div className="w-1/5 p-px bg-gradient-to-br from-[#9B988A]">
          <div className="p-5 h-full bg-[#D9D9D9]">
              <h3 className="font-[Nova Flat] text-[#767468] pb-3">JOIN ADVENTURES</h3>
              <p className="font-[Nunito] text-[#053357]">Participate in epic adventures and quests with other players.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="">
      {/* <Carousel reviews={reviews}/> */}
    </section>

    
    </main>
    <footer id="footer" className="h-16 bg-[#C4C4C4]"></footer>
    </>
  );
}
