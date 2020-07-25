import React, { } from "react"
import { Formik, useField, Form, yupToFormErrors } from "formik"
import * as Yup from "yup"
import styled from 'styled-components';




const LogInTextInput = ({label, ...props}) => {
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
function LogIn() {
    return( <div className="login-container ">
        <Formik
        initialValues={{
            name: '',
            email: ''
        }}
        validationSchema={Yup.object({
         name: Yup.string()
         .min(5, 'Must be at least 5 characters!')
         .max(10, 'Must be at least 10 chracters!')
         .required('Required'),
         email: Yup.string()
         .email('Invalid email address!')
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
                <FormContainer>
                    <h1>Log In</h1>
                    <LogInTextInput label="Name" name="name" type="text   " placeholder="Enter username" />
                    <LogInTextInput label="Email" name="email" type="email   " placeholder="Enter Email" />
                    <button type="submit">{props.isSubmitting ? 'Loading...' : 'Log In'}</button>
                </FormContainer>
            )}
        </Formik>
    </div>)
}
const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export default LogIn
