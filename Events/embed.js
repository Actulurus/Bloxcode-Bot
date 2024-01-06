const { EmbedBuilder } = require("discord.js");
const { PermissionFlagsBits } = require("discord.js");

module.exports = function sendEmbed(interaction) {
    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
        return interaction.reply({ content: `You are not a Mod!`, ephemeral: true });
    }
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName !== "embed") return;
    console.log("Running")
    const channel = interaction.options.getChannel("channel");
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const color = interaction.options.getString("color");
    const image = interaction.options.getString("image");
    const thumbnail = interaction.options.getString("thumbnail");

    const newEmbed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description);

    if (color) {
        newEmbed.setColor(color);
    }

    if (image) {
        newEmbed.setImage(image);
    }
    if (thumbnail) {
        newEmbed.setThumbnail(thumbnail);
    }

    try {
        channel.send({ embeds: [newEmbed] });
    } catch (err) {
        console.error(err);
    }

    interaction.reply({ content: `Created Embed in ${channel.name}!`, ephemeral: true });
}