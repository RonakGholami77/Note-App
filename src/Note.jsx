import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaEraser } from "react-icons/fa6";
import NoteList from "./NoteList";

function Note() {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("white");
  const [notelist, setNoteList] = useState([]);

  function valueHandler(e) {
    setNote(e.target.value);
  }

  function colorHandler(color) {
    setColor(color);
  }

  function addNoteHandler() {
    setNoteList((prev) => [...prev, { title: note, color: color }]);
    setNote("");
  }

  function removeHandler() {
    setNoteList([]);
  }

  function deleteHandler(value) {
    const newList = notelist.filter((item) => item.title !== value);
    setNoteList(newList);
  }
  return (
    <div className="note">
      <input
        type="text"
        placeholder="write something..."
        onChange={valueHandler}
        value={note}
      />
      <div className="palet">
        <input
          type="button"
          onClick={() => colorHandler("white")}
          style={{ backgroundColor: "white" }}
        />
        <input
          type="button"
          onClick={() => colorHandler("orange")}
          style={{ backgroundColor: "orange" }}
        />
        <input
          type="button"
          onClick={() => colorHandler("pink")}
          style={{ backgroundColor: "pink" }}
        />
        <input
          type="button"
          onClick={() => colorHandler("red")}
          style={{ backgroundColor: "red" }}
        />
        <input
          type="button"
          onClick={() => colorHandler("green")}
          style={{ backgroundColor: "green" }}
        />
        <input
          type="button"
          onClick={() => colorHandler("blue")}
          style={{ backgroundColor: "blue" }}
        />
        <input
          type="button"
          onClick={() => colorHandler("brown")}
          style={{ backgroundColor: "brown" }}
        />
        <input
          type="button"
          onClick={() => colorHandler("purple")}
          style={{ backgroundColor: "purple" }}
        />
      </div>
      <div className="actions">
        <i onClick={removeHandler} className="icon" id="eraser">
          <FaEraser />
        </i>
        <i onClick={addNoteHandler} className="icon" id="plus">
          <FaPlusSquare />
        </i>
      </div>
      <div className="notelist">
        {notelist.length > 0 &&
          notelist.map((item, index) => {
            return <NoteList key={index} {...item} onClick={deleteHandler} />;
          })}
      </div>
    </div>
  );
}

export default Note;
