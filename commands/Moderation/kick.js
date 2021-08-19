const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'kick',
    description: "Kicks member from server if u have a private server recommend this!",
    UserPerms: "ADMINISTRATOR",
    BotPerms: "ADMINISTRATOR",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const user = message.mentions.members.first();

        if (user) {
            user.kick().then(() => {
                message.channel.send('Kicked!')
            })
        } else {
            message.channel.send('cant find user')
        }

    }
} 