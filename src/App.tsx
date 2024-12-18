import reactLogo from './assets/react.svg'
import React from 'react';
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.tsx';

function App() {
  
  const [loading, setLoading] = React.useState(false);
  // React.useEffect(() => {
  //   console.log('entrou');
  // }, []);
  
  const getPokemonCard = async () => {
    const response = await fetch('https://api.tcgdex.net/v2/en/cards/swsh3-136');
    const json = await response.json();
    console.log('pegou o pokemon');
    console.log(json);
  }

  React.useEffect(() => {
    console.log('entrou no useEffect');
    setLoading(true);
    getPokemonCard();
    setLoading(false);
    console.log('saiu do useEffect');
    // fetch('https://api.tcgdex.net/v2/en/cards/swsh3-136').then((response) => {
    //   response.json().then((json) => {
    //     console.log(json);
    //   });
    // })
  }, []);


    function handleClick() {
        setLoading(!loading);
        console.log(loading);
    }

  return (
    <>
      <div>
      <Button label='Botão' disabled onClick={() => {console.log('botao');}} />
      <Button label='blablabla whiskas sache' onClick={handleClick} />
      </div>
    </>
  )
}

export default App
