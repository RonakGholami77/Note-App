import "./App.css";
import Header from "./Header";
import Note from "./Note";
import NoteList from "./NoteList";

function App() {
  return (
    <div className="container">
      <Header />
      <Note />
      <NoteList />
    </div>
  );
}

export default App;
