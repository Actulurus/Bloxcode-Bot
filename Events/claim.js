module.exports = function claim(interaction) {
    if (!interaction.isButton()) return;
    if (interaction.customId !== "claim") return;
    interaction.channel.send(`Your order will be handled by <@${interaction.user.id}>`);
};