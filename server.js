let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

let chatArray = [];

app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/room", function(req, res){
    res.render("room.html");
});

app.get("/chat", function(req, res){
    res.send(chatArray);
})

app.post("/chat", function(req, res){
    let chatData = {
        username: req.param('username'),
        message: req.param('message'),
    }

    chatArray.push(chatData);
    console.log(chatArray);
});

app.listen(5555, function(){
    console.log('Nodejs WebServer Running at http://127.0.0.1:5555');
});