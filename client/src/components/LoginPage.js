// import React, { } from "react"
// // import { Formik, useField, Form, yupToFormErrors } from "formik"
// import * as Yup from "yup"
// import axios from 'axios';


// const LogInTextInput = ({label, ...props}) => {
//     const [field, meta] = useField(props)
//     return (
//         <>
//         <label htmlFor={props.id || props.name}>{label}</label>
//         <input className="text-input" {...field} {...props} />
//         {meta.touched && meta.error ? (
//             <span className="error">{meta.error}</span>
//         ): null}
//         </>
//     )
// }


// function LogIn() {

//     return( 
//         <div className="login-container">
//             <Formik
//                 initialValues={{
//                     name: '',
//                     email: ''
//                 }}
//                 validationSchema={Yup.object({
//                 name: Yup.string()
//                 .min(5, 'Must be at least 5 characters!')
//                 .max(10, 'Must be at least 10 chracters!')
//                 .required('Required'),
//                 email: Yup.string()
//                 .email('Invalid email address!')
//                 .required('Required'),
//                 })}
//                 onSubmit={(values, {setSubmitting, resetForm}) => {
//                     setTimeout(()=> {
//                         alert(JSON.stringify(values, null, 2))
//                         resetForm()
//                         setSubmitting(false)
//                     }, 1000)
//                     axios.post('http://food-truck-tracker-be.herokuapp.com/api/register ',)

//                 }}
//                 >
//                 {props => (
//                     <Form>
//                         <h1>Log In</h1>
//                         <LogInTextInput className='login-container__input' label="Name" name="name" type="text   " placeholder="Enter username" />
//                         <LogInTextInput className='login-container__input' label="Email" name="email" type="email   " placeholder="Enter Email" />
//                         <button type="submit"> Login </button>
//                     </Form>
//                 )}
//             </Formik>
//     </div>)
// }

// export default LogIn




// const LogInSelect = ({label, ...props}) => {
//     const [field, meta] = useField(props)
//     return (
//         <>
//         <label htmlFor={props.id || props.name}>{label}</label>
//         <select className="text-input" {...field} {...props} />
//         {meta.touched && meta.error ? (
//             <div className="error">{meta.error}</div>
//         ): null}
//         </>
//     )
// }
// const LogInCheckbox = ({children, ...props}) => {
//     const [field, meta] = useField(props, 'checkbox')
//     return (
//         <>
//         <label className="checkbox">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//         </label>
//         {meta.touched && meta.error ? (
//             <div className="error">{meta.error}</div>
//         ): null}
//         </>
//     )
// }

// * dependencies 
import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';


// * defining schema for validation
const formSchema = Yup.object().shape({
  username: Yup
    .string()
    .required("Must include username."),
  password: Yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required")
});


const LoginPage = () =>  {

    // * local state to handle changes 
    const [ userInput, setUserInput ] = useState({})

    // * local state to handle error messages
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    // * input change handler for local state 
    // const handleChange = (event) => {
    //     event.preventDefault();
    //     setUserInput({
    //         ...userInput,
    //         [event.target.name]: event.target.value
    //     })
    //     console.log(userInput)
    // }

    // * handle change with validation 
    const handleChange = e => {
        e.persist();
        
        Yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({
            ...errors,
            [e.target.name]: ""
            });
        })
        .catch(err => {
            setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
            });
        });

         setUserInput({
           ...userInput,
           [e.target.name]: e.target.value
         })
    }

    // * submit handler for DB .post to get token and set to localstorage 
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://food-truck-tracker-be.herokuapp.com/api/login')
        .then((response) => {
            console.log(response)
            localStorage.setItem('token', response)
        })
        .catch((error) =>  {
            console.log(error)
        })
    };

    return(
        <div className='login-container'>
            <form className='login-container__form-container'>
                <label className='login-form__container' htmlFor='username'></label>
                <input 
                    className='form-containerform-container__input'
                    name='username'
                    id='username'
                    type='text'
                    onChange={handleChange}
                    placeholder='username'
                ></input>
                
                <label className='form-container__container' htmlFor='password'></label>
                <input 
                    className='login-container__input'
                    name='password'
                    id='password'
                    type='text'
                    onChange={handleChange}
                    placeholder='password'
                ></input>
                {errors.password.length > 6 ? (<p className="login-container__error">Password must be 6 characters in length</p>) : null}
                <button
                    className='form-container__button'
                    onClick={handleSubmit}
                > Login </button>
            </form>
        </div>
    )
}

export default LoginPage;

