const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");

const rawData = fs.readFileSync('config.json');
const configData = JSON.parse(rawData);

function sendWelcomeMessage(member) {
    const welcomeChannel = member.guild.channels.cache.get(configData.welcome_channel);

    if (welcomeChannel) {
        welcomeChannel.send(`Welcome to the server, ${member.user.tag}!`);
    } else {
        console.error("Welcome channel not found.");
    }
}

module.exports = { sendWelcomeMessage };