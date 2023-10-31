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
       <Header/> 
       <MyCarousel/>
       <ProjectSection/>
       <ServiceSection/>
       <EquipmentSection/>
       <AboutSection/>
       <Footer/>
    </>

  )
}

export default Homepage
