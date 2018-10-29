import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// axios('/api').then(res=> console.log(res.data))
axios({method: 'get', url: '/api/berries'})
.then(res=> console.log(res.data))

class App extends Component {

  state = {
    berries:[]
  }
  componentDidMount(){
    axios({method: 'get', url:'/api/berries'})
    .then(res=> this.setState({berries: res.data}))
  }

onFormSubmit(evt){
  evt.preventDefault()
  console.log(this.refs.berryType.value)
  axios({url: '/api/berries',
  method: 'post',
  data: {type: this.refs.berryType.value}
}).then(res => {
  console.log(res.data)
})
}

  render() {
    console.log(this.state)
    return ( 
      <div className="App">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type="text" ref="berryType"/>
          <button>Add Berry </button>
        </form>
        <ul>
          {this.state.berries.map(
            (berry) => {
              return <li key={berry._id}>{berry.type}</li>
            }
          )}
          </ul>
      </div>
    );
  }
}

export default App;
