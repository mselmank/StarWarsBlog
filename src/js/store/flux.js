const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			//people: [],
			planets: [],
			cars: [],
			favorites: []
		},

		actions: {
			getCharacterAPi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/people", settings);
				const json = await response.json();
				const data = json;

				console.log("--JSON", json);

				setStore({ characters: data.results });
			},

			getPlanetsAPi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/planets", settings);
				const json = await response.json();
				const data = json;

				setStore({ planets: data.results });
			},

			getCarsAPi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/vehicles", settings);
				const json = await response.json();
				const data = json;

				setStore({ cars: data.results });
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
