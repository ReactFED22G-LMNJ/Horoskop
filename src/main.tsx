import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// const router = createRoutesFromElement(
//   <Route>
//     <Route path="/" element={}/> 
//     <Route path="zodiac" element={}/> 
//     <Route path="main" element={}>
//       <Route paht=":day" element={} />
//     </Route> 
//     <Route path="about" element={}/> 
//   </Route>
// )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)
