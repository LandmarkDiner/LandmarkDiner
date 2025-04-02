import { useEffect, useState } from "react";
import "./menu.css";

const Menu = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedAllergen, setSelectedAllergen] = useState("all");

    // Function to fetch menu items from backend with filtering
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
                setError("Failed to load menu items. Please try again later.");
                setLoading(false);
            });
    };

    // Fetch menu items whenever the filter or search term changes
    useEffect(() => {
        fetchMenuItems();
    }, [activeFilter, searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (categoryId) => {
        setActiveFilter(categoryId);
    };

    const handleAllergenChange = (e) => {
        setSelectedAllergen(e.target.value);
    };

    const categories = [
        { id: "all", name: "All Items" },
        { id: "breakfast", name: "Breakfast" },
        { id: "lunch", name: "Lunch" },
        { id: "dinner", name: "Dinner" },
        { id: "drinks", name: "Drinks"},
        { id: "dessert", name: "Dessert" },
    ];

    const allergens = [
        "Allergens",
        "Gluten",
        "Dairy",
        "Peanuts",
        "Shellfish",
        "Soy",
        "Eggs",
        "Nuts",
    ];


    if (error) {
        return (
            <div className="menu-error">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="menu-page">
            {/* Hero Section */}
            <section className="menu-hero">
                <div className="hero-content">
                    <h1>Our Menu</h1>
                </div>
                <div className="hero-content">
                    <p>Home-style cooking made with love</p>
                </div>
            </section>

            <div className="menu-container">
                {/* Search and Filter Section */}
                <div className="menu-controls">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search our menu..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                        {searchTerm && (
                            <button className="clear-search" onClick={() => setSearchTerm("")} aria-label="Clear search">
                                &times;
                            </button>
                        )}
                    </div>

                    <div className="filter-container">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-button ${activeFilter === category.id ? "active" : ""}`}
                                onClick={() => handleFilterChange(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}

                        {/* <select
                            value={activeFilter}
                            onChange={handleFilterChange}
                            className="allergen-dropdown"
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select> */}

                        <select
                            value={selectedAllergen}
                            onChange={handleAllergenChange}
                            className="allergen-dropdown"
                        >
                            {allergens.map((allergen, index) => (
                                <option key={index} value={allergen.toLowerCase()}>
                                    {allergen}
                                </option>
                            ))}
                        </select>
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
                                <div className="menu-card-content">
                                    <div className="menu-card-header">
                                        <h3>{item.name}</h3>
                                    </div>
                                    <p className="description">{item.description || "A delicious dish from our kitchen"}</p>
                                    
                                    {(item?.allergens || "").includes("gluten") ? <p className="allergens-tag">Allergens: gluten</p> : <p></p>}

                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <p>No menu items match your search. Try adjusting your filters.</p>
                        <button
                            className="reset-filters"
                            onClick={() => {
                                setSearchTerm("");
                                setActiveFilter("all");
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
