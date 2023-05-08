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
          fontFamily: 'Inter',
        }),
        
        colors: {
          bluePrimary: ['#5E96FC'],
          blue: ['#5E96FC'],
          blueHover: ['#3B7CD3'],
          blueActive: ['#92C1FF'],
          blackPrimary: ['#232134'],
          gray: ['#EAEBED'],
          borderGray: ['#D5D6DC'],
          grayLight: ['#7B7C88'],
          white: ['#FFFFFF'],
          placeholderColor: ['#ACADB9']
        },
      }}
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  )
}

export default App
