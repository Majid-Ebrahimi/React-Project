import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {FavoritesContextProvider} from "./store/favorites-context";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <FavoritesContextProvider>
        <Router>
            <App/>
        </Router>
    </FavoritesContextProvider>
);


