import "./App.css";
import SplashScreen from "./Components/Index/SplashScreen";
import Main from "./Components/Index/Main";
import Header from "./Components/Base/Header";
import Discover from "./Components/Index/Discover";
import GetStarted from "./Components/Index/GetStarted";
import EnergyLevel from "./Components/Index/EnergyLevel";

import {Route, Routes } from "react-router-dom";
import StressLevel from "./Components/Index/StressLevel";
import WhatNext from "./Components/Index/WhatNext";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/energyLevel" element={<EnergyLevel/>} />
        <Route path="/stressLevel" element={<StressLevel/>} />
        <Route path="/whatNext" element={<WhatNext/>} />
      </Routes>
    </>
  );
}

export default App;
