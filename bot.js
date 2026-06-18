const TelegramBot = require("node-telegram-bot-api");

const token = "YOUR_BOT_TOKEN";
const groupId = "-1001234567890"; // your admin group ID

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {

    if (msg.web_app_data) {
        const data = msg.web_app_data.data;

        bot.sendMessage(groupId, data);
    }
});