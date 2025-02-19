import React, { useEffect } from "react";
import { getCardByID, Card } from "../api/GetCard.tsx";
import Button from "./Button.tsx";

export default function Carousel({ numberOfCards }: CarouselProps) {
  const [cardData, setCardData] = React.useState<Array<Card>>([]);
  const [focusIndex, setFocusIndex] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [, setError] = React.useState<unknown>(null);

  const cardRefs = React.useRef<Array<HTMLImageElement | null>>([]);

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
    if (focusIndex > 0) {
      setFocusIndex(focusIndex - 1);
    } else {
      setFocusIndex(cardData.length - 1);
    }
  }, [focusIndex, cardData]);

  const nextCard = React.useCallback(() => {
    if (focusIndex < cardData.length - 1) {
      setFocusIndex(focusIndex + 1);
    } else {
      setFocusIndex(0);
    }
  }, [cardData, focusIndex]);

  React.useEffect(() => {
    fetchCarouselData();
  }, [fetchCarouselData]);

  useEffect(() => {
    if (cardRefs.current[focusIndex]) {
      cardRefs.current[focusIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [focusIndex]);

  console.log(cardRefs.current);
  return (
    <div className="flex h-full w-full relative justify-center items-center">
      <div
        className="flex w-[350px] overflow-hidden gap-2"
        id={"slider"}
      >
        {cardData.map((card, index) => (
          <img
            key={card.id}
            className="object-cover"
            src={card.image + "/low.png"}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
          />
        ))}

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
