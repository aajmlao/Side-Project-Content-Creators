import Card from './components/Card';
import { useRef, useState } from 'react';
import './App.css'
import { Form, useLoaderData } from 'react-router-dom';
import { createCreator, getCreator } from "./dataOp";
import AddCreator from './pages/AddCreator';

export async function loader() {
  const creators = await getCreator();
  return {creators}
}

function App() {
  const targetRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false)
  const data = useLoaderData();
  const creators = data['creators']

  const viewAllCreaters = () => {
    targetRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const handleShowPopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <div id='root'>
      <div className='main-body'>
        <h1 className="text-uppercase "style={{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize: '100px'}}><strong>Creatorverse</strong></h1>
          <div className='button d-flex justify-content-around'> 
            <button className="btn btn-primary"  style={{width: '200px'}} onClick={viewAllCreaters} type='button'>Views All Creators</button>
            <Form action='addcreator'>
              <button className="btn btn-primary" style={{width: '200px'}} type='submit' onClick={handleShowPopup}>Add A Creator</button>
            </Form>
        </div>
      </div>
   
      <div className='creators text-center' ref={targetRef} >
        <h1>Content Creators</h1>
        <nav>
          {creators.length ? (
            <ul className="d-flex justify-content-evenly flex-wrap gap-5" style={{listStyle:'none', paddingLeft:'24px', paddingRight:'24px', paddingBottom:'100px', paddingTop:'50px'}}>
              {creators.map((creator)=>(
                <li key={`${creator.id}`}>
                  <Card name={JSON.parse(creator.name).name} 
                  url={JSON.parse(creator.url).url} 
                  description={JSON.parse(creator.description).description} 
                  imageURL={JSON.parse(creator.imageURL).imageURL}/></li>
              ))}
            </ul>
          ):(
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>

      {showPopup && <div id="popup" >
        <AddCreator showPopup={handleShowPopup}/>
      </div>}
    </div>
  )
}
export default App;