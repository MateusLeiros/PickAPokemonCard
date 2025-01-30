import React from "react";
import LoadingPBIcon from "../components/LoadingPBIcon.tsx";
import { getCardByID } from "../api/GetCard.tsx";
import pkmBack from "../assets/pkmBack.jpg";

export default function Home() {
  const [card1Data, setCard1Data] = React.useState(null);
  const [card2Data, setCard2Data] = React.useState(null);
  const [card3Data, setCard3Data] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [, setError] = React.useState(null);
  const pkmId1 = Math.floor(Math.random() * 201 + 1);
  const pkmId2 = Math.floor(Math.random() * 201 + 1);
  const pkmId3 = Math.floor(Math.random() * 201 + 1);

  const fetchCardData = async () => {
    try {
      setLoading(true);
      let data = await getCardByID(pkmId1);
      setCard1Data(data);
      data = await getCardByID(pkmId2);
      setCard2Data(data);
      data = await getCardByID(pkmId3);
      setCard3Data(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  React.useEffect(() => {
    fetchCardData();
  }, []);

  let pkmImg1,
    pkmImg2,
    pkmImg3 = "";
  if (card1Data) pkmImg1 = card1Data.image + "/low.png";
  if (card2Data) pkmImg2 = card2Data.image + "/low.png";
  if (card3Data) pkmImg3 = card3Data.image + "/low.png";

  return (
    <div>
      <div className="mt-10 flex justify-around items-center h-[450px] w-[90vw] justify-self-center border-4 border-blue-500 rounded-3xl">
        <div className="w-1/3 flex flex-col gap-5 items-center">
          <span>Meet some Pokemon Cards:</span>
          <label className="text-4xl">
            {card1Data === null ? "" : card1Data.name}
          </label>
          <label className="text-4xl">
            {card2Data === null ? "" : card2Data.name}
          </label>
          <label className="text-4xl">
            {card3Data === null ? "" : card3Data.name}
          </label>
        </div>

        <LoadingPBIcon isLoading={loading}></LoadingPBIcon>

        <div className="flex gap-2">
          <img
            src={loading ? pkmBack : pkmImg1}
            className="max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700 hover:scale-[1.25] hover:brightness-100 hover:z-20"
          ></img>
          <img
            src={loading ? pkmBack : pkmImg2}
            className="max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700 hover:scale-[1.25] hover:brightness-100 hover:z-20"
          ></img>
          <img
            src={loading ? pkmBack : pkmImg3}
            className="max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700 hover:scale-[1.25] hover:brightness-100 hover:z-20"
          ></img>
        </div>
      </div>
    </div>
  );
}
