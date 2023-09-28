import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import List from "./components/List";
import data from "./data";

function App() {
  const [birthdays, setBirthdays] = useState(data);
  function handleClick(e) {
    const reData = birthdays.filter((item) => {
      return item.id !== e;
    });
    setBirthdays(reData);
  }
  console.log(birthdays);
  function btnName() {
    if (birthdays.length) {
      return (
        <button
          className="btn-clear"
          onClick={() => {
            setBirthdays([]);
          }}
        >
          Clear All
        </button>
      );
    } else {
      return (
        <button
          className="btn-clear"
          onClick={() => {
            setBirthdays(data);
          }}
        >
          Reset
        </button>
      );
    }
  }
  return (
    <div className="content">
      <Title count={birthdays.length} />
      <List birthdays={birthdays} handleClick={handleClick} />
      {btnName()}
    </div>
  );
}

export default App;
