
const { Player } = require('../models/player.model');
module.exports.index = (request, response) => {
    Player.find({})
    .then(res=>{response.json(res)})
    .catch(err=>{
      response.json(err)
    })
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    const { playerName, preferedPostion} = request.body;
    Player.create({
      playerName,
      preferedPostion,
      Game1:"Undecided",
      Game2:"Undecided",
      Game3:"Undecided"
    })
        .then(player => response.json(player))
        .catch(err => response.json(err));
}
module.exports.updatePlayer = (request, response) => {
  const { Game } = request.body;
  Player.create({
    playerName,
    preferedPostion,
    Game1:"Undecided",
    Game2:"Undecided",
    Game3:"Undecided"
  })
      .then(player => response.json(player))
      .catch(err => response.json(err));
}
