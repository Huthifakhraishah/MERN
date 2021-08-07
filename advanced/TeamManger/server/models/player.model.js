const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
playerName:{type:String},
preferedPostion:{type:String},
Game1:{type:String},
Game2:{type:String},
Game3:{type:String},
},{timestamps:true});

module.exports.Player=mongoose.model('Player',PlayerSchema);