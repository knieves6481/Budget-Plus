import './App.css'
import Purchases from '../components/displayItems';
import NavBar from "../components/NavBar";
import imagePath from "./assets/icon.png";

function App() {


  return (
    <>
    
      <NavBar brandName="Budget Plus" 
        imageSrc={imagePath} 
        navItems={['Home', 'About', 'History', 'Contact']} />
      <div>
        <Purchases />
      </div>

    </>
  )
}

export default App
