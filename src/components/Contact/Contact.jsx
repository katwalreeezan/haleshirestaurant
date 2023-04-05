import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from "../Footer/Footer";

const Contact = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstname) {
      errors.firstname = "First Name is Required!!!";
    } else if (/^[a-zA-Z]+ [a-zA-Z]+$/.test(values.firstname)) {
      errors.firstname = "Invalid Name Given";
    }

    if (!values.lastname) {
      errors.lastname = "Last Name is Required!!!";
    }

    if (!values.email) {
      errors.email = "Email is Required!!!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is Required!!!";
    } else if (values.password.length <= 8) {
      errors.password = "Password must be 8 characters or more";
    }

    return errors;
  };

  const onSubmit = (values) => {
    console.log("Form is submitted successfully!!", values);
  };

  return (
    <div>
      <h1 className="text-center font-poppins text-2xl max-w-[450px] bg-black text-white mx-auto mt-12 mb-9">
        Contact Form
      </h1>
      <div className=" max-w-sm md:max-w-md  mx-auto border border-black my-9 px-5 py-7 font-poppins  bg-black text-white rounded-lg">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="flex flex-col ">
              <label className="mb-1">First Name:</label>
              <Field
                name="firstname"
                type="text"
                className="border border-black px-2 py-1 mb-1 rounded-lg text-black outline-none"
              />
              <ErrorMessage name="firstname">
                {(errorsMsg) => (
                  <div className="text-red-600">{errorsMsg} </div>
                )}
              </ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Last Name:</label>
              <Field
                name="lastname"
                type="text"
                className="border border-black px-2 py-1  mb-1 rounded-lg text-black outline-none"
              />
              <ErrorMessage name="lastname">
                {(errorsMsg) => (
                  <div className="text-red-600">{errorsMsg} </div>
                )}
              </ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Gender:</label>
              <Field
                component="select"
                name="gender"
                placeholder="select options"
                className="border  mb-1 border-black w-[150px] px-2 py-1 rounded-lg text-black outline-none"
              >
                <option value="male" className="text-sm">
                  Male
                </option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage name="gender" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Email:</label>
              <Field
                name="email"
                type="email"
                className="border border-black px-2  mb-1 py-1 rounded-lg text-black "
              />
              <ErrorMessage name="email">
                {(errorsMsg) => (
                  <div className="text-red-600">{errorsMsg} </div>
                )}
              </ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Password:</label>
              <Field
                name="password"
                type="password"
                className="border border-black  mb-1 px-2 py-1 rounded-lg text-black outline-none"
              />
              <ErrorMessage name="password">
                {(errorsMsg) => (
                  <div className="text-red-600">{errorsMsg} </div>
                )}
              </ErrorMessage>
            </div>

            <button className="my-3 mx-auto block bg-green-600 hover:bg-green-800 duration-300">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
