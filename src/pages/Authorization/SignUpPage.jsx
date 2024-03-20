import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { validationSchema } from "../../helpers/validationSchema";
import { FaEye } from "react-icons/fa"; // eye-icon active
import { FaEyeSlash } from "react-icons/fa"; // eye-icon hidden

import "./authorization-styles.css";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit,
  });

  const isFormValid = () => {
    return (
      formik.values.email &&
      !formik.errors.email &&
      !formik.errors.username &&
      !formik.errors.password &&
      !formik.errors.confirmPassword &&
      formik.values.password === formik.values.confirmPassword
    );
  };

  return (
    <div className="auth-wrapper">
      <div className="head-wrapper">
        Sign up for delicious <p>Discoveries!</p>
      </div>
      <div className="auth__input__list-container">
        <div className="auth__input-container">
          <span>Username</span>
          <input
            className="input-style"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Enter your name"
          />
          {formik.errors.username ? (
            <div className="error-message">{formik.errors.username}</div>
          ) : null}
        </div>

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
            placeholder="Enter your password"
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

        <div className="auth__input-container">
          <span>Re-password</span>
          <input
            className="input-style password-btn"
            name="confirmPassword"
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Re-enter your paswword"
          />
          <button
            className="pass-button"
            type="button"
            onClick={handleShowConfirmPassword}
          >
            {showConfirmPassword ? (
              <FaEyeSlash className="pass-button__icon" />
            ) : (
              <FaEye className="pass-button__icon" />
            )}
          </button>
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <div className="error-message">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <button className="sign-up__btn" type="button">
          Sign In
        </button>
      </div>
      <div className="any-account__link-wrapper">
        Alredy have an account?
        <Link Link to="/sign-in">
          Sign In Now
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
