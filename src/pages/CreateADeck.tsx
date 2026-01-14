import React from "react";
import LoadingPBIcon from "../components/LoadingPBIcon.tsx";
import { getCardsPaginated } from "../api/GetManyCards";
import Button from "../components/Button.tsx";

export default function CreateADeck() {
  const [cardListData, setCardListData] = React.useState<Card[] | undefined>();
  const [loading, setLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [, setError] = React.useState<unknown>();
  const [cardsPerPage, setCardsPerPage] = React.useState(12);

  const handleSubmit = () => {
    const valor = Number(
      (document.getElementById("numberOfCardsPerPage") as HTMLInputElement)
        ?.value
    );

    if (isNaN(valor)) {
      alert("Must be a valid number");
      return;
    }

    setCardsPerPage(valor);
    fetchCardsList(pageNumber, valor);
  };

  const fetchCardsList = React.useCallback(
    async (page: number, itemsPerPage: number) => {
      try {
        setLoading(true);
        const data = await getCardsPaginated(page, itemsPerPage);
        setCardListData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    },
    []
  );

  React.useEffect(() => {
    fetchCardsList(pageNumber, cardsPerPage);
  }, [fetchCardsList, pageNumber, cardsPerPage]);

  console.log(cardListData);

  return (
    <div className="flex justify-around m-3">
      <div className="border-2 border-buttoncolor rounded-md p-5 w-[20vw] max-h-[50vh]">
        <h1>Card search</h1>
        <label htmlFor="numberOfCardsPerPage">Cards per page:</label>
        <input
          id="numberOfCardsPerPage"
          name="numberOfCardsPerPage"
          //onChange={(e) => setCardsPerPage(Number(e.target.value))}
        ></input>
        <br />
        <label htmlFor="searchByName">Search by name:</label>
        <input id="searchByName"></input>
        <br />
        <label htmlFor="typeOfCard">Card Type:</label>
        <select name="typeOfCard" id="typeOfCard">
          <option value="">Any</option>
          <option value="Pokemon">Pokemon</option>
          <option value="Energy">Energy</option>
          <option value="Trainer">Trainer</option>
        </select>
        <br />
        <label htmlFor="pokemonType">Pokemon Type:</label>
        <select name="pokemonType" id="pokemonType">
          <option value="">Any</option>
          <option value="Grass">Grass</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Lightning">Lightning</option>
          <option value="Fighting">Fighting</option>
          <option value="Psychic">Psychic</option>
          <option value="Colorless">Colorless</option>
          <option value="Darkness">Darkness</option>
          <option value="Metal">Metal</option>
          <option value="Dragon">Dragon</option>
          <option value="Fairy">Fairy</option>
        </select>
        <br />
        <label htmlFor="trainerType">Trainer Type:</label>
        <select name="trainerType" id="trainerType">
          <option value="">Any</option>
          <option value="Stadium">Stadium</option>
          <option value="Item">Item</option>
          <option value="Pokemon Tool">Pokemon Tool</option>
          <option value="Supporter">Supporter</option>
        </select>
        <br />
        <Button label="Filter" size="small" onClick={handleSubmit} />
      </div>
      <div className="w-[70vw] min-h-[70vh] bg-menugray flex flex-row flex-wrap justify-around gap-2 justify-center border-2 border-buttoncolor rounded-md">
        {cardListData ? (
          cardListData.map((card) => (
            <img
              key={card.id}
              className={"scale-[0.9] h-[250px]"}
              src={card.image + "/low.png"}
              //ref={(element) => {
              //  cardRefs.current[index] = element;
              //}}
            />
          ))
        ) : (
          <LoadingPBIcon isLoading={loading}></LoadingPBIcon>
        )}
        <br />

        <div className="self-end">
          <Button
            label="Previous Page"
            size="medium"
            onClick={() => {
              setPageNumber(pageNumber === 0 ? pageNumber : pageNumber - 1);
            }}
          />
          <Button
            label="Next Page"
            size="medium"
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
