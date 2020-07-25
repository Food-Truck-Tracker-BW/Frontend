// * dependencies: 
import React, { } from "react"
import { Formik, useField, Form, } from "formik"
import * as Yup from "yup"

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ): null}



        </>
    )

}

const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ): null}



        </>
    )

}
    
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



function SignUpForm() {
    return( <div className="signup-container ">
        <Formik
        initialValues={{
            name: '',
            email: '',
            password: '',
            position: '',
            // acceptedTerms: false,
        }}
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
        //  acceptedTerms: Yup.boolean()
        //   .required('Required')
        //  .oneOf([true], 'You must accept the terms and conditions'),
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
                    <CustomTextInput label="Password" name="password" type="password   " placeholder="Enter Password" />
                    <CustomTextInput label="Confrim Password" name="passwordConfirm" type="password    " placeholder="Confirm Password" />
                    <CustomSelect  label="Positions" name="postions">
                        <option value="">Select a position</option>
                        <option value="Food Diner">Food Diner</option>
                        <option value="Food Truck Operator">Food Truck Operator</option>
                    </CustomSelect>
                      {/* <CustomCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </CustomCheckbox>  */}
                    <button type="submit">{props.isSubmitting ? 'Loading...' : 'Sign up'}</button>

                </Form>
            )}
        </Formik>
    </div>)
}

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


export default SignUpForm;