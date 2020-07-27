var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var adder = function(num1, num2){
    var result = num1 + num2;
    return result;
};

let accounts = [
        {id: 1, name: 'alex', deposit: 5},
        {id: 2, name: 'sarah', deposit: 5},
        {id: 3, name: 'jim', deposit: 15}
    ];
var display_results = accounts;

app.get('/test', function(req,res){
    var username = req.query.username;
    console.log("Ye I have been hit " +username);
    res.send("Hello you hit me! " +username);
});

app.get('/adder', function(req,res){
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result = adder(num1, num2);
    res.send("The result is "+result);
});

app.get('/acc', function(req,res){
    console.log(accounts);
    res.send("Verify the result of the array "+accounts);
});

var port = 3000;
app.listen(port);
console.log('Server listening on: '+port);

