import express from "express";
import { loadRoutes } from "./loadRoutes.js";

const app = express();

await loadRoutes(app, "./src/routes");

app.listen(3000, () => {
    console.log('Server runnning at http:localhost:3000');
})

export {app};