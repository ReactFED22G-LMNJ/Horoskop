import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from 'react-router-dom';
import './index.css';
import ChooseYourSign from './pages/ChooseYourSign';
import DailyHoroscope from './pages/DailyHoroscope';
import StartPage from './pages/StartPage';

function App() {
  const [name, setName] = useState("");

  const router = createBrowserRouter (
    createRoutesFromElements (
    <Route>
      <Route index element={<StartPage name={name} onName={setName} />}/> 
      {/* <Route index element={<App />}/>  */}
      <Route path="dailyhoroscope/:sign/:day?/*" element={<DailyHoroscope name={name} />}>
        {/* <Route paht=":day" element={} /> */}
      </Route> 
      <Route path="chooseyoursign" element={<ChooseYourSign name={name} />}/> 
      <Route path="*" element={<h3>404 Not Found</h3>}/> 
    </Route>
    )
  );

  return <RouterProvider router={router}/>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
