import React from 'react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { map } from 'lodash'

const PostSkeleton = () => (
  <>
    {map(new Array(5), (_, index) => (
      <Card key={index} className="sm:col-span-2 mb-4">
        <div className="flex gap-4 p-3">
          <Skeleton className="w-20 h-20 aspect-square rounded-md" />
          <div className="flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </Card>
    ))}
  </>
)

export default PostSkeleton
