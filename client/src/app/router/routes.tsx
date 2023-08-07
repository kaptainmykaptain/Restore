import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/homepage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetail from "../../features/catalog/ProductDetail";
import About from "../../features/about/about";
import Contact from "../../features/contact/contact";
import Register from "../../features/register/Register";

export const router = createBrowserRouter ([
  {
    path:'/',
    element: <App></App>,
    children: [
      {path:'', element:<HomePage></HomePage>},
      {path:'catalog', element:<Catalog></Catalog>},
      {path:'catalog/:id', element:<ProductDetail/>},
      {path:'about', element:<About></About>},
      {path:'contact', element:<Contact></Contact>},
      {path:'register', element:<Register></Register>}
      
    ]
  }
])