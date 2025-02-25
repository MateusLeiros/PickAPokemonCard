import React, { useEffect } from "react";
import { getCardByID, Card } from "../api/GetCard.tsx";
import ArrowLeft from "../assets/arrow-left.svg?react";
import ArrowRight from "../assets/arrow-right.svg?react";
import LoadingPBIcon from "../components/LoadingPBIcon.tsx";

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

  return (
    <div className="flex h-full w-full relative justify-center items-center">
      <div
        className="flex h-[510px] w-[90vw] overflow-hidden px-[65px] border-2 border-buttoncolor rounded-md"
        id={"slider"}
      >
        <div className="m-auto">
          <LoadingPBIcon isLoading={loading}></LoadingPBIcon>
        </div>

        {cardData.map((card, index) => (
          <img
            key={card.id}
            className={
              `${
                focusIndex == index
                  ? "z-20 scale-[1]"
                  : "brightness-50 scale-[0.8]"
              }` + " h-[500px] transition duration-500"
            }
            src={card.image + "/high.png"}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
          />
        ))}
        <ArrowLeft
          onClick={prevCard}
          className="block absolute rounded-r-full left-px w-[60px] h-[99%] bg-black/30 hover:bg-black/70 z-50 transition duration-200 fill-white/50 hover:fill-white"
        />
        <ArrowRight
          onClick={nextCard}
          className="block absolute rounded-l-full right-px w-[60px] h-[99%] bg-black/30 hover:bg-black/70 z-50 transition duration-200 fill-white/50 hover:fill-white"
        />
      </div>
    </div>
  );
}

type CarouselProps = {
  numberOfCards: number;
};
