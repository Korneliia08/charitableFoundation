import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/globalVariables.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<h1>Loading</h1>}>
        <App/>
    </Suspense>
);


