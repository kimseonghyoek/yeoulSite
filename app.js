const express = require('express')
const app = express();
const nunjucks = require("nunjucks")
const homeRouter = require("./routes/index")

app.set("view engine", "html");
nunjucks.configure("html", {
  express: app,
  watch: true
})

app.use("/", express.static(__dirname, + "/js"));
app.use("/", express.static(__dirname  + "/public"));
app.use("", express.static(__dirname + "/html"))
app.use("/", express.static(__dirname + "/img"))

app.get('', homeRouter)

app.set("port", 8082);

app.listen(app.get("port"), () => {
  console.log("8082번 포트에서 활동");
  console.log(`http://localhost:8082`)
})