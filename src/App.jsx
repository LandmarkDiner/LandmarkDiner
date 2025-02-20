import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home.jsx'
import Menu from './pages/menu.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
function App() {
        return (
          <Router>
            <div>
              {/* Navigation Bar */}
              <nav style={styles.navbar}>
                <ul style={styles.navList}>
                  <li><Link to="/" style={styles.navItem}>Home</Link></li>
                  <li><Link to="/about" style={styles.navItem}>About</Link></li>
                  <li><Link to="/menu" style={styles.navItem}>Menu</Link></li>
                  <li><Link to="/contact" style={styles.navItem}>Contact</Link></li>
                </ul>
              </nav>
      
              {/* Page Routes */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Router>
        );
      }

      const styles = {
        navbar: {
          backgroundColor: "#333",
          padding: "10px",
          display: "flex",
          justifyContent: "center"
        },
        navList: {
          listStyle: "none",
          display: "flex",
          gap: "20px",
          padding: "0",
          margin: "0"
        },
        navItem: {
          color: "white",
          textDecoration: "none",
          fontSize: "18px"
        }
      };

export default App;
