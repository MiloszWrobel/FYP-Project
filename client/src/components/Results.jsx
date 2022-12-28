import React from "react";
import Result from "./Result";

function Results(props) {
  function handleClick(email) {
    console.log("Clicked");
    props.setEmailClicked(true);
    props.setSelectedEmail(email);
  }
  return (
    <div>
      {props.emails.map((email) => {
        return <Result email={email} handleClick={handleClick} />;
      })}
    </div>
  );
}

export default Results;
