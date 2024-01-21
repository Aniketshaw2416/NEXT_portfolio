import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "./components/AboutSection";
import Image from "next/image";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "@/app/components/Footer"
import AchievementsSection from "@/app/components/AchievementsSection";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] items-center justify-between p-24 container ">
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
     <HeroSection/>

     <AboutSection/>
     <AchievementsSection/>
     <ProjectsSection/>
     <EmailSection/>
     <Footer/>
     
     </div>
    </main>
  );
}
