const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
module.exports = function setup(interaction) {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName !== "setup") return;
    const channel = interaction.options.getChannel("channel");
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const color = interaction.options.getString("color");
    const image = interaction.options.getString("image");
    const text = interaction.options.getString("button_text");

    const newEmbed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description);

    if (color) {
        newEmbed.setColor(color);
    }

    if (image) {
        newEmbed.setImage(image);
    }

    const row = new ActionRowBuilder();

    const orderButton = new ButtonBuilder()
        .setCustomId("order_button")
        .setStyle(ButtonStyle.Success)
        .setLabel(buttonText)
        .setEmoji("📦");

    row.addComponents(orderButton);

    channel.send({ embeds: [newEmbed], components: [row] });

    interaction.reply({ content: `Setup in ${channel.name}!`, ephemeral: true });
};