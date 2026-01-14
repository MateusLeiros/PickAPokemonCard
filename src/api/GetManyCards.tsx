import { clientApi } from "./client.ts";

export async function getCardsPaginated(page: number, itemsPerPage: number) {
  const response = await clientApi.get<Card[]>(
    `cards?pagination:page=${page}&pagination:itemsPerPage=${itemsPerPage}`
  );
  return response.data;
}

export type Card = {
  id: number;
  category: string;
  image: string;
  name: string;
  set: {
    cardCount: {
      official: number;
      total: number;
    };
  };
};
