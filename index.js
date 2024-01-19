const express= require('express')
const app=express();
const path=require('path');
const Connection = require('tedious').Connection;  
const config = {  
    server: 'jan15bootcampserver.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'bootcamp', //update me
            password: 'Pass@123'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'your_database'  //update me
    }
};  
const connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();
const port=3000;


app.use(expree.static('public'));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.get('/task2',(req,res)=>{
    res.send('hello bhai')
})
app.get('/task3',(req,res)=>{

})

app.listen(port,()=>{
    console.log('running on port 3000');
})