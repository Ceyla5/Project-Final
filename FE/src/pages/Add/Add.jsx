
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Add() {
  const navigate = useNavigate()
  return (
    <>
        <title>Add location</title>
         
      <div>
        <Formik
          initialValues={{ img: '', name: '', description: '', price: '' }}
          validationSchema={Yup.object({
            img: Yup.string()
              .required('Required'),
            name: Yup.string()
              .required('Required'),
            description: Yup.string()
              .required('Required'),
            price: Yup.number().required('Required'),
          })}
          onSubmit={(values) => {
            axios
              .post('http://localhost:3000/travels', values)
              .then(res => navigate("/admin"))
          }}
        >
          <Form>
            <label htmlFor="img">IMG</label>
            <Field name="img" type="text" />
            <ErrorMessage name="img" />

            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <label htmlFor="description">Description</label>
            <Field name="description" type="text" />
            <ErrorMessage name="description" />

            <label htmlFor="price">Price</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div></>
  )
}

export default Add