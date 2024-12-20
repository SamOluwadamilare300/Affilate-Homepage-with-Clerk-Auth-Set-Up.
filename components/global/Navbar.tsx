// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { MenuIcon, ChevronDown } from 'lucide-react'

// type Props = {}

// const Navbar = async (props: Props) => {
//   return (
//     <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
//       <aside className="flex items-center gap-[2px]">
//         <p className="text-3xl font-bold text-white">Fold Pro</p>
//       </aside>
      
//       <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
//         <ul className="flex items-center gap-4 list-none">
//           <li className="group relative">
//             <Link href="/offers" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
//               Products <ChevronDown className="w-4 h-4" />
//             </Link>
//             <ul className="absolute hidden group-hover:block bg-gray-800 shadow-lg rounded-md p-2 mt-2 w-48 space-y-2">
//               <li><Link href="/offers/top-performers" className="block hover:bg-gray-700 p-2 rounded">Top Performers</Link></li>
//               <li><Link href="/offers/new" className="block hover:bg-gray-700 p-2 rounded">New Offers</Link></li>
//               <li><Link href="/offers/categories" className="block hover:bg-gray-700 p-2 rounded">Categories</Link></li>
//             </ul>
//           </li>
          
//           <li className="group relative">
//             <Link href="/earnings" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
//               Inetegrations<ChevronDown className="w-4 h-4" />
//             </Link>
//             <ul className="absolute hidden group-hover:block bg-gray-800 shadow-lg rounded-md p-2 mt-2 w-48 space-y-2">
//               <li><Link href="/earnings/dashboard" className="block hover:bg-gray-700 p-2 rounded">Dashboard</Link></li>
//               <li><Link href="/earnings/payouts" className="block hover:bg-gray-700 p-2 rounded">Payouts</Link></li>
//               <li><Link href="/earnings/history" className="block hover:bg-gray-700 p-2 rounded">Payment History</Link></li>
//             </ul>
//           </li>
          
//           <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Features</Link></li>
          
//           <li className="group relative">
//             <Link href="/support" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
//               Support<ChevronDown className="w-4 h-4" />
//             </Link>
//             <ul className="absolute hidden group-hover:block bg-gray-800 shadow-lg rounded-md p-2 mt-2 w-48 space-y-2">
//               <li><Link href="/support/faq" className="block hover:bg-gray-700 p-2 rounded">FAQ</Link></li>
//               <li><Link href="/support/contact" className="block hover:bg-gray-700 p-2 rounded">Contact Us</Link></li>
//               <li><Link href="/support/help-center" className="block hover:bg-gray-700 p-2 rounded">Help Center</Link></li>
//             </ul>
//           </li>
//         </ul>
//       </nav>
      
//       <aside className="flex items-center gap-4">
//         <Link
//           href="/dashboard"
//           className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50"
//         >
//           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4FC3F7_0%,#01579B_50%,#4FC3F7_100%)]" />
//           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//             Dashboard
//           </span>
//         </Link>

//         <MenuIcon className="md:hidden text-white" />
//       </aside>
//     </header>
//   )
// }

// export default Navbar