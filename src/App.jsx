import { useRef, useState, useEffect } from 'react';
import './App.css'
import { Form} from 'react-router-dom';
import { getCreators } from "./dataOp";
import AddCreator from './pages/AddCreator';
import ViewAllCreators from './pages/ViewAllCreators';

export async function loader() {
  const creators = await getCreators();
  return {creators}
}

function App() {
  const targetRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false)
  

  const viewAllCreaters = () => {
    targetRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const handleShowPopup = () => {
    setShowPopup(!showPopup)

  }

  return (
    <div id='root'>
      <div className='main-body' style={{backgroundImage: `url(${'src/assets/bg.png'})`}}>
        <h1 className="text-uppercase "style={{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize: '100px'}}><strong>Creatorverse</strong></h1>
          <div className='button d-flex justify-content-around'> 
            <button className="btn btn-primary"  style={{width: '200px'}} onClick={viewAllCreaters} type='button'>Views All Creators</button>
            <Form action='addcreator'>
              <button className="btn btn-primary" style={{width: '200px'}} type='submit' onClick={handleShowPopup}>Add A Creator</button>
            </Form>
        </div>
      </div>
   
      <div className='creators text-center' ref={targetRef} >
        <ViewAllCreators />
      </div>

      {showPopup && <div id="popup" >
        <AddCreator showPopup={handleShowPopup}/>
       
      </div>}
      
    </div>
  )
}
export default App;