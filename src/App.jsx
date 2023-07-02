import './App.css'
import Navbar from './components/navbar/NavInfoBar'
import GetCatFacts from './api/GetCatFacts';

import 'bootstrap/dist/css/bootstrap.min.css';
import FooterInfoBar from './components/footer/FooterInfoBar';

function App() {


  return (
    <>
      <Navbar/>
      <GetCatFacts />
      <FooterInfoBar/>
    </>
  )
}

export default App
