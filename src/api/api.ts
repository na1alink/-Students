const API_URL = "http://localhost:3000";

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  rating: number;
  url: string;
}

export const getRestaurants = (): Promise<Restaurant[]> =>
  fetch(`${API_URL}/restaurants`).then((res) => res.json());

interface UpdateRestaurantRatingArgs {
  id: Restaurant["id"];
  rating: Restaurant["rating"];
}

export const updateRestaurantRating = ({
  id,
  rating,
}: UpdateRestaurantRatingArgs): Promise<Restaurant> =>
  fetch(`${API_URL}/restaurants/${id}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rating }),
  }).then((res) => res.json());
