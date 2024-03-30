/* eslint-disable react/prop-types */
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { stateAtom } from "./atoms";

function App() {
	return (
		<RecoilRoot>
			<div>
				<TodoItem id={1} />
				<TodoItem id={2} />
			</div>
		</RecoilRoot>
	);
}

export default App;

function TodoItem({ id }) {
	const item = useRecoilValue(stateAtom(id));
	const { id: itemID, title, description } = item;
	return (
		<div key={itemID}>
			<p>{title}</p>
			<p>{description}</p>
		</div>
	);
}
