// * dependencies: 

import React, { useState } from "react";

import * as Yup from "yup";
import axios from 'axios';


function SignUpForm() {

    // * local state to handle changes 
    const [ userInput, setUserInput ] = useState({})


    // * local state to handle error messages 
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    // // * initial values for the form when rendered for sign up
    // const initialValues = {
    //     name: '',
    //     email: '',
    //     password: '',
    //     position: '',
    //     // acceptedTerms: false,
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
            console.log(errors)
        })
        .catch(err => {
            setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
            });
            console.log(errors)
        });

         setUserInput({
           ...userInput,
           [e.target.name]: e.target.value
         })
         console.log(userInput);
    }

    // * defining schema for form validation
   const formSchema = Yup.object({
        username: Yup.string()
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
        is_operator: Yup.string()
        .oneOf([true , false],)
        .required('Required'),
        //  acceptedTerms: Yup.boolean()
        //   .required('Required')
        //  .oneOf([true], 'You must accept the terms and conditions'),
    })
   
    const onSubmitHandler  = (event) => {
        event.preventDefault();
        
        delete userInput.passwordConfirm;
        
        axios.post('https://food-truck-tracker-be.herokuapp.com/api/register', userInput)
            .then((response) => {
                console.log('registration response:', response)
                localStorage.setItem('token', response.token)
                window.location.assign("/trucks") 
            })
            .catch((error) => {
                console.log('registration error', error)
            })
        
    }

    return(
    <div className="signup-container ">
        <form onSubmit={onSubmitHandler}>
            <h1>Sign up</h1>
            <input 
                label="username" 
                name="username" 
                type="text   " 
                placeholder="Enter username" 
                onChange={handleChange}
            ></input>
            <div>{errors.name}</div>
            <input 
                label="Email" 
                name="email" 
                type="email   " 
                placeholder="Enter Email" 
                onChange={handleChange}
            />
            <div>{errors.email}</div>
            <input 
                label="Password" 
                name="password" 
                type="password   " 
                placeholder="Enter Password" 
                onChange={handleChange}
            />
            <div>{errors.password}</div>
            <input 
                label="Confrim Password" 
                name="passwordConfirm" 
                type="password    " 
                placeholder="Confirm Password" 
                onChange={handleChange}
            />
            <div>{errors.passwordConfirm}</div>
            
            <select  label="Positions" name="is_operator" onChange={handleChange}>
                <option value="">Select a position</option>
                <option value={true}>Food Diner</option>
                <option value={false}>Food Truck Operator</option>
            </select>

            {/* <CustomCheckbox name="acceptedTerms">
                I accept the terms and conditions
            </CustomCheckbox>  */}
            
            <button type="submit">Submit</button>

        </form>
    </div>
    )
}

export default SignUpForm;

// const SignUpForm = () => {
   

//     // * AJAX req to add new user to the database 

//     // ! determine UX after sign up for different user types
//         // * operator: add truck to database form 
//             // * handled on the back end with T/F value returned 
        
//         // * diner: list of trucks 


//     return(
//         <div className='signup-container'>
//             <h1>Sign Up!</h1>
//             <Formik>
//                 initialValues={}
//             </Formik>
//         </div>
//     )
// };

// const CustomTextInput = ({label, ...props}) => {
//     const [field, meta] = useField(props)

//     return (
//         <>
//         <label htmlFor={props.id || props.name}>{label}</label>
//         <input className="text-input" {...field} {...props} />
//         {meta.touched && meta.error ? (
//             <div className="error">{meta.error}</div>
//         ): null}
//         </>
//     )

// }

// const CustomSelect = ({label, ...props}) => {
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
    
// const CustomCheckbox = ({children, ...props}) => {
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
