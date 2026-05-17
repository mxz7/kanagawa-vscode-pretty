const fs = require("fs").promises;
const getTheme = require("./theme");

const darkTheme = getTheme({
	name: "Kanagawa Pretty",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile(
				"./themes/kanagawa-pretty.json",
				JSON.stringify(darkTheme, null, 2),
			),
		]),
	)
	.catch(() => process.exit(1));
