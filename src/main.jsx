import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App, {loader as appLoader} from './App';
import ErrorPage from "./errorPage";
import AddCreator from "./pages/AddCreator";
import ViewCreator, {loader as ViewCreatorLoader} from "./pages/ViewACreator";
import EditCreator, {loader as EditLoader} from "./pages/EditCreator";
import Delete from "./pages/DeleteCreator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: appLoader,
    children :[
      {
        path:'addcreator',
        element: <AddCreator/>,
        errorElement: <ErrorPage/>,
      },
    ]
  },
  {
    path: 'creator/:creatorName',
        element: <ViewCreator />,
        errorElement: <ErrorPage />,
        loader: ViewCreatorLoader,
        children: [
          {
            path: 'editCreator',
            element: <EditCreator />,
            errorElement: <ErrorPage />,
            loader: EditLoader,
          },
          {
            path: 'deleteCreator',
            element: <Delete />,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
