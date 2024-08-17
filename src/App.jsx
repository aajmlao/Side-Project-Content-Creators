import Card from './components/Card';
import { useRef } from 'react';
import './App.css'
import { Form, Outlet } from 'react-router-dom';
import { createCreator, getCreator } from "./dataOp";

export async function action() {
  const creator = await createCreator();
  return {creator};
}

export async function loader() {
  const creators = await getCreator();
  return {creators}
}

function App() {
  const targetRef = useRef(null)
  
  const viewAllCreaters = () => {
    targetRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div id='root'>
      <div className='main-body'>
        <h1 className="text-uppercase "style={{fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontSize: '100px'}}><strong>Creatorverse</strong></h1>
          <div className='button d-flex justify-content-around'> 
            <button className="btn btn-primary"  style={{width: '200px'}} onClick={viewAllCreaters} type='button'>Views All Creators</button>
            <Form action='addcreator'>
              <button className="btn btn-primary" style={{width: '200px'}} type='submit'>Add A Creator</button>
            </Form>
        </div>
        
        
      </div>
   
      <div className='creators text-center ' ref={targetRef} >
        <h1>Content Creators</h1>
        <nav>
          <ul class="row row-cols-md-3 g-4" style={{listStyle:'none', paddingLeft:'100px', paddingRight:'100px', paddingBottom:'100px', paddingTop:'50px'}}>
           
          </ul>
        </nav>
      </div>

      <div id="popup" >
        <Outlet />
      </div>
    </div>
  )
}
export default App;