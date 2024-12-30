import React from "react";
import "./App.css";
import SignIn from "./assets/signIn.svg?react";
import Button from "./components/Button.tsx";
import Menu from "./components/Menu.tsx";


function App() {
  // const [loading, setLoading] = React.useState(false);

  // function handleClick() {
  //   setLoading(true);
  //   console.log("Button clicked");
  //   setTimeout(() => {
  //     console.log("Button loading finished");
  //     setLoading(false);
  //   }, 2000);
  // }

  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;
