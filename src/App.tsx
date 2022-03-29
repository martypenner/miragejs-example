import { createServer } from "miragejs";
import { useState, useEffect } from "react";
import "./styles.css";

console.clear();

createServer({
  routes() {
    this.get("/api/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" }
    ]);
  }
});

export default function App() {
  let [users, setUsers] = useState<Array<{ id: string; name: string }>>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      <h1>My beautiful app</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
