import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://landmarkdiner.onrender.com/menu")
            .then(response => response.json())
            .then(data => setItems(data.items))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
