var express     = require("express");
var compression = require("compression");
var morgan      = require("morgan");
var bodyParser  = require("body-parser");

var PORT = Number( process.env.PORT || 4000 );
var app  = express();

var tacos = require("./lib/tacos");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(compression());

function send(name) {
  return function(req, res) {
    res.sendFile(__dirname + "/static/" + name);
  };
}

app.get("/",       send("index.html"));
app.get("/app.js", send("app.js"));

// get the tacos :: GET
app.get("/api/v1/tacos", function(req, res) {
  console.log("GET TACOS")
  res.json(tacos.getAll());
});

// create a taco :: POST [title]
app.post("/api/v1/tacos", function(req, res) {
  res.json(tacos.createTaco(req.body.title)); });

// inc a taco :: POST [id]
app.post("/api/v1/taco/inc", function(req, res) {
  res.json(tacos.incTaco(req.body.id)); });

// dec a taco :: POST [id]
app.post("/api/v1/taco/dec", function(req, res) {
  res.json(tacos.decTaco(req.body.id)); });

// delete a taco :: DELETE [id]
app.delete("/api/v1/taco", function(req, res) {
  res.json(tacos.deleteTaco(req.body.id)); });

// app.get("*",  send("index.html"));
// app.head("*", send("index.html"));

app.listen(PORT, console.log.bind(null, "PORT: " + PORT));
