import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n';

// 1. IMPORT TanStack Query Components
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// Optional: Recommended for debugging in development
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; 

// 2. CREATE A QueryClient INSTANCE
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Optional: Prevent refetching data immediately upon mounting if it's "fresh"
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 3. WRAP THE APP WITH QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
      
      {/* 4. OPTIONAL: Add Devtools for a great debugging UI */}
      {/* Set initialIsOpen={false} to keep it closed by default */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>,
);