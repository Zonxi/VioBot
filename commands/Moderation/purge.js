const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'purge',
    aliases: ['clear'],
    description: "deletes 99 or less messages",
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
   
    
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        try {
            let delamount = args[0];
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply('Error:')

            if (parseInt(delamount) > 1000) return message.reply('you cant delete 100 messages at a time!')

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            await message.channel.send('Purged Messages!').then(m => {
                setTimeout(() => {
                    m.delete()
                }, 5000) // 5 seconds
            })
        } catch (e) {
            console.log(e)
        } //lets try it
    }
}