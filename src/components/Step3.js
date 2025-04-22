import React from "react";

const Step3 = ({ data, errors, handleChange }) => (
  <div className="step">
    <h2>Step 3: Set Password</h2>
    <label>Password:</label>
    <input
      type="password"
      name="password"
      value={data.password}
      onChange={handleChange}
    />
    <label>Confirm Password:</label>
    <input
      type="password"
      name="confirmPassword"
      value={data.confirmPassword}
      onChange={handleChange}
    />
    {errors.password && <p className="error">{errors.password}</p>}
  </div>
);

export default Step3;
