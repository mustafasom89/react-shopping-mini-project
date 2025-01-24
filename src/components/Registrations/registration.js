import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../../store/store";
import regSuccess from "./success.js";

const validationSchema = Yup.object().shape({
  /*
>>  A registration page containing input for the following:
            ■ First Name (Should not exceed 15 characters)
            ■ Surname (Should not exceed 20 characters)
            ■ A valid email address
            ■ A password (Must contain 8 characters or more, at least one uppercase and lowercase letter, a number and a special case character)
            ■ A confirm password field (To ensure both passwords match)

>>  Logically it represents a registration form. It uses libraries such as:
    Formik, Yup, and Redux to handle form validation and state management.
    
>>  The component starts by importing necessary dependencies, including CSS files from Bootstrap 
    and a custom style file. It also imports React and various components from Formik, Yup, and Redux.

>>  The RegistrationPage component is exported as the default export of the module, 
    making it available for use in other parts of the application. 
    
>>  It renders a registration form with a heading and the Registration component.
    */
  firstName: Yup.string()
    .max(15, "First Name must not exceed 15 characters")
    .required("First Name is required"),
  surname: Yup.string()
    .max(20, "Surname must not exceed 20 characters")
    .required("Surname is required"),
  regEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  regPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("registrationPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const registrationEmail = useSelector((state) => state.registrationEmail);
  const registrationPassword = useSelector(
    (state) => state.registrationPassword
  );

  const Registration = () => {
    const initialValues = {
      firstName: "",
      surname: "",
      registrationEmaila: "",
      registrationPassword: "",
      confirmPassword: "",
    };

    const handleSubmit = (values) => {
      dispatch({
        type: "REG",
        payload: {
          email: values.registrationEmail,
          password: values.regPassword,
        },
      });
      {
        <regSuccess />;
      }
    };

    return (
      <Provider store={store}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label className="login-label" htmlFor="firstName">
                First Name
              </label>
              <Field
                className="login-input"
                type="text"
                id="firstName"
                name="firstName"
              />
              <ErrorMessage
                className="field-error"
                name="firstName"
                component="div"
              />
            </div>

            <div>
              <label className="login-label" htmlFor="surname">
                Surname
              </label>
              <Field
                className="login-input"
                type="text"
                id="surname"
                name="surname"
              />
              <ErrorMessage
                className="field-error"
                name="surname"
                component="div"
              />
            </div>

            <div>
              <label className="login-label" htmlFor="registrationEmail">
                Email
              </label>
              <Field
                className="login-input"
                type="email"
                id="registrationEmail"
                name="registrationEmail"
              />
              <ErrorMessage
                className="field-error"
                name="registrationEmail"
                component="div"
              />
            </div>

            <div>
              <label className="login-label" htmlFor="registrationPassword">
                Password
              </label>
              <Field
                className="login-input"
                type="password"
                id="registrationPassword"
                name="registrationPassword"
              />
              <ErrorMessage
                className="field-error"
                name="registrationPassword"
                component="div"
              />
            </div>

            <div>
              <label className="login-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <Field
                className="login-input"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage
                className="field-error"
                name="confirmPassword"
                component="div"
              />
            </div>

            <button
              className="login-button"
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </button>
          </Form>
        </Formik>
      </Provider>
    );
  };

  return (
    <div className="login-form">
      <h2>Registration</h2>
      <Registration />
    </div>
  );
};

export default RegistrationPage;
