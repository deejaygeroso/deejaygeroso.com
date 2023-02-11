import React from 'react'
import ReactDOMClient from 'react-dom/client'

import App from './App'

const container = document.getElementById('app')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOMClient.createRoot(container!)
root.render(<App />)
