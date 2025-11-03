import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import i18n from './../i18n';
import {I18nextProvider} from 'react-i18next';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </I18nextProvider>
  </BrowserRouter>
);
