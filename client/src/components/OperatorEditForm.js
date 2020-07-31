import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required('Please enter your name').min(2, 'That\'s just your inicials.'),
    location: yup.string().required('Please enter your zip code.').matches(/^[0-9]{5}$/, 'Please enter a valid zip code.'),
    // ImgOfTruck;
    departureTime: yup.string().required('Please give departure time is the future')
  })
  
  const defaultFormState = {
    name: '',
    location: '',
    imageOfTruck:'',
    cuisineType: {
        mexican: false,
        americanGastro: false,
        asianFusion: false,
        desserts: false,
        grilledCheese: false,
        italian: false,
        
    },
    departureTime:'',
    
  }
  
  const defaultErrorState = {
    name: '',
    location: '',
    imageOfTruck:'',
    departureTime: '',
  }
  
const MainObject = () => {
    
      
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
            if (e.target.type === 'radio') {
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
            if (e.target.name === 'name' || e.target.name === 'location') {
                validate(e);
            }
            if (e.target.type === 'file') {
                setFormState({
                ...formState,
                imageOfTruck:e.target.files[0]
                })
            }
            
        }
    return (


<form>
<label htlmFor="img-link">Select image:
  <input type="file" id="img" name="img" accept="image/*"/>

  </label>
<label>Name
                    <input type='text' name='name' onChange={handleChange} data-cy='name' value={formState.name} />
                    {errors.name.length > 0 && <p style={{color:'red'}}>{errors.name}</p>}
          </label>
          
<label>location 
                    <input type='text' name='location' onChange={handleChange} data-cy='location' value={formState.location} />
                    {errors.location.length > 0 && <p style={{color:'red'}}>{errors.location}</p>}
          </label>
<label>departure time 
                    <input type='time' name='departureTime' onChange={handleChange} data-cy='departureTime' value={formState.departureTime} />
                    {errors.departureTime.length > 0 && <p style={{color:'red'}}>{errors.departureTime}</p>}

                    <input type='date' name='departureTime' onChange={handleChange} data-cy='departureTime' value={formState.departureTime} />
                    {errors.departureTime.length > 0 && <p style={{color:'red'}}>{errors.departureTime}</p>}
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
<fieldset> Customer Rating Favorite Food
          <label>
              <input type='radio' name='truckTypes' onChange={handleChange} data-cy='mexican' value='mexican' />
              Mexican
          </label>
          <label>
              <input type='radio' name='truckTypes' onChange={handleChange} data-cy='americanGastro' value='americanGastro' />
              AmericanGastro
          </label>
          <label>
              <input type='radio' name='truckTypes' onChange={handleChange} data-cy='asianFusion' value='asianFusion' />
              AsianFusion
          </label>
          <label>
              <input type='radio' name='truckTypes' onChange={handleChange} data-cy='desserts' value='desserts' />
              Desserts
          </label>
          <label>
              <input type='radio' name='truckTypes' onChange={handleChange} data-cy='grilledCheese' value='grilledCheese' />
              GrilledCheese
          </label>
          <label>
              <input type='radio' name='truckTypes' onChange={handleChange} data-cy='italian' value='italian' />
              Italian
          </label>
        </fieldset>
        
            <button data-cy="submit-button" disabled={isDisabled} type='submit'>Submit</button>
      
</form>
       
    )
};


  export default MainObject;