import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'
import { initAccessToken } from './libs/services/getAccessToken.ts'
import initAPI from './libs/services/initAPI.ts'
import initApiLocal from './libs/services/initApiLocal.ts'
import theme from './theme.ts'

const queryClient = new QueryClient()

async function initializeApp() {
  await initAccessToken(store.dispatch)
  await initApiLocal()
  const state = store.getState()
  const token = state.token.accessToken
  if (token) {
    initAPI()
  }
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </ChakraProvider>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

initializeApp()
