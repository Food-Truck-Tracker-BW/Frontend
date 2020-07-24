import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name').min(2, 'That\'s just your inicials.'),
  phone: yup.string().required('Please enter a phone number.').matches(/^[0-9]{10}$/, 'Please enter a valid phone number.')
})

const defaultFormState = {
  name: '',
  phone: '',
  truckTypes: {
      mexican: false,
      americanGastro: false,
      asianFusion: false,
      desserts: false,
      grilledCheese: false,
      italian: false,
      
  },
  instructions: ''
}

const defaultErrorState = {
  name: '',
  phone: ''
}

const OperatorProfile = (props) => {
    const [formState, setFormState] = useState(defaultFormState);
    const [errors, setErrors] = useState(defaultErrorState);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        schema.isValid(formState).then(valid => setIsDisabled(!valid));
    }, [formState, schema])

    const validate = e => {
        e.persist();
        yup.reach(schema, e.target.name).validate(e.target.value)
        .then(valid => setErrors({...errors, [e.target.name]: ''}))
        .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}));
    }

    const handleChange = e => {
      if (e.target.type === 'checkbox') {
          setFormState({
              ...formState,
              condiments: {
                  ...formState.condiments,
                  [e.target.value]: e.target.checked
              }
          })
      } else {
          setFormState({
              ...formState,
              [e.target.name]: e.target.value
          })
      }
      if (e.target.name === 'name' || e.target.name === 'phone') {
          validate(e);
      }
  }

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(formState);
//     axios.post("https://reqres.in/api/users", formState)
//     .then(res => props.addOrder(res.data))
//     .catch(err => console.log(err));
// }


  return (
   
      <form onSubmit={handleSubmit}>
          <label>Name
                    <input type='text' name='name' onChange={handleChange} data-cy='name' value={formState.name} />
                    {errors.name.length > 0 && <p style={{color:'red'}}>{errors.name}</p>}
          </label>
          <label>Phone Number
                    <input type='tel' name='phone' onChange={handleChange} data-cy='phone' value={formState.phone} />
                    {errors.phone.length > 0 && <p style={{color:'red'}}>{errors.phone}</p>}
          </label>
          <label>Select Type of Food
                <select name='type' data-cy='type' defaultValue='Taco' onChange={handleChange}>
                    <option value='taco'>Taco</option>
                    <option value='pizza'>Pizza</option>
                    <option value='sandwich'>Sandwich</option>
                    <option value='burger'>Burger</option>
                    <option value='burrito'>Burrito</option>
                    <option value='iceCream'>IceCream</option>
                    <option value='grilledCheese'>GrilledCheese</option>
                </select>
            </label>
      
      <fieldset>
          <label>
              <input type='checkbox' name='truckTypes' onChange={handleChange} data-cy='mexican' value='mexican' />
              Mexican
          </label>
          <label>
              <input type='checkbox' name='truckTypes' onChange={handleChange} data-cy='americanGastro' value='americanGastro' />
              AmericanGastro
          </label>
          <label>
              <input type='checkbox' name='truckTypes' onChange={handleChange} data-cy='asianFusion' value='asianFusion' />
              AsianFusion
          </label>
          <label>
              <input type='checkbox' name='truckTypes' onChange={handleChange} data-cy='desserts' value='desserts' />
              Desserts
          </label>
          <label>
              <input type='checkbox' name='truckTypes' onChange={handleChange} data-cy='grilledCheese' value='grilledCheese' />
              GrilledCheese
          </label>
          <label>
              <input type='checkbox' name='truckTypes' onChange={handleChange} data-cy='italian' value='italian' />
              Italian
          </label>
      </fieldset>
          <label>
                <textarea name='instructions' data-cy='instructions' onChange={handleChange} value={formState.instructions} />
          </label>
            <button data-cy="submit-button" disabled={isDisabled} type='submit'>Find Your Truck</button>
      </form>
    
    
  );
};
export default OperatorProfile;
