import axios from "axios";

export function getCardByID(pkmId: number) {
  const api = "https://api.tcgdex.net/v2/en/cards/swsh3-" + pkmId;
  const result = fetch(api)
    .then((response) => response.json())
    .then((card) => {
      console.log(card.name);
    });

  return result;
}

export async function getCardByID2(pkmId: number) {
  try {
    const api = "https://api.tcgdex.net/v2/en/cards/swsh3-" + pkmId;
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCardByIdAxios(pkmId: number) {
  const api = "https://api.tcgdex.net/v2/en/cards/swsh3-" + pkmId;

  axios
    .get(api)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
