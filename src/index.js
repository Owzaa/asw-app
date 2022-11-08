import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import routes from './Routes';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(

<BrowserRouter Routes={routes}>
<App/>
</BrowserRouter>

);

