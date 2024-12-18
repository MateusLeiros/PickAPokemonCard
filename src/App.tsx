import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.tsx';

function App() {

  return (
    <>
      <div>
      <Button label='Botão' disabled onClick={() => {console.log('botao');}} />
      <Button label='blablabla whiskas sache' onClick={() => {console.log('teste')}} />
      </div>
    </>
  )
}

export default App
