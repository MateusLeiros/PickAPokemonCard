import React from "react";
import LoadingPBIcon from "../components/LoadingPBIcon.tsx";
import {
  getCardByID,
  getCardByID2,
  getCardByIdAxios,
} from "../api/GetCard.tsx";

export default function Home() {
  const [cardData, setCardData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const pkmId = Math.floor(Math.random() * 201 + 1);

  React.useEffect(() => {
    const fetchCardData = async () => {
      try {
        setLoading(true);
        const data = await getCardByID2(pkmId);
        console.log(data);
        setCardData(data);
      } catch (err) {
        setError("Erro ao carregar os dados.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCardData();
  }, []);
  
  console.log(loading);
  let pkmImg = "";
  if (cardData) {
    pkmImg = cardData.image + "/high.png";
  }

  return (
    <div>
      <h1>Essa é a Home</h1>
      <LoadingPBIcon isLoading={loading}></LoadingPBIcon>
      <label className="text-4xl">
        {cardData === null ? "" : cardData.name}
      </label>
      <img
        src={pkmImg}
        className="border-solid border-white border-4 rounded-s-3xl"
      ></img>
    </div>
  );
}
