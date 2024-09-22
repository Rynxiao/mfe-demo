import './main.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '@/router'

const root = createRoot(document.getElementById('containerRoot'))
root.render(<AppRouter />)
