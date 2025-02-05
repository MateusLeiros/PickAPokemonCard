import { clientApi } from "./client.ts";

export async function getCardByID(pkmId: number) {
  const response = await clientApi.get<Card>("cards/swsh3-" + pkmId);
  return response.data;
}

export type Card = {
  id: number,
  category: string,
  image: string,
  name: string,
  set: {
    cardCount:{
      official: number,
      total: number,
    }
  }
}
