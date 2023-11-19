import { Client, GatewayIntentBits, IntentsBitField, REST, Routes } from "discord.js";
import commands from "./commands.js";
import { sendWelcomeMessage } from "./welcome.js";
import "dotenv/config";

const token = process.env.TOKEN;
const AppID = process.env.APPLICATIONID;

const rest = new REST().setToken(token);

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
    ]
});


(async () => {
    await rest.put(Routes.applicationCommands(AppID), {
        commands
    });
});

client.on("messageCreate", (msg) => {
    if (msg.content === "ping") {
        msg.reply("Pong");
    }
});

client.on("guildMemberAdd", (member) => {
    sendWelcomeMessage(member);
});

client.login(token);