import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Supports weights 100-900
import '@fontsource-variable/inter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppKitProvider } from '@reown/appkit/react'
import { baseSepolia } from 'viem/chains'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AppKitProvider  projectId="39620c2d95c222279e45e3862fba2338"
      networks={[
       baseSepolia
      ]}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppKitProvider>
  </StrictMode>,
)
