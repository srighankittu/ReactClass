import React, { useEffect, useState } from "react";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users); // correct key
      console.log(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {users.map((u) => (
        <div key={u.id}>{u.firstName}</div>
      ))}
    </div>
  );
};

export default FetchComponent;