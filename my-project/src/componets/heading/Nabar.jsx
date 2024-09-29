import React, { useState } from "react";
import "./Navbar.css";
const Nabar = () => {
  const [editableItem, setEditableItem] = useState(true);
  return (
    <div className="main">
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2149/2149888.png"
          alt="logo-img"
        />
      </div>
      {/* navLinks */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        {editableItem ? (
          <button onClick={()=>setEditableItem(false)}>Login</button>
        ) : (
          <button onClick={()=>setEditableItem(true)}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Nabar;
