import AboutHero from "../../Components/About/AboutHero"
import CallToAction from "../../Components/About/CallToAction"
import MissionStatement from "../../Components/About/MissionStatement"
import TeamSection from "../../Components/About/TeamSection"
import WhyChooseUs from "../../Components/About/WhyChooseUs"

const About = () => {
  return (
    <div>
       <AboutHero />
      <MissionStatement />
      <WhyChooseUs />
      <CallToAction />
      <TeamSection />
    </div>
  )
}

export default About