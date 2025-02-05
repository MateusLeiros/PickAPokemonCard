import React from "react";
import pkmBack from "../assets/pkmBack.jpg";
import { getCardByID, Card } from "../api/GetCard.tsx";

export default function Carrossel({ numberOfCards }: carrosselProps) {
  const [cardData, setCardData] = React.useState<Array<Card>>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [, setError] = React.useState<unknown>(null);

  const fetchCarrosselData = React.useCallback(async () => {
    try {
      const newArray = [];
      setLoading(true);
      for (let i = 0; i < numberOfCards; i++) {
        const data = await getCardByID(Math.floor(Math.random() * 201 + 1));
        newArray.push(data);
      }
      setCardData(newArray);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  },[numberOfCards]);

  React.useEffect(() => {
    fetchCarrosselData();
  }, [fetchCarrosselData]);

  const imageClass = [
    "max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700",
  ];
  if (!loading) {
    imageClass.push("hover:scale-[1.25] hover:brightness-100 hover:z-20");
  }

  return (
    <div className="mt-10 flex justify-center items-center h-[450px] w-[90vw] justify-self-center border-4 border-blue-500 rounded-3xl">
      {cardData.map((card) => (
        <img
          key={card.id}
          src={loading ? pkmBack : card.image + "/low.png"}
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
