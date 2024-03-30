import { atom, selector } from "recoil";

export const urlAtom = atom({
	key: "urlToFetchData",
	default: "http://localhost:3000/",
});
export const getData = selector({
	key: "fetchData",
	get: async ({ get }) => {
		const url = get(urlAtom);

		for (let i = 0; i < 10000000; i++) {}

		const response = await fetch(url);
		if (!response.ok) {
			throw response.error;
		}
		const data = await response.json();
		return data;
	},
});

export const dataFetchFromSource = atom({
	key: "dataFetchFromSource",
	default: getData,
});

export const totalNotifs = selector({
	key: "totatlNotifs",
	get: ({ get }) => {
		const obj = get(getData);
		const total =
			obj.notificationCount +
			obj.messagesCount +
			obj.jobsCount +
			obj.networkCount;
		return total;
	},
});
