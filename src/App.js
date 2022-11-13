import "./App.css";
import SplashScreen from "./Components/Index/SplashScreen";
import Main from "./Components/Index/Main";
import Header from "./Components/Base/Header";
import Discover from "./Components/Index/Discover";
import GetStarted from "./Components/Index/GetStarted";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="App">
        <Header />

        <main>
           <Main/> 
           <Discover/> 
          <GetStarted />
        </main>
      </div> */}

      <Header />

      

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </>
  );
}

export default App;
