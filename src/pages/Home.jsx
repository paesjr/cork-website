import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../components/chatbot/MessageParser";
import ActionProvider from "../components/chatbot/ActionProvider";
import config from "../components/chatbot/Config";

function Home() {
  return (
    <>
      <div>
        <ImageSlider slides={SliderData} />
      </div>
      <div className="chatbot-container">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
