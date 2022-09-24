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
    var name = "cloud computing";
    var code = 1644;
    //pass du lieu tu back-end sang front-end
    //cu phap: name (data) : value (data)
    //gui giu lieu la value va nan voi ten la name
    res.render("index", {name: name, ma: code, ky: "fall 2022"});
})

app.get("/mobile", (req, res) => {
    var list = ["Iphone", "samsung", "Oppo", "Huawei"];
    res.render("mobile", {mobiles: list});
})

app.get("/laptop", (req, res) => {
    res.render("laptop");
})

//listen port de chay server
app.listen(port);