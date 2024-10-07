import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './Routes/Routes/Routes';
import AuthProvider from './Component/Provider/AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* from tan stack */}
    <QueryClientProvider client={queryClient}>
      {/* my provider  */}
      <AuthProvider>
        {/* helmet provider  */}
        <HelmetProvider>
          <div className="max-w-screen-xl mx-auto">
            {/* from dom  */}
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
