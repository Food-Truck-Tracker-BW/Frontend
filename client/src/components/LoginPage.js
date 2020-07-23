// * dependencies:
import React from 'react'
import axios from 'axios'
import { Form, Field } from 'formik'
import * as yup from "yup"


// const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(formState);
//     axios.post("https://reqres.in/api/users", formState)
//     .then(res => props.(res.data))
//     .catch(err => console.log(err));
// }

// const LoginValidation = yup.object().shape({
//     email: yup
//       .string()
//       .email()
//       .required(),
//     password: yup
//       .string()
//       .min(8)
//       .max(16)
//       .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
//       .required(),
//   })
// export default withFormik({
//     // Handles our submission
//     handleSubmit: (values, { setSubmitting }) => {
//     // This is where you could send the submitted values to the backend
//     console.log("Submitted Email:", values.email)
//     console.log("Submitted Password:", values.password)
//     // Simulates the delay of a real request
//     setTimeout(() => setSubmitting(false), 3 * 1000)
//   },
//   validationSchema: LoginValidation,
// })(LoginWrapper)

const LoginPage = () => {

    // ! axios login logic 


    return (
        <div>
            <h1>Login Page!</h1> 
            {/* <Form>
                <Field type="text" name="email" placeholder="email" />
                <Field type="text" name="password" placeholder="password" />
                <button type="submit">Submit</button>
            </Form> */}
        </div>
        
    )
};

export default LoginPage