import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});

app.route("/").get((_request, response) => {
    response.send ({ classeName: "Class 01 Server"})
});