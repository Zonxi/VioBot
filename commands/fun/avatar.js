const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  categories: "other",
  permissions: " ",
  description: "Show (YOUR) Avatar",
  
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
      let user = message.author || message.mentions.users.first();
    let avs = new MessageEmbed()
      .setAuthor(
        `Avatar from: ${user.tag}`,
        user.displayAvatarURL({ dynamic: true }),
        "https://discord.gg/UA6sSqKXpZ"
      )
      .setColor(00000)
      .addField(
        "❱ PNG",
        `[\`LINK\`](${user.displayAvatarURL({ format: "png" })})`,
        true
      )
      .addField(
        "❱ JPEG",
        `[\`LINK\`](${user.displayAvatarURL({ format: "jpg" })})`,
        true
      )
      .addField(
        "❱ WEBP",
        `[\`LINK\`](${user.displayAvatarURL({ format: "webp" })})`,
        true
      )
      .setURL(
        user.displayAvatarURL({
          dynamic: true,
        })
      )
      .setFooter("Made By Zonxi")
      .setImage(
        user.displayAvatarURL({
          dynamic: true,
          size: 512,
        })
      );

      message.channel.send({embeds : [avs]})
  },
};