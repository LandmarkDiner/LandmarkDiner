import { useEffect, useState } from "react";

const Menu = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://landmarkdiner.onrender.com/menu")
            .then(response => response.json())
            .then(data => setItems(data.items))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
