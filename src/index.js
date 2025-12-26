import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.scss';
import './i18n';
import { Background, Profile, LanguageSwitcher } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
        <Background/>
        <LanguageSwitcher/>
        <div className='layout'>
          <Profile/>
          <main className='main'>
          <App />
          </main>
        </div>

  </>
);
