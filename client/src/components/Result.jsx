import React from "react";

function Result(props) {
  function handleResultClicked() {
    props.handleClick(props.email);
  }
  return (
    <div className="result">
      <div
        onClick={handleResultClicked}
        className="emailContainer"
        key={props.email.id}
      >
        <ul>
          <li>{props.email.sender}</li>
          <li>{props.email.subject}</li> <li>{props.email.dateTime}</li>{" "}
          <li>{props.email.body.slice(0, 55)}...</li>{" "}
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Result;
