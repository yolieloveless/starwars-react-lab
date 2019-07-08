const BASE_URL = 'https://swapi.co/api/';

export function allStarships() {
    return fetch(`${BASE_URL}starships`, {mode: 'cors'})
    .then(res => res.json());
}