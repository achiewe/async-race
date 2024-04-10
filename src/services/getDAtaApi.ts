const baseURL = "http://127.0.0.1:3000";

const garageURL = `${baseURL}/garage`;
const winnersURL = `${baseURL}/winners`;
const engineURL = `${baseURL}/engine`;

export async function getCars(page?: number, limit?: number) {
  const url = `${garageURL}?_page=${page}&_limit=${limit}`;

  return fetch(url).then(async (res) => {
    const allCars = Number(res.headers.get("X-Total-Count"));
    const carsOnPageX = await res.json();
    return { allCars, carsOnPageX };
  });
}
