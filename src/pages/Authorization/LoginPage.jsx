import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/auth-slices/loginSlice";

import { useFormik } from "formik";
import { loginSchema } from "../../helpers/loginSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./authorization-styles.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.login.isAuth);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values, actions) => {
    try {
      await dispatch(loginUser(values));
      actions.resetForm();
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "taihou_i@mail.ru",
      password: "12345678Qq#",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

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
        <button
          className="sign-in__btn"
          type="submit"
          onClick={formik.handleSubmit}
          disabled={!isFormValid() || formik.isSubmitting}
        >
          Sign In
        </button>
      </div>
      <div className="any-account__link-wrapper">
        i don't have an account?{" "}
        <Link to="/register" className="bold-weight">
          Sign Up Now
        </Link>
      </div>

      <div className="any-account__link-wrapper">
        <Link to="/" className="bold-weight">
          Go to Home page
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
