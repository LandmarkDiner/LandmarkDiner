import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://twplccttrbfxpvafykqi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cGxjY3R0cmJmeHB2YWZ5a3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNjA5MTYsImV4cCI6MjA1NDczNjkxNn0.skCDMfIVGATUOrAQRu1AxaS4cbNoalslFqCNii5w7s0");

function App() {
  const [menu, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    const { data } = await supabase.from("menu").select();
    setItems(data);
  }

  return (
    <ul>
      {menu.map((menu) => (
        <li key={menu.name}>{menu.name}</li>
      ))}
    </ul>
  );
}

export default App;