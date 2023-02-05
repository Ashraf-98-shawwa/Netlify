import React, { useState } from "react";

export default function Testing() {
  //   const [state, setState] = useState(0);

  //   const Increment = () => {
  //     setState((prevstate) => prevstate === 2 ? prevstate + 2 : prevstate +1);
  //   };
  //   const decrement = () => {
  //     setState((prevstate) => prevstate>0 ? prevstate - 1 : prevstate);
  //     };
  const [values, setValues] = useState({ title: "", time: "" });
  const [Todos, setTodos] = useState([]);

  const handleinput = (e) => {
    e.target.id === "title" && setValues({ ...values, title: e.target.value });

    e.target.id === "time" && setValues({ ...values, time: e.target.value });
  };

  const AddTodo = (e) => {
    e.preventDefault();
    setTodos([values, ...Todos]);
    setValues({ title: "", time: "" });
    titleRef.current.focus();
  };

  const titleRef = React.createRef();

  return (
    <div>
      {/* <h1>Total : {state}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}

      <form onSubmit={AddTodo} action="">
        <div>
          <label htmlFor="title"></label>
          <input
            id="title"
            type="text"
            onChange={handleinput}
            value={values.title}
            ref={titleRef}
          />
        </div>

        <div>
          <label htmlFor="time"></label>
          <input
            id="time"
            type="text"
            onChange={handleinput}
            value={values.time}
          />
        </div>

        <button type="submit">Add to do </button>
      </form>

      <ul>
        {Todos.map((item, index) => (
          <li key={index}>
            Todo {item.title} at {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
