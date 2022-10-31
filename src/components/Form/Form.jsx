import React from "react";
import { useFormik } from "formik";
import { addTodo, updateTodo } from "../../toolkit/slices/todo.slice";
import { useDispatch, useSelector } from "react-redux";
import FlexContainer from "../FlexContainer/FlexContainer";
import { Form, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const SignUpForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const param = useParams();
  const update = param.id ? true : false;
  const navigation = useNavigate();

  let editTodo = {};
  if (update) {
    editTodo = todos.filter(item => item.id == param.id)[0];
  }
  const formik = useFormik({
    initialValues: {
      title: update ? editTodo.title : "",
      description: update ? editTodo.description : "",
      startDate: update? new Date(editTodo.startDate):new Date(),
      endDate: update? new Date(editTodo.endDate):new Date(),
    },
    // validate,
    onSubmit: (values, { resetForm }) => {
      values.startDate = values.startDate.toLocaleString();
      values.endDate = values.endDate.toLocaleString();
      if (!update) {
        dispatch(addTodo({ ...values, id:Math.floor(Math.random() * 100), isDone: false }));
      } else {
        dispatch(updateTodo({ ...values, id: editTodo.id }));
      }
      navigation("/Todos");
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
          value={formik.values.title}
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

        <label htmlFor=""
          className="">
          Start:
        </label>
        <DatePicker
        className="w-1/3 mb-2 p-2 rounded"
        selected={formik.values.startDate}
        onChange={data =>formik.setFieldValue("startDate", data)}
        selectsStart
        showTimeSelect
        startDate={formik.values.startDate}
        endDate={formik.values.endDate}
        dateFormat="h:mm aa (MMMM d)"
      />
      <label htmlFor=""
          className="">
          End:
        </label>
      <DatePicker 
        className="w-1/3 mb-2 p-2 rounded"
        selected={formik.values.endDate}
        onChange={(data) => formik.setFieldValue("endDate", data)}
        selectsEnd
        showTimeSelect
        startDate={formik.values.startDate}
        endDate={formik.values.endDate}
        minDate={formik.values.startDate}
        dateFormat="h:mm aa (MMMM d)"
      />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {update ? "Update" : "Submit"}
        </button>
      </Form>
    </FlexContainer>
  );
};

export default SignUpForm;
