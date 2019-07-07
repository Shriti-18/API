var express = require('express');
var app = express();
var request = require('request');
app.set("view engine","ejs");

app.get("/",function(req,res){
  url="https://api.thecatapi.com/v1/breeds/"
  request(url,function(error,response,body){
    if(!error && response.statusCode==200){
      var data= JSON.parse(body);
      res.render("breeds",{data:data});
    }
  })
})

app.get("/randomDogs",function(req,res){
  url="https://dog.ceo/api/breeds/image/random";
  request(url,function(error,response,body){
    if(!error && response.statusCode==200){
      var data = JSON.parse(body);
      res.render("result",{url:data["message"]});
      }
  })
})

app.get("/randomCats",function(req,res){
  url="https://api.thecatapi.com/v1/images/search";
  request(url,function(error,response,body){
    if(!error && response.statusCode==200){
      var data = JSON.parse(body);
      res.render("random",{url:data[0]["url"]});
      }
  })
})


app.listen(3000,function(){
  console.log("Server Connected!!");
})
