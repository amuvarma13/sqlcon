const express = require("express");
const app = express();
const mysql = require("promise-mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.get("/", (req,res)=>{
//     res.send("sarahs pussy")
// })

app.get("/test", (req,res)=>{
    res.send("test")
})
app.post("/mysql/verify", async (req,res)=>{
    const body = req.body;
    const {host, user, password, database} = body;
    try{
        const sql = await mysql.createConnection({host,user,password,database })
        res.send({success:true})

    } catch(err){
        res.send({success:false})

    }

})
app.post("/mysql/query", async (req,res)=>{
    const body = req.body;
    const {host, user, password, database, query} = body;
    try{
        const connection = await mysql.createConnection({host,user,password,database })
        const sql_data = await connection.query(query)

        res.send({success:true, data:sql_data})

    } catch(err){
        console.log(err)
        res.send({success:false})

    }

})
app.get("/", async (req,res)=>{
    res.send("retorch sql api")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
// test_sql()
// async function test_sql(){

// }