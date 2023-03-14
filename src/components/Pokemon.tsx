import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = ({ data }: any) => {
  const [details, setDetails] = useState<any>(null);

  const fetchIndividualPokemon = () => {
    axios.get(data.url).then((response) => setDetails(response.data));
  };

  useEffect(() => {
    fetchIndividualPokemon();
  }, []);

  if (details === null) {
    return <div>carregando...</div>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={details.sprites.front_default}
        alt=""
        style={{ width: 30, marginRight: 20 }}
      />
      <span>
        <b>{details.name}</b> - EXP {details.base_experience}
      </span>
    </div>
  );
};

export default Pokemon;
