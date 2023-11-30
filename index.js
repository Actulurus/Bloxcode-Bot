import "dotenv/config";
import { Client, REST, Routes } from "discord.js";
import client from "./client.js";
import commands from "./commands.js";
import eventHandler from "./eventHandler.js";


const token = process.env.TOKEN;
const clientID = process.env.CLIENTID;

const rest = new REST().setToken(token);


(async () => {
    try {
        console.log("creating commands")

        await rest.put(Routes.applicationCommands(clientID), {
            body: commands
        },);

    } catch (err) {
        console.log(err);
    }
})();

client.on('ready', () => {
    console.log("Logged in");
});

eventHandler();

client.login(token);