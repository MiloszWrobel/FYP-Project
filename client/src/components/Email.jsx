import React from "react";

function Email(props) {
  function handleClick() {
    props.setEmailClicked(false);
  }
  return (
    <div className="item2">
      <div className="emailContainer">
        <button onClick={handleClick}>Back</button>
        <ul>
          <li>{props.email.sender}</li> <li>{props.email.subject}</li>
          <li>{props.email.dateTime}</li> <li>{props.email.reciever}</li>
          <li>{props.email.body}</li>{" "}
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Email;
