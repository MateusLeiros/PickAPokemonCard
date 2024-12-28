import React from "react";
import "./App.css";
import Button from "./components/Button.tsx";
import Test from "./test.tsx";

function App() {
  /* Eu fiz o loading ser aqui na app da forma que eu comentei aqui debaixo:
  
  const [loading, setLoading] = React.useState(false);
  
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), [2000]);
  }

  Problema: Quando clicava em um botão, todos entravam no seu estado de loading 
  juntos e mudavam pros seus respectivos textos setados no botão la em baixo.

  Solução: Função de loading movida pra dentro do componente botão.
  
  */

  // const getPokemonCard = async () => {
  //   const response = await fetch(
  //     "https://api.tcgdex.net/v2/en/cards/swsh3-136"
  //   );
  //   const json = await response.json();
  //   console.log("pegou o pokemon");
  //   console.log(json);
  // };


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
      <Button label='Botão' disabled />
      <Button label='blablabla whiskas sache' />
      <Test />
    </div>
  );
}

export default App;
