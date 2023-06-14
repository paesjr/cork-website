import React from "react";

function Form() {
  return (
    <div className="formCard">
      <h3 className="formTitle">Contact us!</h3>
      <form className="form">
        <div className="group">
          <input placeholder="‎" type="text" required />
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
    </div>
  );
}

export default Form;
