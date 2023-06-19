import React, { useState } from "react";

const OrderForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [boardSize, setBoardSize] = useState("");
  const [template, setTemplate] = useState("");
  const [tailShape, setTailShape] = useState("");
  const [channels, setChannels] = useState("");
  const [contours, setContours] = useState(false);
  const [noseBulbs, setNoseBulbs] = useState(false);
  const [total, setTotal] = useState(0);

  const handleBoardSizeChange = (e) => {
    setBoardSize(e.target.value);
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  const handleTailShapeChange = (e) => {
    setTailShape(e.target.value);
  };

  const handleChannelsChange = (e) => {
    setChannels(e.target.value);
  };

  const handleContoursChange = (e) => {
    setContours(e.target.checked);
  };

  const handleNoseBulbsChange = (e) => {
    setNoseBulbs(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalPrice = 395; // Base price

    // Calculate additional costs based on user choices
    if (channels === "Quad") {
      totalPrice += 25;
    }

    if (contours) {
      totalPrice += 50;
    }

    if (noseBulbs) {
      totalPrice += 50;
    }

    setTotal(totalPrice);
  };

  return (
    <>
      <div className="order-form">
        <h2>CUSTOM ORDER FORM</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="FIRST NAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="LAST NAME"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="DELIVERY ADDRESS"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="POST CODE"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="COUNTRY"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            placeholder="CONTACT NUMBER"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <label htmlFor="boardSize">Board Size:</label>
          <select
            id="boardSize"
            className="input-field"
            value={boardSize}
            onChange={handleBoardSizeChange}
          >
            <option value="">Select Size</option>
            <option value="30">30"</option>
            <option value="32">32"</option>
            <option value="34">34"</option>
            <option value="36">36"</option>
            <option value="37">37"</option>
            <option value="37.5">37.5"</option>
            <option value="38">38"</option>
            <option value="38.5">38.5"</option>
            <option value="39">39"</option>
            <option value="39.5">39.5"</option>
            <option value="40">40"</option>
            <option value="40.5">40.5"</option>
            <option value="41">41"</option>
            <option value="41.5">41.5"</option>
            <option value="42">42"</option>
            <option value="42.5">42.5"</option>
            <option value="43">43"</option>
            <option value="43.5">43.5"</option>
            <option value="44">44"</option>
            <option value="45">45"</option>
            <option value="46">46"</option>
          </select>

          <label htmlFor="template">Template:</label>
          <select
            id="template"
            className="input-field"
            value={template}
            onChange={handleTemplateChange}
          >
            <option value="">Select Template</option>
            <option value="Versatile Prone">Versatile Prone</option>
            <option value="DK">DK</option>
          </select>

          <label htmlFor="tailShape">Tail Shape:</label>
          <select
            id="tailShape"
            className="input-field"
            value={tailShape}
            onChange={handleTailShapeChange}
          >
            <option value="">Select Tail Shape</option>
            <option value="Crescent">Crescent</option>
            <option value="Bat tail">Bat tail</option>
            <option value="Flat Bat tail">Flat Bat tail</option>
          </select>

          <label htmlFor="channels">Channels:</label>
          <select
            id="channels"
            className="input-field"
            value={channels}
            onChange={handleChannelsChange}
          >
            <option value="">Select Channels</option>
            <option value="Standard">Standard</option>
            <option value="Quad">Quad</option>
          </select>

          <label htmlFor="contours">Contours:</label>
          <input
            id="contours"
            type="checkbox"
            className="checkbox-field"
            checked={contours}
            onChange={handleContoursChange}
          />

          <label htmlFor="noseBulbs">Nose Bulbs:</label>
          <input
            id="noseBulbs"
            type="checkbox"
            className="checkbox-field"
            checked={noseBulbs}
            onChange={handleNoseBulbsChange}
          />

          <button type="submit">GET A QUOTE</button>
        </form>
        <p>Total: ${total}</p>
      </div>
    </>
  );
};

export default OrderForm;
