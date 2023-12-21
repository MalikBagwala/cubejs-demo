import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import ReactDOM from 'react-dom/client';
import App from './App';

const cubejsApi = cubejs(import.meta.env.VITE_APP_CUBEJS_TOKEN, {
  apiUrl: import.meta.env.VITE_APP_API_URL,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CubeProvider cubejsApi={cubejsApi}>
    <App />
  </CubeProvider>
);
