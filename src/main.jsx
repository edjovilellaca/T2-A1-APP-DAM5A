import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* import Promesa from './functions/promesa1.jsx' */
/* import Promesa2 from './functions/promesa2.jsx' */
/* import Promesa3 from './functions/promesa3.jsx' */
/* import Promesa4 from './functions/promesa4.jsx' */
/* import MyFetchAPIs from './functions/MyFetchs.jsx' */
/* import MyFetchPost from './functions/MyFetchPost.jsx' */
/* import MyFetchPut from './functions/MyFetchPut.jsx' */
import MyFetchBlob from './functions/MyFetchBlob.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFetchBlob  />
  </StrictMode>,
)
