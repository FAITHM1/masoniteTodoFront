import { Link, useParams } from "react-router-dom";

function SingleEntry({ entry, edit, deleteEntry }) {
  const params = useParams();
  const id = parseInt(params.id);
  const post = entry.find((e) => e.id === id);

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };
  const btn = {
    margin: "10px",
  };
  return (
    <div style={div}>
      <h1> {post?.title}</h1>
      <h2>{post?.body}</h2>
      <button style={btn} onClick={() => deleteEntry(post)}>
        delete
      </button>
      <button onClick={() => edit(post)}>edit</button>
      <Link to="/">
        <button>go back</button>
      </Link>
    </div>
  );
}
export default SingleEntry;
