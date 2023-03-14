import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => setList(response.data.results));
  }, []);

  return (
    <>
      <h1>Consumir API Pokémon</h1>

      <hr />
      {list.map((item: any) => (
        <Pokemon key={item.name} data={item} />
      ))}
    </>
  );
}

export default App;
