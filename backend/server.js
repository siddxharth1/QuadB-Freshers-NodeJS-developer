const express = require("express");
const tickersRoutes = require("./routes/tickers");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

app.use("/api", tickersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
