import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '@/App'
import NotFound from '@/components/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/posts" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
