'use client'
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { useState, useEffect } from "react"

type Props = {}

const DashboardSnippet = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading skeleton

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative py-8">
      <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-40 mx-10" />
      <div className="w-full aspect-video relative">
        {isLoading ? (
          <Skeleton className="absolute inset-0 w-full h-full object-contain" />
        ) : (
          <Image
            priority
            src="https://res.cloudinary.com/durtjwxjs/image/upload/v1733910095/original-7e96bc8017491153f2bf21b02698c11f_wooe60.png"
            className="opacity-[0.95]"
            alt="snippet"
            sizes="100vw"
            fill
            objectFit="contain"
          />
        )}
      </div>
    </div>
  )
}

export default DashboardSnippet