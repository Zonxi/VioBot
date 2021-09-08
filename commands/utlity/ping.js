const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'ping',
    description: 'Shows ping',
    run: async (client, message, args, Discord) => {
      const Embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Pong')
  .addFields(
		{ name: 'Bot latency', value: `${client.ws.ping}ms.` },
	)
	.setTimestamp()
	message.channel.send({ embeds: [Embed] });
       
    }
}