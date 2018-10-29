import React, { Component } from 'react';

class ChatDisplay extends Component {

  state = {
    messages: [{
      title: "yoyoyo",
      text: "saying hello in LA"
    }],
    textInput: 'a'
  }

  onTextChange= this.onTextChange.bind(this)
  onSubmit= this.onSubmit.bind(this)
    onTextChange(e){
      var value = e.target.value;
      this.setState({textInput: value})

    }

    onSubmit(){
      var message {
        title: 'new message',
        text: this.state.textInput
      }
      this.setState({
        messages: [
          ...this.state.message,
          message
        ]
      })
    }
  render(){
    return(
      <div className="chatDisplay">
        {
          this.state.messages.map(message => {
            return(
              <div>
                    <h1>
                      {message.title}
                    </h1>
                    <p>
                      {message.text}
                    </p>
              </div>
            )
          })
        }

        <div>
            <input type="text" className="text" onChange={this.onTextChange} value={this.state.textInput}/>
            <button type="button" onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default ChatDisplay
