import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useEffect, useState, useCallback } from "react";
export default function EffectSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  });

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section>
      <h3>Effect</h3>
      <Button onClick={openModal}>Open Info Window</Button>
      <Modal open={isOpen}>
        <h3>Hello from Modal</h3>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
