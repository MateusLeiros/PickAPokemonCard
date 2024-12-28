import reactLogo from "./assets/react.svg";
import React from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button.tsx";
import Test from "./test.tsx";

function App() {
  const [loading, setLoading] = React.useState(false);

  // const changeButtonText = (text) => {
  //   setButtonText("Loading...");
  //   setTimeout(() => setButtonText(text),[1000]);
  // }
  
  // const getPokemonCard = async () => {
  //   const response = await fetch(
  //     "https://api.tcgdex.net/v2/en/cards/swsh3-136"
  //   );
  //   const json = await response.json();
  //   console.log("pegou o pokemon");
  //   console.log(json);
  // };

  // React.useEffect(() => {
  //   function updateStep() {
  //     setStep((step) => {
  //       if(step<3) return step+1;
  //       else return 1;
  //     })
  //   }

  //   setInterval(updateStep, 1000);
  // }, []);


  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), [2000]);
  }
  // React.useEffect(() => {
  //   console.log('entrou');
  // }, []);


  // React.useEffect(() => {
    // console.log("entrou no useEffect");
    // getPokemonCard();
    // console.log("saiu do useEffect");
    // fetch('https://api.tcgdex.net/v2/en/cards/swsh3-136').then((response) => {
    //   response.json().then((json) => {
    //     console.log(json);
    //   });
    // })
  // }, []);

  
  return (
    <div>
      <Button label='Botão' disabled onClick={() => {console.log('botao');}} />
      <Button label='blablabla whiskas sache' isLoading={loading} loadingText={"Loading..."} onClick={handleClick} />
      <Test />
    </div>
  );
}

export default App;
