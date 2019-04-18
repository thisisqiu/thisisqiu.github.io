var express = require("express");
var app = express();
var hostname = "0.0.0.0";
var port = 3300;
var session = require("express-session");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.all("*", function(req, res, next) {
  // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  next();
});
app.use(
  session({
    secret: "recommend 128 bytes random string",
    cookie: {
      maxAge: 1000 * 60 * 20
    },
    resave: true,
    saveUninitialized: true
  })
);
var vue = require("./vue");
app.use("/vue", vue);
app.get("/", (req, res) => {
  res.send("服务器根地址");
});
app.listen(port, hostname, () => {
  console.log(`my app server is running at http://${hostname}:${port}`);
});
