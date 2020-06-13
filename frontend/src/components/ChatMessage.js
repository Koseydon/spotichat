import React from "react";

function App({ name, message }) {
  return (
    <p>
      <strong>{name}</strong> <em>{message}</em>
    </p>
  );
}

export default App;
