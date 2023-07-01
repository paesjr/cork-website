import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    alert(`Thanks, ${name}, for contacting us!

    We received your message and we’ll reply by email asap. If the inquiry is urgent, it’s best to use the number listed below to talk to our team.
    
    Thanks again!
    
    CORK bodyboards`);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="formCard">
      <h3 className="formTitle">Contact us!</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group">
          <input
            placeholder="‎"
            type="text"
            required
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="group">
          <input
            placeholder="‎"
            type="email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="group">
          <textarea
            /* Compart Unicode Character U+200E */
            placeholder="‎"
            id="comment"
            name="comment"
            rows="5"
            required
          ></textarea>
          <label htmlFor="comment">Message</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <br />
      <p>📞+64 02102903997</p>
    </div>
  );
}

export default Form;
