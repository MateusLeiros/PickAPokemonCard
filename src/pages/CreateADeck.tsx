export default function CreateADeck() {
  return (
    <div className="flex justify-around m-3">
    <div className="border-2 border-buttoncolor rounded-md p-5 w-[20vw] max-h-[50vh]">
      <h1>Card search</h1>
      <label htmlFor="cardsPerPage">Cards per page:</label>
      <input id="cardsPerPage"></input>
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
    </div>
    <div className="w-[70vw] h-[70vh] bg-menugray flex justify-center border-2 border-buttoncolor rounded-md">
      CARDS WILL BE DISPLAYED TO THE RIGHT OF THE FILTER MENU
    </div>
    </div>
  );
}
