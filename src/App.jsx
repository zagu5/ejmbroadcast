
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import EquipmentPage from './pages/EquipmentPage'
import AboutPage  from './pages/AboutPage'

function App() {

  return (
    <BrowserRouter basename="/ejmbroadcast">
      <Routes>
        <Route path='/' element={<Homepage />} />  
        {/* <Route errorElement={<errorElement/>}/>  */}
        <Route path='/contact-form' element={<ContactPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage/>} />
        <Route path="/services/:id" element={<ServicePage/>}/>
        <Route path="/equipment/:type" element={<EquipmentPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<Homepage/>} />
      </Routes>  
      </BrowserRouter>
  )
}

export default App
