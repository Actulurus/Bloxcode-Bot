import "dotenv/config";
import { Client, REST, Routes } from "discord.js";
import client from "./client.js";
import commands from "./commands.js";
import { sendWelcomeMessage } from "./welcome.js";
import "dotenv/config";

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

client.login(token);