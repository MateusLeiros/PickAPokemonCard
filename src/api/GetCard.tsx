import { clientApi } from "./client.ts";

export async function getCardByID(pkmId: number) {
  const response = await clientApi.get("cards/swsh3-" + pkmId);
  return response.data;
}
