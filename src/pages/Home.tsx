import React from "react";
import LoadingPBIcon from "../components/LoadingPBIcon.tsx";
import { getCardByID, Card } from "../api/GetCard.tsx";
import pkmBack from "../assets/pkmBack.jpg";
import Button from "../components/Button.tsx";
import Carrossel from "../components/Carrossel.tsx";

export default function Home() {
  const [card1Data, setCard1Data] = React.useState<Card | undefined>();
  const [loading, setLoading] = React.useState(false);
  const [, setError] = React.useState<unknown>();

  const fetchCardData = React.useCallback(async (pkmId1: number) => {
    try {
      setLoading(true);
      const data = await getCardByID(pkmId1);
      setCard1Data(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, []);

  React.useEffect(() => {
    fetchCardData(Math.floor(Math.random() * 201 + 1));
  }, [fetchCardData]);

  let pkmImg1;
  if (card1Data) pkmImg1 = card1Data.image + "/low.png";

  const handleClick = () => {
    fetchCardData(Math.floor(Math.random() * 201 + 1));
  };

  const imageClass = [
    "max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700",
  ];
  if (!loading) {
    imageClass.push("hover:scale-[1.25] hover:brightness-100 hover:z-20");
  }

  return (
    <div>
      <div className="mt-10 flex justify-around items-center h-[450px] w-[90vw] justify-self-center border-4 border-blue-500 rounded-3xl">
        <div className="w-1/3 flex flex-col gap-5 items-center">
          <span>Meet some Pokemon Cards:</span>
          <label className="text-4xl">
            {card1Data === undefined ? "" : card1Data.name}
          </label>
          <Button label="New Card" size="small" onClick={handleClick} isLoading={loading} />
        </div>

        <LoadingPBIcon isLoading={loading}></LoadingPBIcon>

        <div className="flex gap-2">
          <img
            src={loading ? pkmBack : pkmImg1}
            className={imageClass.join(" ")}
          ></img>
        </div>
      </div>

      <br />

      <Carrossel numberOfCards={2} />
    </div>
  );
}