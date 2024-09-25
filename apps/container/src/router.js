import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import BrowserRouter from '@/components/BrowserRouter'
import InfiniteProgressBar from '@/components/InfiniteProgressBar'

const PostsApp = React.lazy(() => import('@/entries/PostsApp'))
const AlbumsApp = React.lazy(() => import('@/entries/AlbumsApp'))

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<InfiniteProgressBar />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostsApp />} />
          <Route path="/albums/*" element={<AlbumsApp />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default AppRouter
