// require("dotenv").config({ path: "./env" });
import { append } from "express/lib/response";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;
connectDB()
  .then((result) => {
    app.on("error", (err) => {
      console.log("ERRR", err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on PORT ${port}`);
    });
  })
  .catch((err) => console.log(`MONGO_DB connection failed`, err));
//as async returns a promise
