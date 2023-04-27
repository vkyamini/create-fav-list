const express = require("express");
const router = express.Router();
const path = require("path");
const uuid = require("uuid");
const fs =  require("fs")
const database = require("../db/db.json");
//const { request } = require("http");

router.get("/api/favlist",(req,res)=>{
    res.json(database);
})

router.post("/api/favlist/added", (request,response) => {
    // tag on additional properties
    const note = {
        id: uuid.v4(),
        name: request.body.name,
        location: request.body.location,
        hobby: request.body.hobby,
        createdAt: new Date()
    };

    console.log(note);
    // add new note to json
    // return success/data
    
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        // read the database json
        console.log(data);
        const listarray = JSON.parse(data);
         listarray.push(note);
         console.log(listarray);

         fs.writeFile("./db/db.json",JSON.stringify(listarray,null,4),(err)=>{
            if(err){
                return response.status(500).json({msg:"error writing db"})
            } else {
                return response.json(listarray);
            }
           })

        // --

        // add new note to json

        // response
        // response.send("Success!");


        
        
});
// router.get("/api/favlist/added",(req,res)=>{
//     res.json(database);
// })
    
});









module.exports = router

