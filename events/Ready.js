const client = require('../index')
const arrayOfStatus = [
    '.help/.h for all commands',
]





client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`)
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'idle', type: "PLAYING" })
    }, 5000)
}) 