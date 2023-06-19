import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

// Config starter code

const config = {
  initialMessages: [createChatBotMessage(`Welcome to CORK bodyboards!`)],
  botName: "CORK BOT",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  state: {
    movieTitles: ["The lord of the rings", "Con Air"],
  },
};

export default config;
