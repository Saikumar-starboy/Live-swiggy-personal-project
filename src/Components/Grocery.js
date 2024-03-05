import React, { useState } from "react";

const Grocery = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]:value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);

      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black rounded-lg w-4/12 text-center p-4 mt-28"
    >
      <div>
        <label>Username</label>
        <input
          className="border border-gray-500 m-2 rounded-lg"
          type="text"
          name="username"
          value={FormData.username}
          onChange={handleChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>
      <div>
        <label>Email</label>
        <input
          className="border border-gray-500 m-2 rounded-lg"
          type="text"
          name="email"
          value={FormData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Password</label>
        <input
          className="border border-gray-500 m-2 rounded-lg"
          type="password"
          name="password"
          value={FormData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <button
        className="border border-blue-950 bg-blue-500 rounded-lg p-1"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Grocery;
