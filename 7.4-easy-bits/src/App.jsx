import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import {
	TotalNotifsCount,
	jobItem,
	messageItem,
	networkItem,
	notifsItem,
} from "./store/atom";

function App() {
	return (
		<div>
			<RecoilRoot>
				<Main />
			</RecoilRoot>
		</div>
	);
}

export default App;

function Main() {
	const netwValue = useRecoilValue(networkItem);
	const jobCount = useRecoilValue(jobItem);
	const messageCount = useRecoilValue(messageItem);
	const notificationsCount = useRecoilValue(notifsItem);

	const TotalNumOfNotifs = useRecoilValue(TotalNotifsCount);

	return (
		<div>
			<button>Home</button>
			<button>My Network ({netwValue > 100 ? "99+" : netwValue})</button>
			<button>Jobs ({jobCount})</button>
			<button>Messaging ({messageCount})</button>
			<button>Notifications ({notificationsCount})</button>
			<button>Me ({TotalNumOfNotifs})</button>
		</div>
	);
}
