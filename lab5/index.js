//khai bao module express framework
const express = require("express");
const app = express();
//khai bao module path => de set duong dan thu muc chua view
const path  = require("path");

//khai bao port
const port = process.env.PORT ||3000;

//set thu muc chuaw view
app.set("view", path.join(__dirname, "views"));
//set view engine (template engine)
//=> giup go code cua back-end ngay trong front-end de hon
//hbs: handle bar => neu dung view engine khac thi thay doi gia tri nay
app.set("view engine", "hbs");

//listen port de chay server
app.listen(port)