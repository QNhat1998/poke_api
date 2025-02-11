export const Pokemon = ({ data }) => {
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img
            className="pokemon-image"
            src={data.sprites.other.dream_world.front_default}
            alt=""
          />
        </figure>
        <h1 className="pokemon-name">{data.name}</h1>
        <div className="pokemon-info">
          <p>
            {data.types
              .map((type) => {
                type.type.name;
              })
              .join(", ")}
          </p>
        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info">
            Height:<span>{data.height}</span>
          </p>
          <p className="pokemon-info">
            Weight:<span>{data.weight}</span>
          </p>
          <p className="pokemon-info">
            Speed:<span>{data.stats[5].base_stat}</span>
          </p>
        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info">
            Experience:<span>{data.base_experience}</span>
          </p>
          <p className="pokemon-info">
            Attack:<span>{data.stats[1].base_stat}</span>
          </p>
          <div className="pokemon-info">
            <p>Ability:</p>
            <span>
              {data.abilities
                .map((ability) => ability.ability.name)
                .slice(0, 1)
                .join(", ")}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};
