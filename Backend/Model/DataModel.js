const mongoose=require('mongoose');

const gameSchema=new mongoose.Schema({
        sr_no: Number,
        name: String,
        discount_percentage: Number,
        img_link: String,
        description: String,
        Steam: String,
        Epic: String
})

const gameModel=mongoose.model("game_datas",gameSchema);
module.exports=gameModel;