class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("how much")) {
      this.actionProvider.helloWorldHandler();
    }
  }
}

export default MessageParser;