import { useState, type JSX } from "react";

function CreateUser() : JSX.Element {
  const [username, setUsername] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username.trim() !== "" && (
        <div>
          <button type="submit">Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
