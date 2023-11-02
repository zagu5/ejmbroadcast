
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />  
        <Route errorElement={<errorElement/>}/> 
        <Route path='/contact-form' element={<ContactPage />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>  
      </BrowserRouter>
  )
}

export default App
