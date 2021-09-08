const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'ban',
    description: "Bans member from server",
    UserPerms: "ADMINISTRATOR",
    BotPerms: "ADMINISTRATOR",
    
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
    

        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        if (!reason) return message.channel.send('Tell me a reason!');

        if (user) {

            await user.ban({
                reason: reason,
            }).then(() => {
                message.channel.send(`Successfully banned   from the server!`)
            })
     
              
            

        } else {
            message.channel.send('cant find the user!')
        }

    }
} 