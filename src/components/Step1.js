import React from "react";

const Step1 = ({ data, errors, handleChange }) => (
  <div className="step">
    <h2>Step 1: Name</h2>
    <label>Name:</label>
    <input
      type="text"
      name="name"
      value={data.name}
      onChange={handleChange}
    />
    {errors.name && <p className="error">{errors.name}</p>}
  </div>
);

export default Step1;
