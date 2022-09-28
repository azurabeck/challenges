import Home from './PAGES/Home';
import RPG from './PAGES/Rpg';
import Calc from './PAGES/Calculadora';


import Navbar from './GLOBAL/ORGANISM/Navbar';

import { GlobalStyle } from './ASSETS/style'
import { Routes,  Route } from "react-router-dom";


function App() {

  return (
      <>

          <Navbar />

          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/rpg" element={<RPG />}></Route>
            <Route path="/calculadora-iniciante" element={<Calc />}></Route>


          </Routes>

         
      </>         
  )
}

export default App
