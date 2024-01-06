const { PermissionFlagsBits } = require("discord.js");

module.exports = function claim(interaction) {
    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
        return interaction.reply({ content: `You are not a Mod!`, ephemeral: true });
    }
    if (!interaction.isButton()) return;
    if (interaction.customId !== "claim") return;
    interaction.channel.send(`Your order will be handled by <@${interaction.user.id}>`);
};