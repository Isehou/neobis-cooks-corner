import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../../helpers/validationSchema";
import { FaEye } from "react-icons/fa"; // eye-icon active
import { FaEyeSlash } from "react-icons/fa"; // eye-icon hidden
import { SiMaildotru } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { verifyEmail } from "../../store/slices/auth-slices/emailVerificationSlice";
import { registerUser } from "../../store/slices/auth-slices/registerSlice";

import "./authorization-styles.css";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.emailVerification.loading);
  const error = useSelector((state) => state.emailVerification.error);
  const success = useSelector((state) => state.emailVerification.success);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (values, actions) => {
    try {
      await dispatch(registerUser(values));
      actions.resetForm();
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      password_confirm: "",
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
    <form className="auth-wrapper">
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
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
          <button className="pass-button none-select" type="button" disabled>
            <IoMdPerson className="pass-button__icon button-icon" />
          </button>
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
          <button className="pass-button none-select" type="button" disabled>
            <SiMaildotru className="pass-button__icon button-icon " />
          </button>
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
            className="pass-button none-select"
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
            name="password_confirm"
            id="password_confirm"
            type={showConfirmPassword ? "text" : "password"}
            value={formik.values.password_confirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Re-enter your paswword"
          />
          <button
            className="pass-button none-select"
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
        <button
          className="sign-up__btn"
          type="submit"
          onClick={formik.handleSubmit}
          disabled={!isFormValid() || formik.isSubmitting}
        >
          Sign Up
        </button>
      </div>
      <div className="any-account__link-wrapper">
        Alredy have an account?
        <Link to="/login" className="bold-weight">
          Sign In Now
        </Link>
      </div>
    </form>
  );
}

export default RegisterPage;
