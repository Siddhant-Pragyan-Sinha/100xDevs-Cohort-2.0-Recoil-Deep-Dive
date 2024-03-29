import { atom, selector } from "recoil";

export const networkItem = atom({
	key: "networkValue",
	default: 102,
});
export const jobItem = atom({
	key: "jobValue",
	default: 0,
});
export const messageItem = atom({
	key: "messsageValue",
	default: 33,
});
export const notifsItem = atom({
	key: "notificationsValue",
	default: 11,
});

export const TotalNotifsCount = selector({
	key: "totalNumberOfNOtifications",

	get: ({ get }) => {
		const netV = get(networkItem);
		const jobV = get(jobItem);
		const mesgV = get(messageItem);
		const notffV = get(notifsItem);

		return netV + jobV + mesgV + notffV;
	},
});
