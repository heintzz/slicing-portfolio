import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProfileSection from '../components/Profile'
import ProjectSection from '../components/SectionProjects'
import SkillsSection from '../components/SectionSkills'

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  )
}
