const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/',(req, res) =>{
  res.sendFile(__dirname + "/public/index/index.html")
});

app.get('/page1',(req, res) =>{
  res.sendFile(__dirname + "/public/page1/page1.html")
});

app.get('/page2',(req, res) =>{
  res.sendFile(__dirname + "/public/page2/page2.html")
});

app.get('/page3',(req, res) =>{
  res.sendFile(__dirname + "/public/page3/page3.html")
});

app.get('/page4',(req, res) =>{
  res.sendFile(__dirname + "/public/page4/page4.html")
});