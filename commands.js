const { ApplicationCommandOptionType } = require("discord.js");

const commands = [
    {
        name: "ping",
        description: "pong",
    },
    {
        name: "embed",
        description: "send a embed message in a channel with the bot.",
        options: [
            {
                name: "channel",
                description: "channel to send the embed to",
                type: ApplicationCommandOptionType.Channel,
                required: true
            },
            {
                name: "title",
                description: "the embed title",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "description",
                description: "the embed description",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "color",
                description: "the embed color",
                type: ApplicationCommandOptionType.String,
                // required: true
            },
            {
                name: "image",
                description: "the embed image",
                type: ApplicationCommandOptionType.String,
                // required: true
            },
            {
                name: "thumbnail",
                description: "the embed thumbnail",
                type: ApplicationCommandOptionType.String,
                // required: true
            },
        ]
    },
    {
        name: "setup",
        description: "setup order channel",
        options: [
            {
                name: "channel",
                description: "channel to setup in",
                type: ApplicationCommandOptionType.Channel,
                required: true
            },
            {
                name: "title",
                description: "the embed title",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "description",
                description: "the embed description",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "button_text",
                description: "the buttons text",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: "color",
                description: "the embed color",
                type: ApplicationCommandOptionType.String,
                // required: true
            },
            {
                name: "image",
                description: "the embed image",
                type: ApplicationCommandOptionType.String,
                // required: true
            },
        ]
    }
];

module.exports = commands