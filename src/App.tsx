import Home from "./pages/Home.tsx";
import CreateADeck from "./pages/CreateADeck.tsx";
import Contact from "./pages/Contact.tsx";
import Game from "./pages/Game.tsx";
import NotFound from "./pages/NotFound.tsx";
import Layout from "./template/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Create-A-Deck" element={<CreateADeck />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Game" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
