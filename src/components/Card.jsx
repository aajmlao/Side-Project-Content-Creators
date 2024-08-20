import { NavLink } from "react-router-dom";

const Card = ({name, url, description, imageURL}) => {
    return(
        <>
            <div className="card border-secondary h-100 "  style={{width: '20rem' }}>
                
                <span className="CreatorImage">
                    <img src={imageURL} className="card-img-top" alt='image'/>
                    <NavLink to={`creator/${name}`} className='infoLink'><i className="bi bi-info-square-fill h3"></i></NavLink>
                </span>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text h-30 text-truncate-3" style={{maxWidth:'400px'}}>{description}</p>
                    <a href={url} className="btn btn-primary ">Go to the website</a>
                </div>
            </div>
        </>
    )
}

export default Card;