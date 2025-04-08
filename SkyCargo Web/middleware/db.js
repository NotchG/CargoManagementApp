
const express = require('express');
const mysql = require('mysql2');


// database connection and query promisify
var conn = mysql.createPool({
    host     : '192.168.50.122',
    user     : 'root',
    password : 'root',
    database : 'erpcargo',
    port: '3306',
    connectionLimit : 100
  });


const mySqlQury =(qry)=>{
    return new Promise((resolve, reject)=>{
        conn.query(qry, (err, row)=>{
            if (err) return reject(err);
            resolve(row)
        })
    }) 
}

  
module.exports = {conn, mySqlQury}