import { Nav } from "../components/landing/Nav"
import { Hero } from "../components/landing/Hero"
import { Features } from "../components/landing/Features"
import { Footer } from "../components/landing/Footer"
import { SkillGap } from "../components/landing/SkillGap"
import { InterviewPreview } from "../components/landing/InterviewPreview"

const LandingPage = () => {
  return (
    <div className="bg-black text-white">
      <Nav />
      <Hero />
      <Features />
      <SkillGap />
    <InterviewPreview />
      <Footer />
    </div>
  )
}

export default LandingPage