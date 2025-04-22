import React from "react";

const Step2 = ({ data, errors, handleChange, addEmailField }) => (
  <div className="step">
    <h2>Step 2: Emails</h2>
    {data.emails.map((email, index) => (
      <div key={index}>
        <label>Email {index + 1}:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleChange(e, index)}
        />
        {errors[`email-${index}`] && (
          <p className="error">{errors[`email-${index}`]}</p>
        )}
      </div>
    ))}
    <button type="button" onClick={addEmailField}>
      + Add Email
    </button>
  </div>
);

export default Step2;
