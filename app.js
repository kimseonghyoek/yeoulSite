const express = require('express')
const app = express();

app.set("view engine", "html");

app.use("/js", express.static(__dirname, + "/js"));
app.use("../", express.static(__dirname  + "/css"));

app.set("port", 8082);

app.listen(app.get("port"), () => {
  console.log("8082번 포트에서 활동");
  console.log(`http://localhost:8082`)
})