import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GetInTouch from "../assest/images/GetInTouch.svg";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]+$/, "Contact number must contain only digits")
    .min(10, "Contact number must be at least 10 digits")
    .required("Contact number is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const initialValues = {
    name: "",
    contactNumber: "",
    message: "",
  };

  return (
    <div className="pl-24 flex justify-between items-center mb-16">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          // You can handle form submission here, such as sending data to a server
          resetForm();
        }}
      >
        {({ values }) => (
          <Form className="basis-[51%]">
            <div className="flex flex-col relative mb-4">
              <label
                htmlFor="name"
                className="text-[#3D159F] leading-9 text-[24px] font-medium tracking-widest mb-1"
              >
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="border-2 border-[#4700FF] py-1 outline-none rounded-md pl-3"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-700 -bottom-6 absolute "
              />
            </div>
            <div className="flex flex-col relative mb-4">
              <label
                htmlFor="contactNumber"
                className="text-[#3D159F] leading-9 text-[24px] font-medium tracking-widest mb-1"
              >
                Contact Number
              </label>
              <Field
                type="text"
                id="contactNumber"
                name="contactNumber"
                className="border-2 border-[#4700FF] py-1 outline-none rounded-md pl-3"
              />
              <ErrorMessage
                name="contactNumber"
                component="div"
                className="text-red-700 -bottom-6 absolute "
              />
            </div>
            <div className="flex flex-col relative mb-4">
              <label
                htmlFor="message"
                className="text-[#3D159F] leading-9 text-[24px] font-medium tracking-widest mb-1"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="border-2 border-[#4700FF] h-40 py-1 outline-none rounded-md pl-3"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-700 -bottom-6 absolute "
              />
            </div>
          </Form>
        )}
      </Formik>
      <figure>
        <img src={GetInTouch} alt="Get in touch" />
      </figure>
    </div>
  );
};

export default Contact;
