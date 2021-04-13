const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('VirgoBot is online!');
})

client.on('message', message => {

    const args = message.content.split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'q' || command === 'que' || command === 'que?' || command === '¿que?'){
        client.commands.get('que').execute(message);
    }else if (command === '!ping') {
        client.commands.get('ping').execute(message);
    } else if (command === '!hola'){
        client.commands.get('hola').execute(message);
    }
})

client.login(process.env.TOKEN);