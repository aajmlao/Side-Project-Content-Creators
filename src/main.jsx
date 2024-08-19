import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App, {loader as appLoader} from './App';
import ErrorPage from "./errorPage";
import AddCreator from "./pages/AddCreator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: appLoader,
    children :[
      {
        path:'/addcreator',
        element: <AddCreator/>,
        errorElement: <ErrorPage/>,
      }
    ]
  },
  {
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>

)
