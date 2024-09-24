import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PostsApp from '@/entries/PostsApp'
import AlbumsApp from '@/entries/AlbumsApp'
import Layout from '@/components/Layout'
import BrowserRouter from '@/components/BrowserRouter'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsApp />} />
        <Route path="/albums/*" element={<AlbumsApp />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter
