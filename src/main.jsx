import './index.css'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import router from './Routes/routes.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);