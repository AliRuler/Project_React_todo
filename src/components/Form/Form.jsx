import React from "react";
import { useFormik } from "formik";
import { addTodo } from "../../toolkit/slices/todo.slice";
import { useDispatch } from "react-redux";
import FlexContainer from "../FlexContainer/FlexContainer";
import { Form, useParams } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  // const validate = (values) => {
  //   const errors = {};
    // if (!values.email) {
    //     errors.email ="Required"
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    //     errors.email = "Invalid email address"
    // }
  //   return errors;
  // };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      id: Math.floor(Math.random()*100)
    },
    // validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(addTodo({ ...values, isDone: false }));
      resetForm();
    },
  });
  return (
    <FlexContainer>
      <Form
        onSubmit={formik.handleSubmit}
        className="bg-neutral-200 shadow-md rounded px-8 pt-6 pb-8 my-8 "
      >
        <label
          htmlFor="title"
          className="mb-4"
        >
          Title:{" "}
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label
          htmlFor="id"
          className="mb-4"
        >
          Id-Number:
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          title="id"
          name="id"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        <label
          htmlFor="description"
          className="mb-4 "
        >
          Description:{" "}
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          title="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </FlexContainer>
  );
};

export default SignUpForm;
