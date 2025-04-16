import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
function App() {
  return(<Headers/>);
  
}
function Headers(){
  return(
    <div id="Header">
       <h1>Lorem, ipsum.</h1>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laboriosam, 
          sint atque rerum tenetur aliquid corrupti modi autem. 
        A unde minima eos soluta illo id dolorum numquam perspiciatis placeat explicabo.</p>
    </div>
  );
}
function MovieList()
{
  return( 
  
  
  <div className='movie-list'>
          <Movie/>
          </div>
);
}
function Movie()
{

}