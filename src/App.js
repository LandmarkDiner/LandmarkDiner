import React, { useEffect, useState } from "react";

function App() {
  const [menu, setMenu] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });

  useEffect(() => {
    fetch("https://landmarkdiner.onrender.com")  // Replace with your actual Render URL
      .then(response => response.json())
      .then(data => setMenu(data))
      .catch(error => console.error("Error fetching menu:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMenu = [...menu, newItem];

    fetch("https://landmarkdiner.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMenu)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      setMenu(updatedMenu);
    })
    .catch(error => console.error("Error updating menu:", error));

    setNewItem({ name: "", price: "" });
  };

  return (
    <div>
      <h1>Diner Menu</h1>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - ${item.price}
          </li>
        ))}
      </ul>

      <h2>Add a New Menu Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            required
          />
          <button type="submit">Add Item</button>
        </form>
    </div>
  );
}

export default App;

const updateMenu = (newMenu) => {
  fetch("https://your-backend.onrender.com/menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newMenu)
  })
  .then(response => response.json())
  .then(data => console.log(data.message))
  .catch(error => console.error("Error updating menu:", error));
};

