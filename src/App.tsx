import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => console.log(response));
  }, []);

  return (
    <>
      <h1>Consumir API Pokémon</h1>
    </>
  );
}

export default App;
