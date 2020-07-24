// * dependencies:
import React from 'react'
import axios from 'axios'
import { Form, Field,formik } from 'formik'
import * as yup from "yup"


return( <div className="signup-container ">
        <Formik
        initialValues={{
            name: '',
            email: '',
            password: '',
            position: '',
            
        validationSchema={Yup.object({
         name: Yup.string()
         .min(5, 'Must be at least 5 characters!')
         .max(10, 'Must be at least 10 chracters!')
         .required('Required'),
         email: Yup.string()
         .email('Invalid email address!')
         .required('Required'),
         password: Yup.string()
         .matches(/(?=.*[a-z])/, 'one lowercase required!')
         .matches(/(?=.*[A-Z])/, 'one uppercase required!')
         .matches(/(?=.*[0-9])/, 'one number required!')
         .min(6, 'Must be at least 6 characters')
         .required('Required'),
         passwordConfirm: Yup.string()
         .oneOf([Yup.ref('password')], 'Password must be the same!')
         .required('Required'),
         position: Yup.string()
         .oneOf(['Diner', 'Food Truck Operator'],)
         .required('Required'),
        
        })}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            setTimeout(()=> {
                alert(JSON.stringify(values, null, 2))
                resetForm()
                setSubmitting(false)
            }, 1000)
        }}
        >
            {props => (
                <Form>
                    <h1>Sign up</h1>
                    <CustomTextInput label="Name" name="name" type="text   " placeholder="Enter username" />
                    <CustomTextInput label="Email" name="email" type="email   " placeholder="Enter Email" />
                    
                    <CustomSelect  label="Positions" name="postions">
                        <option value="">Select a position</option>
                        <option value="Food Diner">Food Diner</option>
                        <option value="Food Truck Operator">Food Truck Operator</option>
                    </CustomSelect>
                     
                    <button onSubmit={onsubmit}></button>
                </Form>
            )}
        </Formik>
    </div>)
}
export default LogIn
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


//     return (
//         <div>
//             <h1>Login Page!</h1> 
//             {/* <Form>
//                 <Field type="text" name="email" placeholder="email" />
//                 <Field type="text" name="password" placeholder="password" />
//                 <button type="submit">Submit</button>
//             </Form> */}
//         </div>
        
//     )
// };

// export default LoginPage