import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import JoinTheMovement from './pages/JoinTheMovement'
import Contact from './pages/Contact'
import CampaignEvents from './pages/CampaignEvents'
import EventDetail from './pages/EventDetail'
import Layout from './layouts/Layout'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/about-us' element={<AboutUs/>}></Route>
                <Route path='/join-the-movement' element={<JoinTheMovement/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/campaign-events' element={<CampaignEvents/>}></Route>
                <Route path='/campaign-events/:eventId' element={<EventDetail/>}></Route>
              </Route>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
