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

  const nextCard = React.useCallback(() => {
    setFocusIndex((focusIndex) => {
      if (focusIndex === numberOfCards - 1) return 0;
      return focusIndex + 1;
    });
  }, [numberOfCards]);

  const prevCard = React.useCallback(() => {
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
      <div className="h-full w-full flex overflow-hidden">
        {cardData.map((card, index) => (
          <img
            key={index}
            src={card.image + "/low.png"}
            className={index===focusIndex? 'block' : 'hidden'}
          ></img>
        ))}
      </div>
      <Button size="small" label="<<<" onClick={prevCard} />
      <Button
        size="small"
        className="block absolute"
        label=">>>"
        onClick={nextCard}
      />
    </div>
  );
}

type CarouselProps = {
  numberOfCards: number;
};
