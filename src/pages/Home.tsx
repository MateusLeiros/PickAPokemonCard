import React from "react";
import LoadingPBIcon from "../components/LoadingPBIcon.tsx";
import { getCardByID } from "../api/GetCard.tsx";
import pkmBack from "../assets/pkmBack.jpg";

export default function Home() {
  const [cardData, setCardData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [, setError] = React.useState(null);
  const pkmId = Math.floor(Math.random() * 201 + 1);

  const fetchCardData = async () => {
    try {
      setLoading(true);
      const data = await getCardByID(pkmId);
      setCardData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  React.useEffect(() => {
    fetchCardData();
  }, []);

  let pkmImg = "";
  if (cardData) {
    pkmImg = cardData.image + "/low.png";
  }

  return (
    <div>
      <h1>Essa é a Home</h1>
      <div className="flex flex-col items-center h-[432px] w-[90vw] border-4 border-blue-500 rounded-3xl">
        <LoadingPBIcon isLoading={loading}></LoadingPBIcon>
        <label className="text-4xl">
          {cardData === null ? "" : cardData.name}
        </label>
        <img
          src={loading ? pkmBack : pkmImg}
          className="max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700 hover:scale-[1.2] hover:brightness-100"
        ></img>
      </div>
    </div>
  );
}
// brightness-50 hover:scale-[1.2] hover:brightness-100