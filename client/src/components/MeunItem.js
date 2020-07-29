import React, { Component } from 'react'



const initialState = {
    name: "",
    description: "",
    photo: "",
    price: "",
    ratings: "",
}

class MenuItem extends Component {
  state = initialState
  

  formSubmit = (e) => {
    console.log("form submitted")
    e.preventDefault()
     this.setState(initialState)
     console.log(this.state)
    
  }
    
    handleNameChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
  
    handleDescriptionChange = (e) => {
      this.setState({
        description: e.target.value
      })
    }
  
    handlePhotoChange = (e) => {
      let files = e.target.files
      console.warn('data file', files)
      let reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload=(e) => {
        console.warn("img data ", e.target.result)  
    }
   
    }
  
    handlePriceChange = (e) => {
      this.setState({
        price: e.target.value
      })
    }
  
    handleRatingChange = (e) => {
      this.setState({
        rating: e.target.value
      })
    }
  
    render() {
    return (
        <form onSubmit={this.formSubmit}>
        <label htmlFor='name'>
          Name
          <input
            type='text '
            name='name'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
         
         </label>
        <label htmlFor='description'>
          Description
          <textarea
            name='description'
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          
        </label>
        <label htmlFor='photos'>
          Photos
          <input
            type='file'
            name='file'
            value={this.state.photos}
            onChange={this.handlePhotoChange}
          />

        </label>
        <label htmlFor='prices'>
          Prices
          <input
            type='text '
            name='prices'
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
        </label>
        <label htmlFor='ratings'>
          Ratings
          <select id='ratings' name='ratings' onChange={this.handleRatingChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>
        
        <button>Submit</button>
      </form>
    )
   }
    
}

export default MenuItem