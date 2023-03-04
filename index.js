const express = require("express");
const app = express();
const mysql = require("promise-mysql");

// app.get("/", (req,res)=>{
//     res.send("sarahs pussy")
// })

app.get("/test", (req,res)=>{
    res.send("test")
})
app.get("/", async (req,res)=>{
    console.log("attempting home route")
    try{
        const sql = await mysql.createConnection({
            host: '34.29.208.124',
            user     : 'amu',
            password : 'Amartya0',
            database : 'quickstart_db'
        })
        res.send("connected")

    } catch(err){
        console.log("*********");
        console.log(err)
        res.send("there was an error")

    }



})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
// test_sql()
// async function test_sql(){

// }