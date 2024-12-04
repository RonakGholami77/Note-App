import React from "react";
import { FaPlusSquare } from "react-icons/fa";

function Note() {
  return (
    <div className="note">
      <div>
        <input type="text" placeholder="write something..." />
        <div>
          <i style={{ color: "white" }}></i>
          <i style={{ color: "orange" }}></i>
          <i style={{ color: "pink" }}></i>
          <i style={{ color: "red" }}></i>
          <i style={{ color: "lightegreen" }}></i>
          <i style={{ color: "blue" }}></i>
          <i style={{ color: "lighteblue" }}></i>
          <i style={{ color: "purple" }}></i>
        </div>
        <div>
          <i>
            <FaPlusSquare />
          </i>
          <i>
            <FaPlusSquare />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Note;
