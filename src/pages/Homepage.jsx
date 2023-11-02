import Header from '../components/Header'
import MyCarousel from '../components/Carousel'
import ProjectSection from '../sections/ProjectSection'
import ServiceSection from '../sections/ServiceSection'
import EquipmentSection from '../sections/EquipmentSections'
import AboutSection from '../sections/AboutSection'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
      <section id={"home"}>
        <Header/> 
        <MyCarousel/>
        <section id={"projects"} >
          <ProjectSection/>
        </section>
        <section id={"services"}>
          <ServiceSection/>
        </section>
        <section id={"equipment"}>
          <EquipmentSection/>
        </section>
        <section id={"about"}>
        <AboutSection/>
        </section>
        <Footer id={"contact"}/>
      </section>

    </>

  )
}

export default Homepage
