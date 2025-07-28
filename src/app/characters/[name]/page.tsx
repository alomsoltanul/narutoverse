interface Params {
    name: string;
}

export default async function CharacterDetail({ params }: { params: Params }) {
    const res = await fetch("https://dattebayo-api.onrender.com/characters");
    const data = await res.json();

    const character = data.characters.find(
        (char: any) => char.name.toLowerCase() === decodeURIComponent(params.name).toLowerCase()
    );

    if (!character) return <div>Character not found</div>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
            <img
                src={character.images?.[0] || "/placeholder.png"}
                alt={character.name}
                className="w-48 h-48 object-cover"
            />
            <ul className="mt-4">
                <li><strong>Manga debut:</strong> {character.debut.manga}</li>
                <li><strong>Anime debut:</strong> {character.debut.anime}</li>
                <li><strong>Game debut:</strong> {character.debut.game}</li>
                <li><strong>Movie debut:</strong> {character.debut.movie}</li>
            </ul>
        </div>
    );
}
