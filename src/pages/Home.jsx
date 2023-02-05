import React, { Component } from "react";


export default class Home extends Component {
  state = {
    name: "zaqout",
  };

  change = (e) => {
    let id = e.target.id;
    const targetId = parseInt(id) + 1;
    this["input" + targetId].current.focus();
  };


  input1 = React.createRef();
  input2 = React.createRef();
  input3 = React.createRef();
  input4 = React.createRef();
  input5 = React.createRef();
  input6 = React.createRef();
  input7 = React.createRef();
  input8 = React.createRef();
  input9 = React.createRef();
  input10 = React.createRef();

  arr = [...Array(10)];

  function = () => {
    console.log(this.input1.current);
    console.log(this.arr);
  };
  render() {
    // return (

    //   <div>Welcome {this.state.name}</div>

    // );
    return (
      <div>
        {this.arr.map((item, index) => (
          <input
            id={index + 1}
            onChange={this.change}
            ref={this[`input${index+1}`]}
            type="text"
            key={index}
          />
        ))}
        {/* <input id="1" onChange={this.change} ref={this.input1} type="text" />
        <input id="2" onChange={this.change} ref={this.input2} type="text" />
        <input id="3" onChange={this.change} ref={this.input3} type="text" />
        <input id="4" onChange={this.change} ref={this.input4} type="text" />
        <input id="5" onChange={this.change} ref={this.input5} type="text" /> */}
        <button onClick={this.function}>click</button>

        {null.map((item)=>(<div>hi</div>))}
      </div>


      

    );
  }
}
