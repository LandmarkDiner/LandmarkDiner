import { useEffect, useState } from "react";
import "./admin.css";

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // Check if a valid token exists in local storage
        const token = localStorage.getItem("token");
        if (token) {
            verifyToken(token);
        }
    }, []);

    const verifyToken = async (token) => {
        try {
            const response = await fetch("https://landmarkdiner.onrender.com/admin", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("token"); // Remove invalid token
            }
        } catch (error) {
            console.error("Error verifying token:", error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("https://landmarkdiner.onrender.com/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.access_token);
                setIsAuthenticated(true);
            } else {
                setError("Invalid username or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("Login failed. Please try again.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    const handleSubmit = () => {
        // submit the edit or addition to the menu
    }

    // Menu Management Code Below (Only visible after login)
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const fetchMenuItems = () => {
        let url = `https://landmarkdiner.onrender.com/menu?category=${activeFilter}`;
        if (searchTerm) {
            url += `&search=${encodeURIComponent(searchTerm)}`;
        }

        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setItems(data.items);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setErrorMsg("Failed to load menu items. Please try again later.");
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchMenuItems();
    }, [activeFilter, searchTerm]);

    if (!isAuthenticated) {
        return (
            <div className="login-container">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className="menu-page">

            <section className="menu-hero">
                <div className="hero-content">
                    <h1>Admin Menu Management</h1>
                </div>
                <div className="hero-content">
                    <p>Manage the restaurant's menu with ease.</p>
                </div>
            </section>

            <div className="menu-container">
                <div className="menu-controls">
                <button className="add-item-button" onClick={() => setShowAddForm(true)}>+</button>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
                    <div className="search-container">
                        
                        <input
                            type="text"
                            placeholder="Search menu..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        {searchTerm && (
                            <button className="clear-search" onClick={() => setSearchTerm("")}>&times;</button>
                        )}
                    </div>

                    <div className="filter-container">
                        {["all", "breakfast", "lunch", "dinner", "drinks", "dessert"].map((category) => (
                            <button
                                key={category}
                                className={`filter-button ${activeFilter === category ? "active" : ""}`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Loading menu items...</p>
                    </div>
                ) : items.length > 0 ? (
                    <div className="menu-grid">
                        {items.map((item) => (
                            <div key={item.id} className="menu-card">
                                <button className="edit-item-button" onClick={() => setSelectedItem(item)}>✎</button>
                                <div className="menu-card-content">
                                    <h3>{item.name}</h3>
                                    <p className="description">{item.description || "A delicious dish from our kitchen"}</p>
                                    {(item?.allergens || "").includes("gluten") && <p className="allergens-tag">Allergens: gluten</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <p>No menu items match your search.</p>
                        <button onClick={() => { setSearchTerm(""); setActiveFilter("all"); }}>Reset Filters</button>
                    </div>
                )}
            </div>

            {selectedItem && (
                <div className="edit-modal">
                    <h3>Edit {selectedItem.name}</h3>
                    <input type="text" value={selectedItem.name} onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })} />
                    <input type="text" value={selectedItem.category} onChange={(e) => setSelectedItem({ ...selectedItem, category: e.target.value })} />
                    <textarea value={selectedItem.description} onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })} />
                    <input type="text" value={selectedItem.allergens} onChange={(e) => setSelectedItem({ ...selectedItem, allergens: e.target.value })} />
                    <button onClick={() => setSelectedItem(null)}>Cancel</button>
                    <button type="submit" onClick={(handleSubmit) => setShowAddForm(false)}> Submit </button>
                </div>
            )}

            {showAddForm && (
                <div className="add-modal">
                    <h3>Add New Menu Item</h3>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Category" />
                    <textarea placeholder="Description" />
                    <input type="text" placeholder="Allergens (Optional)" />
                    <button onClick={() => setShowAddForm(false)}>Cancel</button>
                    <button type="submit" onClick={(handleSubmit) => setShowAddForm(false)}> Submit </button>
                </div>
            )}
        </div>
    );
};

export default Admin;
