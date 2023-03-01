import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from 'react-router-dom';
import './index.css';
import ChooseYourSign from './pages/ChooseYourSign';
import DailyHoroscope from './pages/DailyHoroscope';
import StartPage from './pages/StartPage';

const router = createBrowserRouter (
  createRoutesFromElements (
  <Route>
    <Route index element={<StartPage />}/> 
    <Route path="dailyhoroscope/:sign/:day/" element={<DailyHoroscope />}>
    </Route> 
    <Route path="chooseyoursign" element={<ChooseYourSign />}/> 
    <Route path="*" element={<h3>404 Not Found</h3>}/> 
  </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
