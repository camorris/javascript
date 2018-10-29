import React from 'react'
import Count from './Count'
import Buttons from './Buttons'

class App extends React.Component {
  
  // constructor(props){
  //   super(props)
  //   this.state = {count: 10}
  // }
  state = {
    count: 60
  }
  
  decreaseCount() {
    console.log("Decreasing Count")
    this.setState({
      count: this.state.count - 1
    })
  }

  increaseCount() {
    console.log("Increasing Count")
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render(){
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <Count number={this.state.count}/>
        <button onClick={()=> {this.decreaseCount()}}>-</button>
        <button  onClick={this.increaseCount.bind(this)}>+</button>
        <Buttons 
          onPlusClick={this.increaseCount.bind(this)}
          onMinusClick={this.decreaseCount.bind(this)}
        />
      </div>
    )
  }
}

export default App