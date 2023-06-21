import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const config = {
  initialMessages: [
    createChatBotMessage(`Welcome to CORK bodyboards! How can I help you?`),
  ],
  botName: "CORK BOT",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};

export default config;
