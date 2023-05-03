import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { MantineProvider } from '@mantine/core'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      withCSSVariables
      theme={{
        globalStyles: () => ({
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          fontFamily: 'Inter'
        }),
        colors: {
          bluePrimary: ['#5E96FC'],
          blackPrimary: ['#232134']
        }
      }}
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  )
}

export default App
