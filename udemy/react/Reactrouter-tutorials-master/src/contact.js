import React from "react";

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    console.log(this.props)
    return (
      <form> 
        <input placeholder="name" type="name"/>
        <input placeholder="name" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Contact;
