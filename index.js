const { Telegraf } = require("telegraf");

require("dotenv").config();

const TARGET_CHAT_ID = -1001445523274;
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("/getChatId", (ctx) => {
  ctx.reply(ctx.message.chat.id);
});

bot.on("message", (ctx) => {
  if (ctx.message.chat.id !== TARGET_CHAT_ID)
    ctx.forwardMessage(TARGET_CHAT_ID);
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
