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

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message], // Corrected property name 'messages'
    }));
  };
}

export default ActionProvider;
