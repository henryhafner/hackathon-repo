const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config({path: '../frontend/.env'});

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
})

app.get('/safety', (req, res) =>{
    const sql = "SELECT * FROM `hackrice-db`.resources WHERE category='Safety'";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/food', (req, res) =>{
    const sql = "SELECT * FROM `hackrice-db`.resources WHERE category='Food'";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/shelter', (req, res) =>{
    const sql = "SELECT * FROM `hackrice-db`.resources WHERE category='Shelter'";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/mental', (req, res) =>{
    const sql = "SELECT * FROM `hackrice-db`.resources WHERE category='Mental Health'";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/education', (req, res) =>{
    const sql = "SELECT * FROM `hackrice-db`.resources WHERE category='Education'";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(5000, () => { console.log("Server started on http://localhost:5000"); })