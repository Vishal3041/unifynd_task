const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const connection = require('./database');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/update_billing_data', function(req, res){
    let { description, quantity, total_amount, state_gst, central_gst } = req.body;
    let sql = `INSERT INTO EXPENSES VALUES("${description}", ${quantity}, ${total_amount}, ${state_gst}, ${central_gst})`;
    connection.query(sql, function(err, data){
        if (err) throw err;
        res.send(req.body);
    });
});

app.get('/get_billing_data', function(req, res){
    let sql = "SELECT * FROM EXPENSES";
    connection.query(sql, function(err, data){
        if (err) throw err;
        res.send(data);
    });
});

app.listen(3000, function(){
    console.log("App listening on post 3000");
    connection.connect(function(err){
        if(err) throw err;
        console.log("Database connected!");
    })
})