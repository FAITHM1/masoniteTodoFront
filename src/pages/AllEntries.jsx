import Entry from "../components/entry";
function AllEntry(props) {
  return props.entry.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });
}
export default AllEntry;
