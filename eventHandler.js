const fs = require("fs");
const client = require("./client.js");
const { PermissionsBitField } = require("discord.js");

const EventsFolder = fs.readdirSync(`./Events`);

console.log(EventsFolder);

module.exports = function eventHandler() {
    client.on("interactionCreate", async (interaction) => {
        try {
            for (const Event of EventsFolder) {
                const loggedEvent = require(`./Events/${Event}`);
                await loggedEvent(interaction);
            }
        } catch (err) {
            console.log(err);
        }
    });
}


