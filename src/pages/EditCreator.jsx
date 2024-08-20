import { useState } from "react";
import { getCreator, updateCreator } from "../dataOp";
import { useLoaderData, useNavigate, Form } from "react-router-dom";

export async function loader(name) {
    const creator = await getCreator(name);
    return creator;
}


const EditCreator = ({handlePopup}) => {
    const loaderData = useLoaderData();
    const navigate = useNavigate();

    const name = loaderData[0]['name'];
    const url = loaderData[0]['url'];
    const description = loaderData[0]['description'];
    const imageURL = loaderData[0]['imageURL'];

    const [creatorURL, setCreatorURL] = useState(url);
    const [creatorDes, setCreatorDes] = useState(description);
    const [creatorImageURL, setCreatorImageURL] = useState(imageURL);
    
    const handleDes = (e) => {
        setCreatorDes(e.target.value);
    }

    const handleURL = (e) => {
        setCreatorURL(e.target.value);
    }

    const handleImageURL = (e) => {
        setCreatorImageURL(e.target.value);
    }

    async function action(name, url, description, imageURL ){
        console.log(url)
        await updateCreator({name:name, newUrl:url, newDescription:description, newImageURL:imageURL});
        navigate(`/creator/${name}`)
        window.location.reload();
    }

    return(
        <>
            <Form className="d-flex flex-column addCreator" method="post"
            onSubmit={async(e) => {
                e.preventDefault();
                await action(name, creatorURL, creatorDes, creatorImageURL)
            }}
            style={{backgroundColor: 'white', padding:'20px', borderRadius: '10px', 
            boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)', width: '35rem'}}>
                <h1>Edit Content Creator</h1>
                <label>
                    <span>Creator URL:</span><br/>
                    <input type="text" name='url' placeholder="Enter URL" value={creatorURL} onChange={handleURL}/>
                </label><br/>

                <label>
                    <span>Description:</span><br/>
                    <textarea name="description" placeholder="Description" value={creatorDes} onChange={handleDes}/>
                </label><br/>
            
                <label>
                    <span>Creator Image URL:</span><br/>
                    <input type="text" name='imageURL' placeholder="Enter URL" value={creatorImageURL} onChange={handleImageURL}/>
                </label><br/>
                <p className="d-flex justify-content-around">
                    <button type="submit" className="btn btn-primary w-25">Save</button>
                    <button type='button' 
                    onClick={()=>{navigate(-1), handlePopup()}} 
                    className="btn btn-primary w-25">Cancel</button>
                </p>
            </Form>
        </>
    )
}

export default EditCreator;