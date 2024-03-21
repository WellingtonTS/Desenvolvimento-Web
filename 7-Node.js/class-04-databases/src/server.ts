import express from "express";
import { router } from "./routes";
import { sqliteConnection } from "./databases/sqlite3";

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error(error));
