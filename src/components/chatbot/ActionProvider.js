class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  helloWorldHandler = () => {
    const message = this.createChatBotMessage(
      'Prices for kids bodyboards (22") are NZ$195 and bigger sizes (30" and above) starts from NZ$395. You can get a quote from our "GET A QUOTE" page and if you do not know your board size try our "SIZE CALCULATOR" in the navigation bar above ☝️'
    );
    this.setChatbotMessage(message);
  };

  timeHandler = () => {
    const message = this.createChatBotMessage(
      "The estimated time of manufactoring is approximately 4 weeks after the initial deposit."
    );
    this.setChatbotMessage(message);
  };

  materialHandler = () => {
    const message = this.createChatBotMessage(
      "Cork bodyboards are made of upcycle EPS foam, plant fibers, timber and cork. Is also sealed with varnish and beeswax."
    );
    this.setChatbotMessage(message);
  };

  defaultHandler = () => {
    const message = this.createChatBotMessage(
      "I'm sorry, but I couldn't understand your question. Can you please rephrase or ask a human being in the contact page please?"
    );
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
