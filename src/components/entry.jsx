import { Link } from "react-router-dom";

function Entry({ entry }) {
  //style obeject
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/entry/${entry.id}`}>
        <h2>{entry.title}</h2>
        <h3>{entry.body}</h3>
      </Link>
    </div>
  );
}
export default Entry;
