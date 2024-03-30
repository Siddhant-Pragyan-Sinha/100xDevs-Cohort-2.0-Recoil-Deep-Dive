/* eslint-disable react/prop-types */
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { getDataAtomFamily } from "./atoms";

function App() {
	return (
		<RecoilRoot>
			<TodoItem todoITemID={1} />
			<TodoItem todoITemID={2} />
			<TodoItem todoITemID={2} />
		</RecoilRoot>
	);
}

export default App;

function TodoItem({ todoITemID }) {
	const { id, title, description } = useRecoilValue(
		getDataAtomFamily(todoITemID)
	);

	return (
		<>
			<div
				key={id}
				style={{
					border: "1px solid white",
					borderRadius: "11px",
					marginBottom: "0.75rem",
					padding: "0.55rem",
				}}
			>
				<p>{title}</p>
				<p>{description}</p>
			</div>
		</>
	);
}
