import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ onImportClick }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <nav className="flex gap-8">
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `relative pb-1 text-sm font-medium transition-colors ${
              isActive ? 'text-[#ea8d3f]' : 'text-zinc-500 hover:text-zinc-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              Contacts
              {isActive && <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#ea8d3f]" />}
            </>
          )}
        </NavLink>
        <NavLink
          to="/smart-lists"
          className={({ isActive }) =>
            `relative pb-1 text-sm font-medium transition-colors ${
              isActive ? 'text-[#ea8d3f]' : 'text-zinc-500 hover:text-zinc-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              Smart Lists
              {isActive && <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#ea8d3f]" />}
            </>
          )}
        </NavLink>
        <NavLink
          to="/bulk-actions"
          className={({ isActive }) =>
            `relative pb-1 text-sm font-medium transition-colors ${
              isActive ? 'text-[#ea8d3f]' : 'text-zinc-500 hover:text-zinc-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              Bulk Actions
              {isActive && <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#ea8d3f]" />}
            </>
          )}
        </NavLink>
      </nav>

      <div className="flex gap-3">
        <button 
          onClick={onImportClick}
          className="rounded-lg border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          Import
        </button>
        <button className="rounded-lg bg-[#1a1c1e] px-4 py-1.5 text-sm font-medium text-white hover:bg-black">
          Single Call
        </button>
      </div>
    </div>
  )
}

export default Navbar
