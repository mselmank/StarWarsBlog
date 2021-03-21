//import { CLIEngine } from "eslint";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			cars: [],
			favorites: []
		},

		actions: {
			getCharacterAPi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "aplication/json"
					}
				};
				const response = await fetch("https://wwww.swapi.tech/api/people", settings);
				const json = await response.json();

				console.log("--JSON", json);

				setStore({ characters: json.results });
			},

			getPlanetsAPi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "aplication/json"
					}
				};
				const responsePlanets = await fetch("https://wwww.swapi.tech/api/people", settings);
				const json = await responsePlanets.json();

				console.log("--JSON", json);

				setStore({ planets: json.results });
			},

			getCarsAPi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "aplication/json"
					}
				};
				const responseCars = await fetch("https://wwww.swapi.tech/api/people", settings);
				const json = await responseCars.json();

				console.log("--JSON", json);

				setStore({ cars: json.results });
			},

			addItem: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			removeItem: name => {
				const store = getStore();
				const newFavorites = store.favorites.filter(i => i !== name);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
