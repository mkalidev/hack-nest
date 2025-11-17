import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Supports weights 100-900
import '@fontsource-variable/inter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppKitProvider } from '@reown/appkit/react'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AppKitProvider  projectId="YOUR_PROJECT_ID"
      networks={[
        /* Your Networks */
      ]}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppKitProvider>
  </StrictMode>,
)
