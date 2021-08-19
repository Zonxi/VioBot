const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinformation',
    description: "sends what the servers about",
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
            .setTitle('info!') // This is the title of the embe
            .setAuthor('Zonxi!', 'https://cdn.discordapp.com/icons/859508439617241128/b0d24cf12c45273cbf262bdc882518ec.png') // The author comes above the title, so the first part is the text and second is the icon.. let me get a icon url
            .setDescription('Server Information') // this is right below the title
            .setThumbnail('https://cdn.discordapp.com/icons/859508439617241128/b0d24cf12c45273cbf262bdc882518ec.png') // Thumbnail comes next to the title its a image
            .addFields(
                { name: 'Info!', value: 'This Is a chatting server not just for video games but everything. We have a roblox exploit channel where our best scripter gives out his exploits FOR FREE and we make games. You can talk about fortnite, Splitgate,Apex whatever you want. We have active staff that are going to keep pushing to make this server better. We will add more roles and more channels as more people come in. If you have any ideas on what to add or do we will always listen just open a ticket and tell us or dm, Just please dont flood us!'}, // There are fields
            )
            .setTimestamp() // this will give the time when the embed was sent
            .setFooter('Vio', 'https://cdn.discordapp.com/icons/859508439617241128/b0d24cf12c45273cbf262bdc882518ec.png6'); // right bellow the embed
             message.channel.send({ content: 'Serverinformation', embeds: [embed] }); // make sure to put {embeds: [embed]}
      
    
            }
          }
        