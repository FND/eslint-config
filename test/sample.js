/* eslint-disable no-unused-vars */
import { app } from "web-app";

app.get("/", async (req, res) => {
	// …
});

function info(foo, bar,
		{ baz } = {}) {
	return null;
}

class Foo {
	batch() {
		this.forEach(item => void this.process(item));
	}
}

async function* walk(rootDir) {
	if(Math.random() > 0.5) {
		yield* walk(rootDir);
	}
}
