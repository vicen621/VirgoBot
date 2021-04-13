module.exports = {
    name: 'hola',
    description: 'this is a hola command!',
    execute(message) {
        message.author.send('Tu nariz contra mis bolas! :rofl::zany_face:');
    }
}