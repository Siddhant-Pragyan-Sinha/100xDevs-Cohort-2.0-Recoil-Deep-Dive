import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const stateAtom = atomFamily({
	key: "todoITems",
	default: (id) => {
		const todos = TODOS.filter((todo) => todo.id === id);
		return todos[0];
	},
});

// export const getDerivedState = selectorFamily({
// 	key: "getItFromTodoItems",

// 	get:
// 		(itemId) =>
// 		({ get }) => {
// 			const todos = get(stateAtom);
// 			const item = todos.filter((todo) => todo.id == itemId);
// 			return item[0];
// 		},
// });
