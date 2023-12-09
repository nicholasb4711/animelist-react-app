const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

// Create a database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Injeralord@01',
    database: "Anime100"
});

//Connect to mysql
db.connect(err => {
    if(err){
        throw err;
    }
    console.log("MySQL Connected")
});

const app = express();

app.use(express.json());
app.use(cors())

app.post('/register',(req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO Users (username, password) VALUES (?, ?)", [username, password], 
    (err, result) => {
        console.error("Email is already in the database!Login instead!")
    });
})

app.post('/login',(req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM Users where username = ? and password = ?", [username, password], 
    (err, result) => {
        if(err){
            res.send(err)
        }
        if(result) {
            res.send(result);
        }
        else {
            res.send({message:"Wrong Username/password combination"})
        }
    });
})

app.post('/reviews',(req, res) => {
    const id = req.body.id
    db.query("SELECT rating, rdescription from Review where id = ?", [id], 
    (err, result) => {
        if(err) {
            res.send(err)
        }
        if(result) { 
            res.send(result)
        }
        else{
            res.send({message:"There's none there bud!"})
        }
    });
})

app.post('/getreviews',(req, res) => {
    const id = req.body.id
    db.query("SELECT rating, rdescription from Review where uid = ?", [id], 
    (err, result) => {
        if(err) {
            res.send(err)
        }
        if(result) { 
            res.send(result)
        }
        else{
            res.send({message:"There's none there bud!"})
        }
    });
})

app.post('/search',(req, res) => {
    const search = req.body.search
    db.query("SELECT * from Anime where title = ?", [search], 
    (err, result) => {
        if(err) {
            res.send(err)
        }
        if(result) { 
            res.send(result)
        }
        else{
            res.send({message:"There's none there bud!"})
        }
    });
})

app.post('/top50',(req, res) => {
    db.query(`use Anime100`, (err) => {
        if(err) res.send(err)
            db.query(`Select * from Anime order by ranked asc`, (err, result)=> {
                if(err) res.send(err)
                else{
                    res.send(result)
                }
            });
    });
})

db.query(`use Anime100`, (err) => {
if(err) throw err
    // db.query(`Select * from Anime`, (err, result)=> {
    //     if(err) throw err
    //     else{
    //         console.log(result)
    //     }
    // });
});

app.listen('3001', () => {
    console.log('Server started on port 3000')
})