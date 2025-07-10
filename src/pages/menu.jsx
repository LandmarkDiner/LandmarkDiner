import { useEffect, useState } from "react";
import "./menu.css";
import Select from "react-select";

const Menu = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");
    const [activeSubFilter, setActiveSubFilter] = useState("all");
    const [selectedAllergens, setSelectedAllergen] = useState([]);
    const [showAllergenDropdown, setShowAllergenDropdown] = useState(false);

    // Function to fetch menu items from backend with filtering
    const fetchMenuItems = () => {
        let url = `https://landmarkdiner.onrender.com/menu?category=${activeFilter}&subcategory=${activeSubFilter}&allergens=${selectedAllergens}`;
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
    }, [activeFilter, searchTerm, activeSubFilter, selectedAllergens]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (categoryId) => {
        setActiveFilter(categoryId);
        setActiveSubFilter("all");
    };

    const handleSubFilterChange = (subCategoryId) => {
        setActiveSubFilter(subCategoryId);
    }

    const handleAllergenChange = (selectedOptions) => {
        setSelectedAllergen(selectedOptions || []);
    };

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
                        {/* {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-button ${activeFilter === category.id ? "active" : ""}`}
                                onClick={() => handleFilterChange(category.id)}
                            >
                                {category.name}
                            </button>
                        ))} */}

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
                            {/* {console.log(activeSubFilter == "lunch_special")} */}
                            <option> All </option>
                            {subCategories[activeFilter]?.map((sub) => (
                                <option key={sub.id} value={sub.id}>
                                    {sub.name}
                                </option>
                            ))}
                            </select>
                        )}

                        

                        {/* <div className="custom-allergen-dropdown">
                            <button
                                type="button"
                                className="general-dropdown"
                                onClick={() => setShowAllergenDropdown(!showAllergenDropdown)}
                            >
                                {selectedAllergens.length > 0
                                    ? `Filtered: ${selectedAllergens.join(", ")}`
                                    : "Filter by Allergens"}
                            </button>
                            {showAllergenDropdown && (
                                <div className="checkbox-dropdown">
                                    {allergenOptions.map((allergen) => (
                                        <label key={allergen} className="checkbox-option">
                                            <input
                                                type="checkbox"
                                                value={allergen}
                                                checked={selectedAllergens.includes(allergen)}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    handleAllergenChange((prev) =>
                                                        prev.includes(value)
                                                            ? prev.filter((a) => a !== value)
                                                            : [...prev, value]
                                                    );
                                                }}
                                            />
                                            {allergen}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div> */}
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
                                    
                                    {/* {(item?.allergens || "").includes("gluten") ? <p className="allergens-tag">Allergens: gluten</p> : <p></p>} */}

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
                                setActiveSubFilter("all");
                                setSelectedAllergen([]);
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
