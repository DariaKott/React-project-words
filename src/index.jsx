import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/global.scss';
import { App } from './presentation/App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
