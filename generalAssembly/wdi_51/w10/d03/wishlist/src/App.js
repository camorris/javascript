import React, { Component } from 'react';

import Item from './item'



class App extends Component {
  
  
  
  state = {
    newItemTitle: '',
    wishlist: [
      {title: "New Job", _id: "34214321"},
      {title: "Property", _id: "4123214321"},
      {title: "Money", _id: "43143214312"}

    ]
  }
  
  onFormSubmit(evt) {
    console.log('Submitting form')
    evt.preventDefault()
    this.setState({
      newItemTitle: '',
      wishlist: [
        ...this.state.wishlist,
        {title: this.state.newItemTitle, _id: Math.random() * 10000}
      ]
    })
  }
  
  
  onInputChange(evt){
    
    this.setState({newItemTitle: evt.target.value})
  }

  onRemoveClick(id){
    console.log(id)
    this.setState({
      wishlist: this.state.wishlist.filter((item) => {
        return item._id !==id
      })
    })
  
  }
  render() {
    return (
      <div className="field is-small">
        <div className="control">
      <form onSubmit={this.onFormSubmit.bind(this)}>
        
          <input 
          className="input is-success"
          type="text" 
          placeholder="Add Item"
           value={this.state.newItemTitle}
           onChange={this.onInputChange.bind(this)}
           />
           
          <button> add item</button>
        </form>
        <ul>
         {this.state.wishlist.map((item)=> {
           return (
            <Item  
              item={item} 
              key={item._id}
              onRemoveClick = {this.onRemoveClick.bind(this)}
            />
          )
         })}
         
        </ul>
        </div>
        </div>
      
    );
  }
}

export default App;
