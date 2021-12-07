import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import AllEntries from "./pages/AllEntries";
import Form from "./pages/Form";
import SingleEntry from "./pages/SingleEntry";

const h1 = {
  textAlign: "center",
  margin: "10px",
};
const button = {
  display: "block",
  margin: "auto",
};
function App() {
  const url = "https://fm-masonblogback.herokuapp.com/blog/";
  const [entry, setEntry] = useState([]);
  const navigate = useNavigate();
  const nullEntry = {
    title: "",
    body: "",
  };
  const [targetEntry, setTargetEntry] = useState(nullEntry);
  //////
  const getEntry = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setEntry(data);
  };
  const addEntry = async (newEntry) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });
    getEntry();
  };

  const getTargetEntry = (entry) => {
    setTargetEntry(entry);
    navigate("/edit");
  };
  const updateEntry = async (entry) => {
    await fetch(url + entry.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
    getEntry();
  };

  const deleteEntry = async (entry) => {
    await fetch(url + entry.id, {
      method: "delete",
    });
    getEntry();
    navigate("/");
  };
  useEffect(() => {
    getEntry();
  }, []);

  return (
    <div className="App">
      <h1 style={h1}>Blog</h1>
      <Link to="new">
        <button style={button}>add new entry</button>
      </Link>
      <Routes>
        <Route path="/" element={<AllEntries entry={entry} />} />
        <Route
          path="/entry/:id"
          element={
            <SingleEntry
              entry={entry}
              edit={getTargetEntry}
              deleteEntry={deleteEntry}
            />
          }
        />
        <Route
          path="/new"
          element={
            <Form
              initialEntry={nullEntry}
              handleSubmit={addEntry}
              buttonLabel="create entry"
            />
          }
        />
        <Route
          path="/edit"
          element={
            <Form
              initialEntry={targetEntry}
              handleSubmit={updateEntry}
              buttonLabel="edit"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
