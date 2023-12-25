const fs = require("fs");
const client = require("./client.js");

const EventsFolder = fs.readdirSync(`./Events`);

console.log(EventsFolder)

module.exports = function eventHandler() {
    client.on("interactionCreate", async(interaction) => {
        for (const Event of EventsFolder) {
            const loggedEvent = require(`./Events/${Event}`);
            await loggedEvent(interaction);
        }
    });
}


