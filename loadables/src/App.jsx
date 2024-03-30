/* eslint-disable react/prop-types */
import "./App.css";
import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { getDataAtomFamily } from "./atoms";

function App() {
	return (
		<RecoilRoot>
			<TodoItem todoITemID={1} />
			<TodoItem todoITemID={2} />
		</RecoilRoot>
	);
}

export default App;

function TodoItem({ todoITemID }) {
	const todoItemLoadable = useRecoilValueLoadable(
		getDataAtomFamily(todoITemID)
	);

	const { id, title, description } = todoItemLoadable.contents;

	switch (todoItemLoadable.state) {
		case "hasValue":
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

		case "loading":
			return <h1>Loading....</h1>;

		case "hasError":
			throw todoItemLoadable.contents;
	}
}
