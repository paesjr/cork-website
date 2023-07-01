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
      this.actionProvider.priceHandler();
    }

    if (lowercase.includes("time") || lowercase.includes("turnaround")) {
      this.actionProvider.timeHandler();
    }

    if (lowercase.includes("material") || lowercase.includes("made")) {
      this.actionProvider.materialHandler();
    }

    if (lowercase.includes("sell") || lowercase.includes("product")) {
      this.actionProvider.productHandler();
    }

    if (lowercase.includes("contact") || lowercase.includes("touch")) {
      this.actionProvider.contactHandler();
    }

    if (
      lowercase.includes("size") ||
      lowercase.includes("length") ||
      lowercase.includes("dimensions")
    ) {
      this.actionProvider.sizeHandler();
    }

    // Fallback response
    if (
      !lowercase.includes("how much") &&
      !lowercase.includes("price") &&
      !lowercase.includes("purchase") &&
      !lowercase.includes("time") &&
      !lowercase.includes("turnaround") &&
      !lowercase.includes("material") &&
      !lowercase.includes("made") &&
      !lowercase.includes("sell") &&
      !lowercase.includes("product") &&
      !lowercase.includes("contact") &&
      !lowercase.includes("touch") &&
      !lowercase.includes("size") &&
      !lowercase.includes("length") &&
      !lowercase.includes("dimensions")
    ) {
      this.actionProvider.defaultHandler();
    }
  }
}

export default MessageParser;
