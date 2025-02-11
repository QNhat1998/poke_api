import { useEffect, useState } from "react";
import "./index.css";
import { Pokemon } from "./components/Pokemon";

export const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("a");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=60";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async (pokemon) => {
        const pokemonUrl = await fetch(pokemon.url);
        const pokemonData = await pokemonUrl.json();
        return pokemonData;
      });
      const pokemonResponses = await Promise.all(detailedPokemonData);
      setPokemon(pokemonResponses);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div className="loading_container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <></>;
  }

  const searchData = pokemon.filter((curCard)=>curCard.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <section className="container">
        <header>
          <h1>Let&apos;s catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            name=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pokemon"
            id=""
          />
        </div>
        <div>
          <ul className="cards">
            {searchData.map((data) => {
              console.log(searchData);
              
              return <Pokemon key={data.id} data={data} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
