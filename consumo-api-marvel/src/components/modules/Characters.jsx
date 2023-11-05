/* eslint-disable react/prop-types */
const Characters = ({ data }) => {
    return (
        <section className="py-8">
            <div className="container px-2 mx-auto flex flex-col gap-8">
                <h2 className="text-blue-900 text-3xl text-center font-extrabold">Personajes</h2>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] gap-6">
                    {data?.map(element => {
                        const { id, name, description, thumbnail: { path, extension } } = element;
                        return (
                            <div
                                key={id}
                                className="rounded-2xl overflow-hidden flex flex-col"
                            >
                                <img
                                    src={`${path}.${extension}`}
                                    alt={name}
                                    width={256}
                                    height={256}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="h-full p-4 bg-sky-900 flex flex-col gap-2">
                                    <a href="#">
                                        <h3 className="text-2xl font-bold">{name}</h3>
                                    </a>
                                    <a href="#" className="text-sm"><span className="font-bold">Descripción:</span> {description ? `${description}` : 'No hay descripción disponible'} </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Characters;