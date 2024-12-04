import React from "react";

function NoteList(props) {
  const { title, color, onClick } = props;

  function remove() {
    onClick(title);
  }

  return (
    <button onClick={remove} className="btn" style={{ backgroundColor: color }}>
      {title}
    </button>
  );
}

export default NoteList;
