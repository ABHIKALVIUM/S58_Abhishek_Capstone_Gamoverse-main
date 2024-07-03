const express = require('express');
var data_routes=express.Router();
const gameModel=require('../Model/DataModel')


 data_routes.get("/getdata",async(req,res)=>{
    try{
        const gamedata=await gameModel.find();
        res.send(gamedata);
    }catch(err){
        res.send(err)
    }
})

data_routes.post("/postdata", async (req, res) => {
    console.log(req.body);
    
    try {
        const result=await gameModel.insertMany(req.body)
        res.send("Posted the document successfully")
    } catch (error) {
        res.send(error)
    }
    
});

data_routes.put("/updatedata/:id",async (req,res)=>{
    let payload=req.body;
    let id=req.params.id
    try {
      let result=await gameModel.findByIdAndUpdate(id,payload)
      res.json({msg:"Updated the document successfully"})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
    });


    data_routes.patch("/updatedata/:id",async (req,res)=>{
        let payload=req.body;
        let id=req.params.id
        console.log(id)
        try {
          let result=await gameModel.findByIdAndUpdate(id,payload)
          res.json({msg:"Updated the document successfully"})
        } catch (error) {
          console.log(error)
          res.send(error)
        }
        });

module.exports=data_routes;

