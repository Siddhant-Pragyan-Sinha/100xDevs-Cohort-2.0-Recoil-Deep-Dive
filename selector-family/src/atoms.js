import { atomFamily, selectorFamily } from "recoil";

export const getDataAtomFamily = atomFamily({
	key: "stateValuesAtrom",
	default: selectorFamily({
		key: "getDataByFetching",
		get: (itemID) => async () => {
			const response = await fetch("http://localhost:3000/");
			//server is setup on the local server, to check the code go the server folder and check index.js
			const data = await response.json();
			const [item] = data.filter((todo) => todo.id === itemID);
			return item;
		},
	}),
});
