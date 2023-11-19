import React from 'react';
import App from './components/app/app';
import { createRoot } from 'react-dom/client';
import './font/Starjedi.ttf'
import './index.css'


const root = createRoot(document.getElementById('root'));
root.render(<App />);