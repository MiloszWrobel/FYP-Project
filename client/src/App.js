import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import Email from "./components/Email";

function App() {
  const [emails, setEmails] = useState([]);
  const [emailClicked, setEmailClicked] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/getEmails").then((response) => {
      setEmails(response.data);
    });
  }, []);

  return (
    <div className="App Background grid-container">
      <Header />
      {emailClicked ? (
        <Email setEmailClicked={setEmailClicked} email={selectedEmail} />
      ) : (
        <Results
          setSelectedEmail={setSelectedEmail}
          setEmailClicked={setEmailClicked}
          emails={emails}
        />
      )}
    </div>
  );
}

export default App;
