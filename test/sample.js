/* eslint-disable no-unused-vars */
import { app } from "web-app";
import { foo,
		bar } from "util";

app.get("/", async (req, res) => {
	// …
});

function info(foo, bar,
		{ baz } = {}) {
	return null;
}
