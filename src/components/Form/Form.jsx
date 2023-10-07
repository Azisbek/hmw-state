import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  ////////////////////////////////////////////////////////////
  //   const [title, setTitle] = useState("");
  //   const [text, setText] = useState("");

  //   const inputChangeHandler = (event) => {
  //     const currentInput = event.target.name;
  //     if (currentInput === "title") {
  //       setTitle(event.target.value);
  //     } else if (currentInput === "text") {
  //       setText(event.target.value);
  //     }
  //   };
  ////////////////////////////////////////////////////////////////////
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     text: "",
  //   });

  //   const inputChangeHandler = (event) => {
  //     const currentInput = event.target.name;
  //     setUserInput((prevState) => {
  //       return { ...prevState, [currentInput]: event.target.name };
  //     });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    /////////////////////////////////////////
    // let data = { userInput };
    // console.log(data);
    ////////////////////////////////////
    console.log(title);
    console.log(text);
    ///////////////////////////////////////
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        placeholder="title"
        type="text"
        name="title"
        onChange={titleChangeHandler}
      />
      <input
        placeholder="text"
        type="text"
        name="text"
        onChange={textChangeHandler}
      />
      <button>Click</button>
    </form>
  );
};

export default Form;
