const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded());

/* TODO: ?author=Romi */
app.get("/api/v1/books", (req, res) => {
  console.log(req.query);
  res
    .status(200)
    .send(`Kamu sedang mencari buku yang ditulis oleh ${req.query.author}`);
});

app.get("/api/v1/books/:id", (req, res) => {
  console.log(req.params);
  res.status(200).send(`Kamu sedang mencari buku dengan id ${req.params.id}`);
});

app.post("/api/v1/books", (req, res) => {
  console.log(req.body);
  res
    .status(201)
    .send("Terima kasih sudah menambahkan buku di dalam database kami");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
