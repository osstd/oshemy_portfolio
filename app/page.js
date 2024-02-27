import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from"./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
      <FooterSection/>
    </main>
  );
}
