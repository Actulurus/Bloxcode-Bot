const { Client, REST, Routes }  = require("discord.js")
const client = require("./client.js");
const commands = require("./commands.js");
const { sendWelcomeMessage } = require("./welcome.js");
const dotenv = require("dotenv");
dotenv.config()
const eventHandler = require("./eventHandler.js");

const token = process.env.TOKEN;
const clientID = process.env.CLIENTID;

const rest = new REST().setToken(token);


(async () => {
    try {
        console.log("creating commands");

        await rest.put(Routes.applicationCommands(clientID), {
            body: commands
        },);

    } catch (err) {
        console.log(err);
    }
})();

client.on("guildMemberAdd", (member) => {
    sendWelcomeMessage(member);
});

client.on('ready', () => {
    console.log("Logged in");
});

eventHandler()

client.login(token);