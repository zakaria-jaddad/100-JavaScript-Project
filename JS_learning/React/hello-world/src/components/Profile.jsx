import React from "react";
import Avatar from "./Avatar";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
    this.state = {
      parentValue: props.foo,
    };
    // console.log(children)
  }
  render() {
    return (
      <div
        className="
          flex 
          justify-center
          flex-col
          gap-y-4
          items-center
          w-full
          h-screen
        "
      >
        {this.children}
        <button
          onClick={() => {
            const value = this.state.parentValue !== "Click me Daddy!!"
              ? "Click me Daddy!!"
              : "Thanky Dady .)";

            this.setState({
              parentValue: value
            });
          }}
          className="
            p-3
            border
            rounded-lg
            border-gray-300  
            duration-700 transition-colors ease-in-out bg-slate-100 hover:bg-cyan-200
          "
        >
          {this.state.parentValue}
        </button>
      </div>
    );
  }
}

// function Card({ children }) {}

function Profile(props) {
  return (
    <Card {...props}>
      <Avatar
        size={300}
        persone={{
          name: "Zakaria",
          imgUrl:
            "https://images.unsplash.com/photo-1564284369929-026ba231f89b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    </Card>
  );
}

export default Profile;
// https://images.unsplash.com/photo-1564284369929-026ba231f89b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D
/* 
        className="
        flex 
        justify-center
        flex-col
        items-center
        w-full
        h-screen
      "
*/
