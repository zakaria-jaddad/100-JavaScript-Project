import React from "react";

class Welcome extends React.Component {
  // constructor(props) {
  //     this.props = props;
  // }

  render() {
    return (
      <>
        <h1>hello, from Class Component, {this.props.name}</h1>
        <div className="other-content">
          <p>leaning</p>                    
          <p>{this.props.type}</p>
        </div>
      </>
    );
  }
}

export default Welcome;
