const express = require("express");

const app = express();

const encoding = require("encoding");

const fetch = require("node-fetch");

app.use(express.json());

app.get("/", (req,res) =>{
    return res.send("Dette er et req");

});

//app.get("/proxy", (req, res) => {
//    fetch('https://google.com/')
//        .then(res => res.textConverted())
//        .then(body => {
//            return res.send(body)

//});

app.get("/me", (req, res) =>{
    return res.send({name: "Christian"})
});

app.get("/catfacts", (req, res) =>{
    return res.sendFile(__dirname + "/catfacts.html")
});

app.get("/greeting", (req,res) =>{
    res.redirect("/");
});



app.get("/document2", (req, res) =>{
    console.log();

    return res.sendFile(__dirname + "/document2.html");
});

app.get("/time", (req, res) =>{

    const date = new Date();
    const time = date.getHours()+ ":" + date.getHours() + ":" + date.getSeconds() ;
    return res.send({time: date.getTime()})
});

app.get("/month", (req, res) =>{

    const date = new Date();
    const month = date.getMonth()
    return res.send({month: date.getMonth()})
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"];

app.get("/day", (req, res) =>{

    const date = new Date();
    const day = date.getDay()
    return res.send({day: days[day]})
});
app.get("/querystring", (req, res) =>{
    return res.send({query: req.query})
});

app.get("/message/:message",(req,res) =>{
    return res.send({message: req.params.message, queryString:req.query})

});

app.post("/showmethebody",(req,res) =>{
    return res.send({body: req.body})
});



app.listen(8080, (erro) =>{
    if (erro){
        console.log("Erro starting the server");
    }
    console.log("Server is running on port", 8080)
});


