class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("how much") || lowercase.includes("price") || lowercase.includes("purchase")) {
      this.actionProvider.helloWorldHandler();
    }

    if (lowercase.includes("time") || lowercase.includes("turnaround")) {
      this.actionProvider.timeHandler();
    }
  }
}

export default MessageParser;
