import React from "react";
import { getCardByID, getCardByID2 } from "../api/GetCard.tsx";
import axios from 'axios';

export default function Home() {
  const [cardData, setCardData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const pkmId = Math.floor((Math.random() * (201))+1);

  React.useEffect(() => {
    const fetchCardData = async () => {
      try {
        const data = await getCardByID2(pkmId);
        setCardData(data);
      } catch (err) {
        setError('Erro ao carregar os dados.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, []);
  console.log(cardData);

  let pkmImg='';
  if (cardData){
    pkmImg = cardData.image + '/high.png';
  }
  
  return (
    <div>
      <h1>Essa é a Home</h1>
      <label>{cardData===null? '' : cardData.name}</label>
      <img src={pkmImg}></img>
    </div>
  );
  

}
