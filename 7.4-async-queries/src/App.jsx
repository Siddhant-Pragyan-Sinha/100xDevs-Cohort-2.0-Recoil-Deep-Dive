import React from "react";

import { useRecoilValue, RecoilRoot } from "recoil";
import {  dataFetchFromSource, totalNotifs } from "./atoms";

function App() {
	return (
		<div>
			<RecoilRoot>
				<React.Suspense fallback={<h1>Loading...</h1>}>
					<Data />
				</React.Suspense>
			</RecoilRoot>
		</div>
	);
}

export default App;

function Data() {
	const state = useRecoilValue(dataFetchFromSource);

	const { networkCount, jobsCount, messagesCount, notificationCount } = state;
	const TotalNumOfNotifs = useRecoilValue(totalNotifs);
	return (
		<div>
			<button>Home</button>
			<button>My Network ({networkCount > 100 ? "99+" : networkCount})</button>
			<button>Jobs ({jobsCount})</button>
			<button>Messaging ({messagesCount})</button>
			<button>Notifications ({notificationCount})</button>
			<button>Me ({TotalNumOfNotifs})</button>
		</div>
	);
}
