import React from "react";

function List({ birthdays, handleClick }) {
  return (
    <ul className="menu-list">
      {birthdays.map((item) => {
        const { name, id, image, age } = item;
        return (
          <li className="menu-card" key={id}>
            <img className="menu-img" src={image} alt="Human image" />
            <div>
              <h2>{name}</h2>
              <p>{age}</p>
            </div>
            <button
              className="deleteBtn"
              onClick={() => {
                handleClick(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
