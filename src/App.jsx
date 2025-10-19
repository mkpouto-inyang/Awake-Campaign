import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import ShareYourStory from './pages/ShareYourStory'
import AwakeChallenge from './pages/AwakeChallenge'
import CampaignEvents from './pages/CampaignEvents'
import EventDetail from './pages/EventDetail'
import Layout from './layouts/Layout'
import { AuthProvider } from './contexts/AuthContext'
import JoinTheMovementLayout from './layouts/JoinTheMovementLayout'
import StudioPage from './pages/Studio'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/about-us' element={<AboutUs/>}></Route>

                 <Route path="/join-the-movement" element={<JoinTheMovementLayout/>}>

                  <Route index element={<Donate />} />
                  <Route path="challenge" element={<AwakeChallenge />} />
                  <Route path="share-your-story" element={<ShareYourStory />} />
                </Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/campaign-events' element={<CampaignEvents/>}></Route>
                <Route path='/campaign-events/:eventId' element={<EventDetail/>}></Route>
              </Route>
                <Route path='/studio/*' element={<StudioPage />}></Route>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
