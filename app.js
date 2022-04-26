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

app.set('port', process.env.PORT || 8082);

app.listen(app.get("port"), () => {
  console.log(`http://127.0.0.1:${app.get('port')}`);
})