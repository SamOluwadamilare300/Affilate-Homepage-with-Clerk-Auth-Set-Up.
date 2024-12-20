

import React from 'react'
import Menu from './menu'
import Link from 'next/link'
import GlassSheet from '@/components/global/glass-sheet'
import { Button } from '@/components/ui/button'
import { HiOutlineMenu } from "react-icons/hi";



type Props = {}

const LandingPageNavbar = (props: Props) => {
  return (
           <div className="w-full sticky top-0 z-50 shadow-md">
     
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <p className="font-bold text-2xl text-white">FoldPro.</p>

          {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Menu orientation="desktop" />
        </div>
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4FC3F7_0%,#01579B_50%,#4FC3F7_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Dashboard
          </span>
        </Link>
        <GlassSheet
          triggerClass="lg:hidden text-white"
          trigger={
            <HiOutlineMenu size={40} />
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
    </div>
    </div>

  )
}

export default LandingPageNavbar