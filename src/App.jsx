import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li><Link to="/LandmarkDiner" style={styles.navItem}>Home</Link></li>
            <li><Link to="/about" style={styles.navItem}>About</Link></li>
            <li><Link to="/menu" style={styles.navItem}>Menu</Link></li>
            <li><Link to="/contact" style={styles.navItem}>Contact</Link></li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/LandmarkDiner" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

// Styles for the navbar
const styles = {
  navbar: {
    position: "fixed", // Makes it stick to the top
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#333",
    padding: "15px 0",
    display: "flex",
    justifyContent: "center",
    zIndex: 1000 // Keeps it on top of other elements
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    padding: "0",
    margin: "0"
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "transform 0.2s, background-color 0.3s",
    fontWeight: "bold"
  }
};

// Adding a hover effect using JavaScript since inline styles don't support `:hover`
const hoverEffect = () => {
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-3px)";
      link.style.backgroundColor = "#555";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0)";
      link.style.backgroundColor = "transparent";
    });
  });
};

// Run hover effect after rendering
setTimeout(hoverEffect, 0);

export default App;
