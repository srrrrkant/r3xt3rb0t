const memer = require("discordmeme.js");
const Discord = require("discord.js");

module.exports.run = async (rex, message, args, Discord) => {
  let user = message.mentions.users.first();
  if (!user) user = message.author;

  let avatar = user.displayAvatarURL;

  let wasted = await memer.wasted(avatar);
  message.channel.send("Please Wait...").then(m => {
    m.delete(3000);
  });
  const attachment = new Discord.Attachment(wasted, "wasted.png");
  message.channel.send(attachment);
};

module.exports.help = {
  name: "wasted",
  aliases: ["waste"]
};
