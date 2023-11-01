
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />   
        <Route path='/contact-form' element={<ContactPage />} /> 
      </Routes>  
      </BrowserRouter>
  )
}

export default App
