import Card from "./components/Card";
import { books } from "./constants/mockData";

function App() {
  return (
    <>
      <h1>Book App</h1>
      <Card books={books} />
    </>
  );
}

export default App;
