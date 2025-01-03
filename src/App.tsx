import React from "react";
import "./App.css";
// import SignIn from "./assets/signIn.svg?react";
// import Button from "./components/Button.tsx";
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

  const pageNames = ['Menu', 'Marketing', 'Contact', 'Learn More', 'Pokemon'];
  const pageLinks = ['#', '#', '#', '#', '#'];

  return (
    <div>
      <Menu pageNames={pageNames} pageLinks={pageLinks} />
    </div>
  );
}

export default App;
