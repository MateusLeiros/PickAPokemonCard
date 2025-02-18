import React from "react";
import pkmBack from "../assets/pkmBack.jpg";
import { getCardByID, Card } from "../api/GetCard.tsx";
import Button from "./Button.tsx";

export default function Carousel({ numberOfCards }: CarouselProps) {
  const [cardData, setCardData] = React.useState<Array<Card>>([]);
  const [focusIndex, setFocusIndex] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [, setError] = React.useState<unknown>(null);

  const fetchCarouselData = React.useCallback(async () => {
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

  const prevCard = React.useCallback(() => {
    setFocusIndex((focusIndex) => {
      if (focusIndex === numberOfCards - 1) return 0;
      return focusIndex + 1;
    });
  }, [numberOfCards]);

  const nextCard = React.useCallback(() => {
    setFocusIndex((focusIndex) => {
      if (focusIndex === 0) return numberOfCards - 1;
      return focusIndex - 1;
    });
  }, [numberOfCards]);

  React.useEffect(() => {
    fetchCarouselData();
  }, [fetchCarouselData]);
  
  return (
    <div className="h-full w-full relative">
      <div className="h-full max-h-[350px] w-full flex justify-center items-center overflow-hidden">
        {cardData.map((card, index, arr) => (
          <>
          <img key={index-1} src={arr[(focusIndex-1)%5]? arr[(focusIndex-1)%5].image + "/low.png" : pkmBack} className={`translate-x-1/2 scale-75 brightness-50 ${index+1 === focusIndex ? "absolute" : "hidden"}`}></img>
          <img
            key={index}
            src={loading ? pkmBack : card.image + "/low.png"}
            className={index === focusIndex ? "block z-20" : "hidden"}
            ></img>
          <img key={index+1} src={arr[(focusIndex+1)%5]? arr[(focusIndex+1)%5].image + "/low.png" : pkmBack} className={`-translate-x-1/2 scale-75 brightness-50 ${index-1 === focusIndex ? "absolute" : "hidden"}`}></img>

            </>
        ))}

        {/* <img src={cardData[focusIndex].image + "/low.png"}></img> */}

        <Button
          size="square"
          className="block absolute left-px"
          label="<<<"
          onClick={prevCard}
        />
        <Button
          size="square"
          className="block absolute right-px"
          label=">>>"
          onClick={nextCard}
        />
      </div>
    </div>
  );
}

type CarouselProps = {
  numberOfCards: number;
};
