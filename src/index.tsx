import App from './App'
import React from 'react'
import ReactDOMClient from 'react-dom/client'

const container = document.getElementById('app') as HTMLElement
const root = ReactDOMClient.createRoot(container!)
root.render(<App />)
