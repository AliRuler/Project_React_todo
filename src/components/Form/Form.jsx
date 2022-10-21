import React from "react";
import { useFormik } from "formik";
import { addTodo, updateTodo } from "../../toolkit/slices/todo.slice";
import { useDispatch, useSelector } from "react-redux";
import FlexContainer from "../FlexContainer/FlexContainer";
import { Form, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const param = useParams();
  const update = param.id?true:false;
  const navigation = useNavigate();

  let editTodo = {};
  if(update){
    editTodo = todos.filter(item => item.id == param.id)[0];
  }
  const formik = useFormik({
    initialValues: {
      title: update? editTodo.title: "",
      description: update? editTodo.description: "",
    },
    // validate,
    onSubmit: (values, { resetForm }) => {
      if (!update){
        dispatch(addTodo({ ...values,id: update?editTodo.id:Math.floor(Math.random()*100), isDone: false }));
      }else{
        dispatch(updateTodo({...values,id:editTodo.id}));
      }
      navigation("/");
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
        {/* <label
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
        /> */}
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
          {update?"Update":"Submit"}
        </button>
      </Form>
    </FlexContainer>
  );
};

export default SignUpForm;
