
export type ProjectInfo = {
    name :string,
    tags :Array<string>,
    description :string
};

export default function Project(infos:ProjectInfo){
    return (
        <>
            <div className="section-container">
                <div className="img-container relative">
                    <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}/>
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