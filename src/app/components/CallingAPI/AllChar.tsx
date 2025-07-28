import Link from "next/link";

export interface CharName {
  id: number;
  name: string;
  images: string[];
  debut: {
    manga: string;
    anime: string;
    novel: string;
    movie: string;
    game: string;
    ova: string;
    appearsIn: string;
  };
}

export default async function Characters() {
  const res = await fetch("https://dattebayo-api.onrender.com/characters");
  const data = await res.json();

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.characters.map((char: CharName) => (
          <Link
            href={`/characters/${encodeURIComponent(char.name)}`}
            key={char.id}
            className="border p-4 rounded hover:bg-gray-100 text-center"
          >
            <h1 className="font-bold text-xl mb-2">{char.name}</h1>
            <img
              src={char.images?.[0] || "/placeholder.png"}
              alt={char.name}
              className="w-32 h-32 object-cover mx-auto"
            />
            <p className="text-sm mt-2">{char.debut.anime}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
