import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { validationSchema } from "../../helpers/validationSchema";
import { FaEye } from "react-icons/fa"; // eye-icon active
import { FaEyeSlash } from "react-icons/fa"; // eye-icon hidden

import "./authorization-styles.css";

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  const isFormValid = () => {
    return (
      formik.values.email && !formik.errors.email && !formik.errors.password
    );
  };

  return (
    <div className="auth-wrapper">
      <div className="head-wrapper">
        Welcome Back To <p>CooksCorner</p>
      </div>
      <div className="auth__input__list-container">
        <div className="auth__input-container">
          <span>Gmail</span>
          <input
            className="input-style"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your email"
          />
          {formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="auth__input-container">
          <span>Password</span>
          <input
            className="input-style password-btn"
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Create password"
          />
          <button
            className="pass-button"
            type="button"
            onClick={handleShowPassword}
          >
            {showPassword ? (
              <FaEyeSlash className="pass-button__icon" />
            ) : (
              <FaEye className="pass-button__icon" />
            )}
          </button>
          {formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>
        <button className="sign-in__btn" type="button">
          Sign In
        </button>
      </div>
      <div className="any-account__link-wrapper">
        i don't have an account? <Link to="/sign-up">Sign Up Now</Link>
      </div>
    </div>
  );
}

export default SignInPage;
