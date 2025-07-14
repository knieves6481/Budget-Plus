import './App.css'
import Purchases from '../components/displayItems';
import Home from '../components/home';
import NavBar from "../components/NavBar";
import SendPage from "../components/sendPage";
import imagePath from "./assets/icon.png";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
      <NavBar brandName="Budget Plus" 
        imageSrc={imagePath} 
        navItems={['Home', 'History', 'About', 'Contact']} />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Purchases />} />
          <Route path="/category/:name" element={<SendPage />} />
        </Routes>
      </div>
      

    </BrowserRouter>          

    </>
  )
}

export default App
