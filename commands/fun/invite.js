const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: `invite`,
  description: "Gives you invite link of bot!",
  usage: `bot invite`,
  emoji: "👨➕",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
      .setColor("#303136")
      .setDescription(
        "[Click Here to Invite me](https://discord.com/api/oauth2/authorize?client_id=857438094407368765&permissions=0&scope=bot)"
      );
    message.channel.send({ embeds: [embed] });
  },
};