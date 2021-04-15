const Discord = require('discord.js');
const ayar = require("../settings.json");
module.exports = (message) => {

    if (message.content.toLowerCase() === "tag") {
        message.channel.send(`${ayar.tag}`)
    };

};

module.exports.configuration = {
    name: "message"
  }