
export type ProjectInfo = {
    name :string,
    tags :Array<string>,
    description :string,
    image :string
};

export default function Project(infos:ProjectInfo){
    console.log(infos);
    return (
        <>
            <div className="section-container">
                <div className="img-container relative">
                    <img src={infos.image}/>
                </div>
                <div className="tags">
                    {infos.tags.map((element, index) => (
                        <span>{element}</span>
                    ))}
                </div>
                <h4>{infos.name}</h4>
                <p>{infos.description}</p>
                <div className="align-right">
                    <button className="btn-type-more">Découvrir -></button>
                </div>
            </div>
        </>
    )
}