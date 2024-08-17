
const Card = ({name, url, description, imageURL}) => {
    return(
        <>
            <div className="card border-secondary h-100"  style={{width: '20rem' }}>
                <img src={imageURL} className="card-img-top" alt='image'/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text h-50">{description}</p>
                    <a href={url} className="btn btn-primary">Go to the website</a>
                </div>
            </div>
        </>
    )
}

export default Card;