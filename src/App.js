import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    emails: [""],
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};
    if (step === 1 && !formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (step === 2) {
      formData.emails.forEach((email, i) => {
        if (!email) {
          newErrors[`email-${i}`] = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors[`email-${i}`] = "Invalid email format.";
        }
      });
    }
    if (step === 3) {
      if (!formData.password || !formData.confirmPassword) {
        newErrors.password = "Both password fields are required.";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.password = "Passwords do not match.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const newEmails = [...formData.emails];
      newEmails[index] = value;
      setFormData((prev) => ({ ...prev, emails: newEmails }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addEmailField = () => {
    setFormData((prev) => ({ ...prev, emails: [...prev.emails, ""] }));
  };

  const handleSubmit = () => {
    if (validateStep()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <h1>Multi-step Form</h1>
      <ProgressBar currentStep={step} />
      {step === 1 && <Step1 data={formData} errors={errors} handleChange={handleChange} />}
      {step === 2 && (
        <Step2
          data={formData}
          errors={errors}
          handleChange={handleChange}
          addEmailField={addEmailField}
        />
      )}
      {step === 3 && <Step3 data={formData} errors={errors} handleChange={handleChange} />}
      <div className="buttons">
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
}

export default App;
