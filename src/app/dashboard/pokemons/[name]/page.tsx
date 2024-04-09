import { Pokemon, PokemonsResponse } from "@/pokemons";
import { Metadata, ResolvedMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string };
}

export async function generateStaticParams () {
  let url = `https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=${151}`;
  const data: PokemonsResponse = await fetch(url).then((res) => res.json());
  const { results } = data;
  return results.map(({ name }) => ({ name: name }));
}
const getPokemon = async (name: string) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemon: Pokemon = await fetch(url, {
      cache: "force-cache",
      // next: {
      //   revalidate: 60 * 60 * 30,
      // },
    }).then((res) => res.json());
    return pokemon;
  } catch (error) {
    console.log(error);

    notFound();
  }
};

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemon(params.name);

    return {
      title: `#${id} - ${name}`,
      description: `Pagina del Pokémon ${name}`,
    };
  } catch (error) {
    return {
      title: `Pagina del Pokemon`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates placeat veniam modi ipsum doloribus culpa maiores ad. Nam cum repellendus sapiente porro molestias! Velit quisquam expedita doloribus magni placeat. `,
    };
  }
}

export default async function PokemonPage ({ params }: Props) {
  const pokemon = await getPokemon(params.name);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            {pokemon.sprites.other?.home.front_default && <Image src={pokemon.sprites.other?.home.front_default} priority={true} width={150} height={150} alt={`Imagen del pokemon ${pokemon.name}`} className="mb-5" />}

            <div className="flex flex-wrap">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">{pokemon.weight}</span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              {pokemon.sprites.front_default && <Image src={pokemon.sprites.front_default} width={100} height={100} alt={`sprite ${pokemon.name}`} />}

              {pokemon.sprites.back_default && <Image src={pokemon.sprites.back_default ?? ''} width={100} height={100} alt={`sprite ${pokemon.name}`} />}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              {pokemon.sprites.front_shiny && <Image src={pokemon.sprites.front_shiny} width={100} height={100} alt={`sprite ${pokemon.name}`} />}

              {pokemon.sprites.back_shiny && <Image src={pokemon.sprites.back_shiny} width={100} height={100} alt={`sprite ${pokemon.name}`} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
