import React from "react";
import "./App.css";
import Menu from "./template/header/Menu.tsx";

function App() {

  const links = [{name:'See Pokémons', url:'#'}, {name:'Create a Deck', url:'#'}, {name:'Contact', url:'#'}, {name:'Mini-game (soon)', url:'#'}];

  return (
    <div>
      <Menu links={links}/>
    </div>
  );
}

export default App;