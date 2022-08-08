import React from "react";
import StudentCard from "./StudentCard";

function Menubar({ name, setName }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div>Menubar</div>
      {name
        ? <button onClick={() => setName(null)}>Logout</button>
        : <button onClick={() => setName('Hugo')}>Login</button>
      }
      
    </nav>
  );
}

export default Menubar;
