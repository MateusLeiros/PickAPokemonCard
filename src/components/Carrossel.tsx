import React from "react";
import pkmBack from "../assets/pkmBack.jpg";
import { getCardByID } from "../api/GetCard.tsx";

export default function Carrossel({ numberOfCards }: carrosselProps) {
  const [cardData, setCardData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [, setError] = React.useState<unknown>(null);

  const cardsResult = [];

  const fetchCardData = async () => {
    try {
      setLoading(true);
      for (let i = 0; i < numberOfCards; i++) {
        const pkmId = Math.floor(Math.random() * 201 + 1);
        const data = await getCardByID(pkmId);
        cardsResult.push(data);
      }
      setCardData(cardsResult);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchCardData();
  }, []);

  // let pkmImgs = [];

  // pkmImgs = cardData.map((x) => x.image + "/low.png");

  return (
    <div className="mt-10 flex justify-center items-center h-[450px] w-[90vw] justify-self-center border-4 border-blue-500 rounded-3xl">
      {cardData.map((imagem) => (
        <img
          src={loading ? pkmBack : imagem.image + "/low.png"}
          className={
            loading
              ? "max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700"
              : "z-0 max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700 hover:scale-[1.25] hover:brightness-100 hover:z-40"
          }
        ></img>
      ))}
    </div>
  );
}

type carrosselProps = {
  numberOfCards: number;
};
