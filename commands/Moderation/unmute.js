const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unmute',
    aliases: ['um'], 
    description: 'unmute him so he can talk',
    UserPerms: "ADMINISTRATOR",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        
        const member = message.mentions.members.first();
        let target = message.guild.members.cache.get(member.id)
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        target.roles.remove(role.id);
        message.reply('Unmuted the user!')


    } //lets try
}
