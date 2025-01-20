import "./App.css";
import Header from "./template/header/Header.tsx";
import Footer from "./template/footer/Footer.tsx";
import Home from "./template/pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <div className="grid grid-cols-10 gap-2">
          <div className="bg-green-400 aspect-circle rounded"></div>
          <div className="bg-sky-100 aspect-square rounded"></div>
          <div className="bg-sky-200 aspect-square rounded"></div>
          <div className="bg-sky-300 aspect-square rounded"></div>
          <div className="bg-sky-400 aspect-square rounded"></div>
          <div className="bg-sky-500 aspect-square rounded"></div>
          <div className="bg-sky-600 aspect-square rounded"></div>
          <div className="bg-sky-700 aspect-square rounded"></div>
          <div className="bg-sky-800 aspect-square rounded"></div>
          <div className="bg-sky-900 aspect-square rounded"></div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
