import React from "react";

function Result(props) {
  function handleResultClicked() {
    props.handleClick(props.email);
  }
  return (
    <div>
      <div
        onClick={handleResultClicked}
        className="emailContainer"
        key={props.email.id}
      >
        <ul>
          <li>{props.email.subject}</li> <li>{props.email.dateTime}</li>{" "}
          <li>{props.email.sender}</li> <li>{props.email.body}</li>{" "}
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Result;
