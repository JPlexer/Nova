/************************************************************************************************
 *...............................................................................
 *..........%%%%,....%%%%,...,%%%%%%%%/...%%%%#..../%%%%..../%%%%%%..............
 *.........,%%%%%/...%%%%,..%%%%%%%%%%%%,.(%%%%....%%%%#...,%%%%%%%%.............
 *.........,%%%%%%%..%%%%,.(%%%%*...%%%%%..%%%%*..,%%%%....%%%%.%%%%*............
 *.........,%%%%%%%%.%%%%,.%%%%%....%%%%%..*%%%%..%%%%(...*%%%%.,%%%%............
 *.........,%%%%.%%%%%%%%,.%%%%%....%%%%%...%%%%,.%%%%....%%%%...%%%%*...........
 *.........,%%%%..%%%%%%%,.(%%%%*...%%%%%...,%%%#(%%%*...#%%%%....%%%%...........
 *.........,%%%%...*%%%%%,..%%%%%%%%%%%%,....%%%%%%%%....%%%%,....%%%%(..........
 *.........,%%%%.....%%%%....,%%%%%%%%*......,%%%%%%,...#%%%%.....#%%%%..........
 *...............................................................................
 *
 *   Command here: Command for Nova
 *   Copyright (C) 2019 Designed and Programed by Swingin30 and Techlion
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * ***********************************************************************************************/
module.exports.run = async (client, msg) => {
    const Discord = require('discord.js');
    const fs = require("fs")
    let settings = JSON.parse(fs.readFileSync("./settings.nvac", "utf8"))
    let images = JSON.parse(fs.readFileSync("./images.nvac", "utf8"))
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.nvac", "utf8"))
    if(!prefixes[msg.guild.id]){
      prefixes[msg.guild.id] = {
        prefixes: settings.prefix
      };
    }
    let prefix = prefixes[msg.guild.id].prefixes
    let embed = new Discord.RichEmbed
    embed.setAuthor(msg.author.username, msg.author.avatarURL)
    embed.setTitle("General information");
    embed.setColor(0xE70056);
    embed.setThumbnail(`${images.logo}`)
    embed.setDescription('Nova is a general purpose bot meant to fulfill all of the needs of the average Discord server.')
    embed.addField("Important information:", "this is the Alpha version of Nova and is not release ready. expect to find bugs")
    embed.addField("Developers", "Swingin30#9105\nTechLion#1789\nAlee#0014");
    embed.addField("Special thanks to:", "cylex#2831, vicr123#4567, Squid Grill#6238, reflectronic#6230.")
    embed.addField("Sources", "AstralMod, Suzu")
    embed.addField("Links", "Help support the developers that made this possible using these platforms:\n[Nova Github](https://github.com/software-elevated/Nova)\n[AstralMod Github](https://github.com/vicr123/AstralMod/)\n[Discord](https://discord.gg/3VNHTBg)");
    embed.setFooter("Use "+prefix+"help to see all of my commands");
    msg.channel.send({embed});
  
};

exports.conf = {
  aliases: ["a"],
  guildOnly: false,
};
exports.help = {
  name: 'about',
  description: 'The about command, displays general information about the bot',
  usage: 'about',
  category: '- Utility Commands',
};