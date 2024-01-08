import { useState } from "react";
import DataProvider from "./DataProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import S20Page from "./components/ProductsPages/samsung/S20Page";
import S23UPage from "./components/ProductsPages/samsung/S23UPage";
import S23Page from "./components/ProductsPages/samsung/S23Page";
import FoldPage from "./components/ProductsPages/samsung/FoldPage";
import IPhone13Page from "./components/ProductsPages/iphone/IPhone13Page";
import IPhone12Page from "./components/ProductsPages/iphone/IPhone12Page";
import IPhone11Page from "./components/ProductsPages/iphone/IPhone11Page";
import IPhoneXrPage from "./components/ProductsPages/iphone/IPhonexrPage";
import MotoOnePage from "./components/ProductsPages/motorola/MotoOnePage";
import MotoEdgePage from "./components/ProductsPages/motorola/MotoEdgePage";
import MotoG22Page from "./components/ProductsPages/motorola/MotoG22Page";
import MotoGPage from "./components/ProductsPages/motorola/MotoGPage";
import SamsungSection from "./components/SamsungSection";
import IphoneSection from "./components/IphoneSection";
import MotorolaSection from "./components/MotorolaSection";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Brands Sections */}

          <Route path="/iphone" element={<IphoneSection />} />
          <Route path="/samsung" element={<SamsungSection />} />
          <Route path="/motorola" element={<MotorolaSection />} />

          {/*Products Pages */}

          {/*Samsung */}
          <Route path="/smartphones/samsung/s20fe" element={<S20Page />} />
          <Route path="/smartphones/samsung/s23ultra" element={<S23UPage />} />
          <Route path="/smartphones/samsung/s23" element={<S23Page />} />
          <Route path="/smartphones/samsung/fold" element={<FoldPage />} />

          {/*iPhone */}
          <Route
            path="/smartphones/iphone/iphone13"
            element={<IPhone13Page />}
          />
          <Route
            path="/smartphones/iphone/iphone12"
            element={<IPhone12Page />}
          />
          <Route
            path="/smartphones/iphone/iphone11"
            element={<IPhone11Page />}
          />
          <Route
            path="/smartphones/iphone/iphonexr"
            element={<IPhoneXrPage />}
          />

          {/*Motorola */}
          <Route path="/smartphones/motorola/motog" element={<MotoGPage />} />
          <Route
            path="/smartphones/motorola/motoone"
            element={<MotoOnePage />}
          />
          <Route
            path="/smartphones/motorola/motoedge"
            element={<MotoEdgePage />}
          />
          <Route
            path="/smartphones/motorola/motog22"
            element={<MotoG22Page />}
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
