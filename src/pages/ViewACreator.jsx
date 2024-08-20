import { useParams, useNavigate, useLoaderData, Form } from "react-router-dom"
import { useEffect, useState } from "react";
import { getCreator } from "../dataOp";
import '../style/viewAcreator.css'
import bg from '../assets/bg.png'
import EditCreator from "./EditCreator";
import Delete, { action as DeleteAction } from './DeleteCreator'


export async function loader({params}) {
    const data = await getCreator(params.creatorName); //creatorName is from main
    return data
}

const ViewCreator = () => {
    const [isPopup, setIsPopup] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const loaderData = useLoaderData();
    const [comfirmDelete, setComfirmDelete] = useState(false);
    const name = loaderData[0]['name'];
    const url = loaderData[0]['url'];
    const description = loaderData[0]['description'];
    const imageURL = loaderData[0]['imageURL'];

    const handlePopoup = () => {
        setIsPopup(!isPopup);
    }
    const handleDelete = () => {
        setComfirmDelete(true);
    }

    return(
        <>
            <div className="text-center body" style={{padding: '100px', height:'100vh', backgroundImage: `url(${bg})`}} >
            
                <div id='left'>
                    <img src={imageURL} alt="image"/>
                </div>
            
                <div id='right'>
                    <h1>Name: {params.creatorName}</h1>
                    <span className="">
                    <Form action='editCreator'>
                        <button className="btn btn-info" style={{width:'200px'}} type="submit" onClick={handlePopoup}>
                            <i className="bi bi-pencil-square">Edit Creator Info</i>
                        </button>
                    </Form>
                    <Form action='deleteCreator' method="post"
                    onSubmit={(e) => {
                        if (!confirm(`Are you sure want to delete ${params.creatorName}!`)) {
                            e.preventDefault();
                        } else{
                            console.log("click delete")
                            DeleteAction(params.creatorName);
                            handleDelete();
                        }
                        
                    }}
                    >
                        <button className="btn btn-info" style={{width:'200px'}} type="submit">
                            <i className="bi bi-pencil-square">Delete Creator!</i>
                        </button>
                    </Form>
                    </span>
                    <div>
                        <h3>Description:</h3>
                        <p>{description}</p>
                    </div>
                   
                    <form action={url}>
                        <button className="btn btn-danger"><i className="bi bi-youtube fs-3"><small>YouTube</small></i></button>
                    </form>

                    <button className="btn btn-info" style={{width:'150px', marginTop:'50px'}} type="button" 
                        onClick={()=>{navigate('/')}}>Go back to home
                    </button>
            
                </div>
            </div>
            {isPopup && <div id='editPopup'>
                <EditCreator handlePopup={handlePopoup}/>
            </div>}
            {comfirmDelete && <Delete /> }
        </> 
    )
}

export default ViewCreator;