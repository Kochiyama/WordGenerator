const express = require("express");
const app = express();

// configurar uso da pasta pública
app.use(express.static("public"));

// habilitar o req body
app.use(express.urlencoded({ extended: true }));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: app,
  noCache: true
})

app.get("/", (req, res) => {
  return res.render("index.html");
});

app.post("/", (req, res) => {
  const wordsByMinute = req.body.wordsPerMinute;
  const maxTime = req.body.time;
  return res.render("generator.html", { time: maxTime, wordsPerMinute: wordsByMinute });
});

// iniciar servidor na porta 3000
app.listen(3000)