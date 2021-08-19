const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'rules',
    description: "gives all the rules for the server",
    UserPerms: "ADMINISTRATOR",
    BotPerms: "ADMINISTRATOR",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        //now lets start the embed!
        // this the embed template
        const embed = new Discord.MessageEmbed()
            .setColor('#ff0000') // Over here we can put the color of the embed => hex code or in caps
            .setTitle('Rules!') // This is the title of the embe
            .setAuthor('Zonxi!', 'https://cdn.discordapp.com/icons/859508439617241128/b0d24cf12c45273cbf262bdc882518ec.png') // The author comes above the title, so the first part is the text and second is the icon.. let me get a icon url
            .setDescription('Rules for The server.') // this is right below the title
            .setThumbnail('https://cdn.discordapp.com/icons/859508439617241128/b0d24cf12c45273cbf262bdc882518ec.png') // Thumbnail comes next to the title its a image
            .addFields(
                { name: 'Rule1', value: 'No Spamming' }, // There are fields
                { name: 'Rule2', value: 'No Nsfw of any kind!' }, // lets add one more field and remove the \u200b
                //{ name: '\u200B', value: '\u200B' }, // this is optional.. the \u200b is for leaving space under the first field
            )
            .addField('Rule3', 'No hard r') // now i will show u what the true does
            .addField('Rule4', 'Dont be to toxic') // this is a normal field.. the true is for making it inline.. you can make it false and try it
            .addField('Rule5', 'No advertising/dm advertising') // this is
            .addField('Rule6', 'No leaking personal stuff without permission!')
            .addField('Rule7', 'Do not spam ping staff/members')
            .setTimestamp() // this will give the time when the embed was sent
            .setFooter('Vio', 'https://cdn.discordapp.com/icons/859508439617241128/b0d24cf12c45273cbf262bdc882518ec.png6'); // right bellow the embed
  message.channel.send({ content: 'Rules', embeds: [embed] }); // make sure to put {embeds: [embed]}
      
    }
}