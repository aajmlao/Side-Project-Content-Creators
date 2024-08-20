import { useLoaderData  } from 'react-router-dom';
import Card from '../components/Card';

const ViewAllCreators =()=>{
    const data = useLoaderData();
    const creators = data['creators']
    
    return(
        <>
        <h1>Content Creators</h1>
        <nav>
          {creators.length ? (
            <ul className="d-flex justify-content-evenly flex-wrap gap-5" style={{listStyle:'none', paddingLeft:'24px', paddingRight:'24px', paddingBottom:'100px', paddingTop:'50px'}}>
              {creators.map((creator)=>(
                <li key={`${creator.name}`}>
                    <Card name={creator.name} 
                    url={creator.url} 
                    description={creator.description} 
                    imageURL={creator.imageURL}/>
                </li>
              ))}
            </ul>
          ):(
            <p>
              <i>No Creator</i>
            </p>
          )}
        </nav>
        </>
    )
}

export default ViewAllCreators;
