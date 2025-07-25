import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css'
 
import Project_Routes from './project_route.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Project_Routes/>
    {/* <Header></Header> */}
  </StrictMode>,
)
