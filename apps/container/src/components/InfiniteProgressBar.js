import React from 'react'
import './progressbar.css'

const InfiniteProgressBar = () => {
  return (
    <div className="h-1.5 w-full bg-primary-foreground overflow-hidden">
      <div className="progress w-full h-full bg-primary left-right"></div>
    </div>
  )
}

export default InfiniteProgressBar
