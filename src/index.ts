import "./environment";

import { App } from "@/App";
const app = new App();

const type = process.argv[2]?.trim();

app.run(type);
