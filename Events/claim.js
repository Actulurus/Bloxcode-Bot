export default function claim(interaction){
    interaction.channel.send(`Your order will be handled by ${interaction.user.id}`);
}