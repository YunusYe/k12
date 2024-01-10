import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbars from './components/Navbar/Navbars'
import Anasayfa from "./pages/Anasayfa"
import Hakkimizda from './pages/hakkımızda/hakkimizda'
import Neyapiyoruz from './pages/neyapıyoruz/neyapiyoruz'
import Nasilyapiyoruz from "./pages/nasılyapıyoruz/nasilyapiyoruz"

import Okul from "./pages/Anasayfapages/okul"
import Edebiyat from "./pages/Anasayfapages/edebiyat"
import Tanzimat from "./pages/Anasayfapages/tanzimat"
import OkumaAgaci from "./pages/Anasayfapages/okumaagaci"


import Footer from './components/Footer/footer'
import Kvkk from './pages/Kvkk'
import MarkaKullanimi from './pages/MarkaKullanimi'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbars/>
      
      <Routes>
        <Route path="Anasayfa" element={<Anasayfa/>} />
        <Route path="Hakkımızda" element={<Hakkimizda/>} />
        <Route path="NeYapıyoruz" element={<Neyapiyoruz/>} />
        <Route path="NasılYapıyoruz" element={<Nasilyapiyoruz/>} />
        <Route path='MarkaKullanımı' element={<MarkaKullanimi/>} />
        <Route path="Kvkk" element={<Kvkk/> } />

        <Route path='Okul' element={<Okul/>}/>
        <Route path='Edebiyat' element={<Edebiyat/>}/>
        <Route path='Tanzimat' element={<Tanzimat/>}/>
        <Route path='OkumaAgaci' element={<OkumaAgaci/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
