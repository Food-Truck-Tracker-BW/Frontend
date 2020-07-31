import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { useParams } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name').min(2, 'That\'s just your inicials.'),

})

const defaultFormState = {
  name: '',
  location: '',
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
  location: ''
}

const OperatorProfile = (props) => {
    const { id } = useParams();
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
      {
          setFormState({
              ...formState,
              [e.target.name]: e.target.value
          })
      }
      if (e.target.name === 'name') {
          validate(e);
      }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
    props.updateTruck(formState, id)

}


  return (
   
      <form onSubmit={handleSubmit}>
          <label>Name
                    <input type='text' name='name' onChange={handleChange} data-cy='name' value={formState.name} />
                    {errors.name.length > 0 && <p style={{color:'red'}}>{errors.name}</p>}
          </label>
          
          <label>Select Type of Food
                <select name='cuisine_type' data-cy='type' defaultValue='Taco' onChange={handleChange}>
                    <option value='taco'>Taco</option>
                    <option value='pizza'>Pizza</option>
                    <option value='sandwich'>Sandwich</option>
                    <option value='burger'>Burger</option>
                    <option value='burrito'>Burrito</option>
                    <option value='iceCream'>IceCream</option>
                    <option value='grilledCheese'>GrilledCheese</option>
                </select>
            </label>
      
      
            <button data-cy="submit-button" type='submit'>Update Truck</button>
      </form>
    
    
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, actions)(OperatorProfile);
