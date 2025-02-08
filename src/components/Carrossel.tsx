import React from "react";
import pkmBack from "../assets/pkmBack.jpg";
import { getCardByID, Card } from "../api/GetCard.tsx";
import Button from "./Button.tsx";

export default function Carrossel({ numberOfCards }: carrosselProps) {
  const [cardData, setCardData] = React.useState<Array<Card>>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [, setError] = React.useState<unknown>(null);
  const [focusIndex, setFocusIndex] = React.useState(
    Math.floor(numberOfCards / 2)
  );

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
  }, [numberOfCards]);

  const carrosselOrderFocus = React.useCallback(
    function (order: string) {
      switch (order) {
        case "right":
          if (focusIndex < numberOfCards - 1) {
            setFocusIndex(focusIndex + 1);
          }else{
            setFocusIndex(0);
          }
          break;
        case "left":
          if (focusIndex > 0) {
            setFocusIndex(focusIndex - 1);
          }else{
            setFocusIndex(numberOfCards - 1);
          }
          break;
        default:
          console.log("error");
      }
    },
    [focusIndex, numberOfCards]
  );

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
    <div className="mt-10 flex justify-around items-center h-[450px] w-[90vw] justify-self-center border-4 border-blue-500 rounded-3xl">
      <Button
        size="small"
        label="<<<"
        onClick={() => {
          carrosselOrderFocus("left");
        }}
      />
      <div className="flex">
        {cardData.map((card, index) => (
          <img
            key={index}
            src={loading ? pkmBack : card.image + "/low.png"}
            className={
              index != focusIndex
                ? "max-h-[350px] border-4 border-blue-500 rounded-3xl brightness-50 transition duration-700"
                : "z-40 border-4 border-blue-500 rounded-3xl transition duration-700 scale-[1.25]"
            }
          ></img>
        ))}
      </div>
      <Button
        size="small"
        label=">>>"
        onClick={() => {
          carrosselOrderFocus("right");
        }}
      />
    </div>
  );
}

type carrosselProps = {
  numberOfCards: number;
};
