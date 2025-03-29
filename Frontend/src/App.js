import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    api.get("/test")
      .then((response) => setMessage(response.data.message))
      .catch((error) => setMessage("Error connecting to API"));
  }, []);

  return (
    <div>
      <h1>API Connectivity Test</h1>
      <p>Response: {message}</p>
    </div>
  );
}

export default App;
