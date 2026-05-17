const fs = require("fs").promises;
const getClassicTheme = require("./classic/theme");

const darkTheme = getClassicTheme({
	style: "dark",
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
