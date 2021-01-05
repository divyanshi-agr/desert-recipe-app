import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Card from "./Components/Card";

function App() {
  const APP_ID = "978a9de6";
  const APP_KEY = "5246d97d7117ccc8914af900bb9ef325";

  const egReq = `https://api.edamam.com/search?q=chocolate&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="app">
      <Navbar />
      <Search />
      <div className="flex mx-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
