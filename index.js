require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (!message.author.bot)
    message.reply({
      content: `Hey ${message.author.globalName} , How are you?`,
    });
});

client.on("interactionCreate", (interaction) => {
  console.log("interaction", interaction);

  interaction.reply("Pong!!");
});

client.login(process.env.DISCORD_BOT_TOKEN);
