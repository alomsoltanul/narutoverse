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
        <>
            <div className=" ">
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center h-screen">
                    {data.characters.map((char : CharName ) =>(
                        <div key={char.id} className=" text-center">
                           <h1 className="text-center font-bold text-2xl"> {char.name}</h1>
                           <img src={char.images} alt={char.name} />
                           <h4>{char.debut.anime}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}