class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (
      lowercase.includes("how much") ||
      lowercase.includes("price") ||
      lowercase.includes("purchase")
    ) {
      this.actionProvider.helloWorldHandler();
    }

    if (lowercase.includes("time") || lowercase.includes("turnaround")) {
      this.actionProvider.timeHandler();
    }

    if (lowercase.includes("material") || lowercase.includes("made")) {
      this.actionProvider.materialHandler();
    }

    // Fallback response
    if (
      !lowercase.includes("how much") &&
      !lowercase.includes("price") &&
      !lowercase.includes("purchase") &&
      !lowercase.includes("time") &&
      !lowercase.includes("turnaround") &&
      !lowercase.includes("material") &&
      !lowercase.includes("made")
    ) {
      this.actionProvider.defaultHandler();
    }
  }
}

export default MessageParser;
