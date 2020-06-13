import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = event =>{
    
    this.setState({
      message: event.target.value
    })
  }

  render() {
    // console.log(this.state.message.length)
    let charCount = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={event => this.handleMessageChange(event)} 
          value={this.state.message}
          type="text" 
          name="message" 
          id="message" />
        <h5>Character's Left {charCount}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
