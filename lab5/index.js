//khai bao module express framework
const express = require("express");
const app = express();
//khai bao module path => de set duong dan thu muc chua view
const path  = require("path");

//khai bao port
const port = process.env.PORT ||3000;

//set thu muc chuaw view
app.set("views", path.join(__dirname, "views"));
//set view engine (template engine)
//=> giup go code cua back-end ngay trong front-end de hon
//hbs: handle bar => neu dung view engine khac thi thay doi gia tri nay
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/mobile", (req, res) => {
    res.render("mobile");
})

app.get("/laptop", (req, res) => {
    res.render("laptop");
})

//listen port de chay server
app.listen(port)