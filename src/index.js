import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {FirebaseAppProvider} from 'reactfire'
import firebaseConfig from './firebase-config';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Conectando a la app'}>
    <App />
    </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
);

