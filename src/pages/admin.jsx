import { useEffect, useState } from "react";
import "./admin.css";
import Select from "react-select";

const Admin = () => {
    const initialFormData = {
        name: "",
        category: "",
        subcategory: "",  
        description: "",
        allergens: [],
    };
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState(initialFormData);

    // Menu Management Code Below (Only visible after login)
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");
    const [activeSubFilter, setActiveSubFilter] = useState("all");
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [deleteItem, setDeleteItem] = useState(null);

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

    const handleDelete = async (itemId) => {
        const token = localStorage.getItem("token");
    
        if (!token) {
            setMessage("Unauthorized: Please log in again.");
            return;
        }
    
        try {
            const response = await fetch(`https://landmarkdiner.onrender.com/admin/menu/delete/${itemId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
    
            const data = await response.json();
            if (response.ok) {
                setMessage("Menu item deleted successfully!");
                // setShowAddForm(false);
                window.location.reload();
                setDeleteItem(null);
                console.log("the delete window should be closed");
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Error deleting menu item:", error);
            setMessage("Failed to delete menu item.");
        }
    };
      
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errorMessage = validateForm();
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        setError("");
    
        const token = localStorage.getItem("token"); // Retrieve token
    
        if (!token) {
            setMessage("Unauthorized: Please log in again.");
            return;
        }

        const formattedData = {
            ...formData,
            allergens: Array.isArray(formData.allergens) ? formData.allergens.join(",") : formData.allergens
        };
    
        try {
            const response = await fetch("https://landmarkdiner.onrender.com/admin/menu/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Include the token in the request
                },
                body: JSON.stringify(formattedData),
            });
    
            const data = await response.json();
            if (response.ok) {
                setMessage("Menu item added successfully!");
                setShowAddForm(false);
                window.location.reload();
            } else {
                setError(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Error adding menu item:", error);
            setMessage("Failed to add menu item.");
        }
    };

    const handleCancel = () => {
        setShowAddForm(false);
        setFormData(initialFormData);
        setSelectedItem(null);
    }

    const handleNewAdd = () => {
        setShowAddForm(true);
        setFormData(initialFormData);
    }

    const handleNewEdit = (item) => {
        handleCancel();
        setSelectedItem(item);
    }

    const handleNewDelete = (item) => {
        setShowAddForm(false);
        setSelectedItem(null);
        setDeleteItem(item);
    }

    const categories = [
        { id: "all", name: "All Items" },
        { id: "appetizer", name: "Appetizers" },
        { id: "children", name: "Children's Menu" },
        { id: "breakfast", name: "Breakfast" },
        { id: "lunch", name: "Lunch" },
        { id: "dinner", name: "Dinner" },
        { id: "drinks", name: "Beverages" },
        { id: "desserts", name: "Desserts" },        
    ];

    const subCategories = {
        breakfast: 
            [
                { id: "breakfast_all_day", name: "Breakfast Served All Day"},
                { id: "egg", name: "Eggs & Omelettes" },
                { id: "waffle/pancake/french_toast", name: "On the Griddle" },
                { id: "breakfast_side", name: "Sides" },
            ],
        lunch: 
            [
                { id: "salad", name: "Salads" },
                { id: "sandwich", name: "Sandwiches" },
                { id: "lunch_special", name: "Lunch Specials"},
                { id: "burger", name: "Burgers" },
                { id: "mediterranean", name: "Greek & Mediterranean" },
                { id: "lunch_side", name: "Sides" },
            ],
        dinner: 
            [
                { id: "dinner", name: "Traditional Dinner" },
                { id: "seafood", name: "Seafood" },
                { id: "house", name: "House Specials" },
                { id: "charbroiler", name: "From the Charbroiler"},
                { id: "latin", name: "Latin Specialties" },
                { id: "dinner_side", name: "Sides" },
            ]
    };

    const allergenOptions = [
        "Gluten", "Nuts", "Dairy", "Eggs", "Wheat", "Soy", "Fish", "Shellfish"
      ];

      useEffect(() => {
        if (selectedItem) {
            setFormData({
                name: selectedItem.name || "",
                category: selectedItem.category || "",
                subcategory: selectedItem.subcategory || "",
                description: selectedItem.description || "",
                allergens: selectedItem.allergens 
                    ? selectedItem.allergens.split(",").map(a => a.trim()) 
                    : [],
                });
            }
        }, [selectedItem]);

        const handleEdit = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
              setMessage("Unauthorized: Please log in again.");
              return;
            }

            const errorMessage = validateForm();
            if (errorMessage) {
                setError(errorMessage);
                return;
            }

            setError("");

            const formattedData = {
                ...formData,
                allergens: Array.isArray(formData.allergens) ? formData.allergens.join(",") : formData.allergens
            };
          
            try {
              // Step 1: Add new item
              const addResponse = await fetch("https://landmarkdiner.onrender.com/admin/menu/add", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formattedData),
              });
          
              const addData = await addResponse.json();
          
              if (!addResponse.ok) {
                setError(`Add failed: ${addData.error}`);
                return;
              }
          
              // Step 2: Delete original item (only if add was successful)
              const deleteResponse = await fetch(`https://landmarkdiner.onrender.com/admin/menu/delete/${selectedItem.id}`, {
                method: "DELETE",
                headers: {
                  "Authorization": `Bearer ${token}`,
                },
              });
          
              if (!deleteResponse.ok) {
                const deleteData = await deleteResponse.json();
                setMessage(`Warning: New item added but failed to delete old item: ${deleteData.error}`);
                return;
              }
          
              setMessage("Menu item updated successfully!");
              setSelectedItem(null);
              setShowAddForm(false);
              window.location.reload();
          
            } catch (error) {
              console.error("Error editing item:", error);
              setMessage("Something went wrong while editing the menu item.");
            }
          };

          const validateForm = () => {
            if (!formData.name.trim()) return "Name is required.";
            if (!formData.category) return "Category is required.";
            if (formData.category == "breakfast" || formData.category == "lunch" || formData.category == "dinner") {
                if (!formData.subcategory) return "Subcategory is required.";
            }
            // if (!formData.description.trim()) return "Description is required.";
          
            return ""; // no errors
          };
          
          
    

    const fetchMenuItems = () => {
        let url = `https://landmarkdiner.onrender.com/menu?category=${activeFilter}&subcategory=${activeSubFilter}`;
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
    }, [activeFilter, searchTerm, activeSubFilter]);

    const handleFilterChange = (categoryId) => {
        setActiveFilter(categoryId);
        setActiveSubFilter("all");
    };

    const handleSubFilterChange = (subCategoryId) => {
        setActiveSubFilter(subCategoryId);
    }

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
                    <br></br>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br></br>
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
                    <button className="add-item-button" onClick={handleNewAdd}>+</button>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                        <select
                            value={activeFilter}
                            onChange={(e) => handleFilterChange(e.target.value)}
                            className="general-dropdown"
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        {activeFilter && subCategories[activeFilter] && (
                            <select
                                value={activeSubFilter}
                                onChange={(e) => handleSubFilterChange(e.target.value)}
                                className="general-dropdown"
                            >
                            <option> All </option>
                            {subCategories[activeFilter]?.map((sub) => (
                                <option key={sub.id} value={sub.id}>
                                    {sub.name}
                                </option>
                            ))}
                            </select>
                        )}
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
                                <button className="edit-item-button" onClick={() => handleNewEdit(item)}>✎</button>
                                <button className="delete-item-button" onClick={() => handleNewDelete(item)}>🗑️</button>
                                <br></br>
                                <div className="menu-card-content">
                                    <h3>{item.name}</h3>
                                    <p className="description">{item.description || "A delicious dish from our kitchen"}</p>
                                    {/* {(item?.allergens || "").includes("gluten") && <p className="allergens-tag">Allergens: gluten</p>} */}
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

                <input 
                    type="text" 
                    maxLength={100}
                    required
                    placeholder="Name (max: 100 characters)" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                />

                {/* Category - React Select */}
                <Select
                    options={Object.values(categories).map(category => ({
                        label: category.name,
                        value: category.id
                    }))}
                    className="react-select-container-category"
                    classNamePrefix="custom-select"
                    placeholder="Select category"
                    value={Object.values(categories).map(category => ({
                        label: category.name,
                        value: category.id
                    })).find(opt => opt.value === formData.category)}
                    onChange={(selected) => 
                        setFormData({
                            ...formData,
                            category: selected ? selected.value : "",
                            subcategory: "" 
                        })
                    }
                />

                <br></br>

                {formData.category && subCategories[formData.category] && (
                    <select
                        className="category-dropdown"
                        value={formData.subcategory}
                        onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                    >
                        <option value="">Select a subcategory</option>
                        {subCategories[formData.category].map((sub) => (
                            <option key={sub.id} value={sub.id}>
                                {sub.name}
                            </option>
                        ))}
                    </select>
                )}

                <br></br>

                {/* Description */}
                <textarea 
                    placeholder="Description (max: 400 characters)" 
                    maxLength={400}
                    value={formData.description} 
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
                />

                {/* Allergens - React Select multi */}
                <Select
                    isMulti
                    options={allergenOptions.map(allergen => ({ label: allergen, value: allergen }))}
                    className="react-select-container"
                    classNamePrefix="custom-select"
                    placeholder="Select allergens (optional)"
                    value={formData.allergens.map(allergen => ({ label: allergen, value: allergen }))}
                    onChange={(selected) =>
                        setFormData({ 
                            ...formData, 
                            allergens: selected.map(opt => opt.value) 
                        })
                    }
                />

                <br></br>
                <button onClick={handleCancel}>Cancel</button>
                <button type="submit" onClick={handleEdit}>Submit</button>
                {error && <div className="error-message">{error}</div>}
            </div>
        )}

            {deleteItem && (
                <div className="delete-modal">
                    <h3>Delete {deleteItem.name} ?</h3>
                    <button onClick={() => setDeleteItem(null)}>Cancel</button>
                    <button type="submit" onClick={() => handleDelete(deleteItem.id)}> I'm sure </button>
                </div>
            )}

            {showAddForm && (
                <div className="add-modal">
                    <h3>Add New Menu Item</h3>
                    <input 
                        type="text" 
                        maxLength={100}
                        required
                        placeholder="Name (max: 100 characters)" 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    />
                    <Select
                        options={Object.values(categories).map(category => ({ label: category.name, value: category.id }))}
                        className="react-select-container-category"
                        classNamePrefix="custom-select"
                        placeholder="Select category"
                        required
                        value={categories.find(opt => opt.value === formData.category)}
                        onChange={(selected) => 
                            setFormData({
                            ...formData,
                            category: selected ? selected.value : "",
                            subcategory: "" 
                            })
                        }
                    />

                    <br></br>

                    {formData.category && subCategories[formData.category] && (
                        <select
                            className="category-dropdown"
                            value={formData.subcategory}
                            onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                        >
                            <option value="">Select a subcategory</option>
                            {subCategories[formData.category].map((sub) => (
                                <option key={sub.id} value={sub.id}>
                                    {sub.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <textarea 
                        placeholder="Description (max: 400 characters)" 
                        maxLength={400}
                        value={formData.description} 
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
                    />
                    <Select
                        isMulti
                        options={allergenOptions.map(allergen => ({ label: allergen, value: allergen }))}
                        className="react-select-container"
                        classNamePrefix="custom-select"
                        placeholder="Select allergens (optional)"
                        value={formData.allergens.map(allergen => ({ label: allergen, value: allergen }))}
                        onChange={(selected) =>
                            setFormData({ 
                                ...formData, 
                                allergens: selected.map(opt => opt.value) 
                            })
                        }
                    />
                    <br></br>
                    <button onClick={handleCancel}>Cancel</button>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    {error && <div className="error-message">{error}</div>}
                </div>
            )}
        </div>
    );
};

export default Admin;
