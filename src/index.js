// Импорт зависимостей и компонента
import React from 'react';
import App from './components/app/app';
import { createRoot } from 'react-dom/client';
import './font/Starjedi.ttf';
import './index.css';

// Создание корня приложения и его рендер
const root = createRoot(document.getElementById('root'));
root.render(<App />);
