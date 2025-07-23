export interface TailedBeast {
    id: number;
    name: string;
    images: string[];
    ddebut: {
        manga: string;
        anime: string;
        novel: string;
        movie: string;
        game: string;
        ova: string;
        appearsIn: string;
    };

}

export default async function TailedBeasts() {

    const res = await fetch("https://dattebayo-api.onrender.com/tailed-beasts");
    const data = await res.json();

    return (
        <>
            <div>
                <div className=" grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    <div className=" text-center" >
                        {data["tailed-beasts"].map((beasts: TailedBeast) => (
                            
                                <div key={beasts.id}>
                                    <h1>
                                        {beasts.name}

                                    </h1>
                                    <img src={beasts.images} alt={beasts.images} />

                                </div>

                            
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}