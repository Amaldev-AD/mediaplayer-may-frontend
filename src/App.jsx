
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landing_page from './pages/Landing_page'
import Homepage from './pages/Homepage'
import WatchHistorypage from './pages/WatchHistorypage'

function App() {
 

  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Landing_page/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/watch-history' element={<WatchHistorypage/>}/>
    </Routes>


    <Footer/>  
    </>
  )
}

export default App
