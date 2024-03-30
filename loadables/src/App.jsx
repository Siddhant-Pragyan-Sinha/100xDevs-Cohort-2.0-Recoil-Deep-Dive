import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";

function App() {
	return (
		<>
			<RecoilRoot>
				<Todo />
				<h3>App is up and running</h3>
			</RecoilRoot>
		</>
	);
}

function Todo() {
	return <></>;
}

export default App;
