import { sqliteConnection } from "..";
import { userTable } from "./userTable";

export async function runMigrations() {
  const schemas = [userTable].join("");

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.log("Migration Error", error));
}
