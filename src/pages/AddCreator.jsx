import { createCreator } from "../dataOp";
import { Form, redirect, useNavigate} from "react-router-dom";

export default function AddCreator({showPopup}) {
    const navigate = useNavigate();

    async function action(formData) {
        const name = formData.get('name');
        const url = formData.get('url');
        const description = formData.get('description');
        const imageURL = formData.get('imageURL');
       
        await createCreator({name:name, url:url, description:description, imageURL:imageURL});
        navigate('/');
        showPopup();
        window.location.reload();
        
    }

    return(
        <Form className="d-flex flex-column addCreator" method="post"
        onSubmit={async(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            await action(formData)
        }}
        style={{backgroundColor: 'white', padding:'20px', borderRadius: '10px', 
        boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)', width: '35rem'}}>
            <h1>Add New Content Creator</h1>
            <label>
                <span><strong>Creator Name:</strong></span><br/>
                <input name="name" type='text' placeholder="Enter name"/>
            </label><br/>
            <label>
                <span>Creator URL:</span><br/>
                <input type="text" name='url' placeholder="Enter URL"/>
            </label><br/>
            
            <label>
                <span>Description:</span><br/>
                <textarea name="description" placeholder="Description"/>
            </label><br/>

            <label>
                <span>Creator Image URL:</span><br/>
                <input type="text" name='imageURL' placeholder="Enter URL"/>
            </label><br/>
            <p className="d-flex justify-content-around">
                <button type="submit" className="btn btn-primary w-25">Save</button>
                <button type='button' 
                onClick={()=>{navigate(-1), showPopup()}} 
                className="btn btn-primary w-25">Cancel</button>
            </p>
        </Form>
        
    )
}

