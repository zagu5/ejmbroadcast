import Header from '../components/Header'
import MyCarousel from '../components/Carousel'
import ProjectSection from '../sections/ProjectSection'
import ServiceSection from '../sections/ServiceSection'
import EquipmentSection from '../sections/EquipmentSections'

const Homepage = () => {
  return (
    <>
       <Header/> 
       <MyCarousel/>
       <ProjectSection/>
       <ServiceSection/>
       <EquipmentSection/>
    </>

  )
}

export default Homepage
