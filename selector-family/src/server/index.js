const express = require("express");

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.get("/", (req, res) => {
	res.send(
		JSON.stringify([
			{
				id: 1,
				title: "Go to Gym",
				description: "Hit the gym from 7-9",
			},
			{
				id: 2,
				title: "Go to eat food",
				description: "Eat food from from 9-11",
			},
		])
	);
});

app.post("/", (req, res) => {
	const { data } = req.body;
	console.log(data);
	res.send("Data received successfully!");

	// 	JSON.stringify({
	// 		networkCount: 131,
	// 		jobsCount: 11,
	// 		messagesCount: 33,
	// 		notificationCount: 111,
	// 	})
	// );
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server is up and running at port ${PORT}`);
});
