import React, { useEffect, useState } from "react";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    consultaDeAPI();
  }, []);

  const consultaDeAPI = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const results = users.filter((user) =>
    `${user.name} ${user.username}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <h2>Buscar Usuarios</h2>

      <input
        type="text"
        value={search}
        placeholder="Buscar por nombre o usuario"
        onChange={handleSearch}
      />

      <div className="user-list">
        {results.length === 0 ? (
          <p className="empty-text">No se encontraron resultados</p>
        ) : (
          results.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>
                <strong>Usuario:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Ciudad:</strong> {user.address.city}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 

export default UserSearch;
