import { Filter, Search } from 'lucide-react'

function SearchBar({ query, setQuery }) {
  return (
    <div className="flex gap-2">
      <div className="focus-ring flex flex-1 items-center rounded-[10px] border border-zinc-200 bg-[#fbfbfb] px-2.5">
        <Search size={14} className="text-zinc-400" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by caller, receiver or call ID..." className="h-9 w-full bg-transparent px-2.5 text-sm text-zinc-700 outline-none" />
      </div>
      <button className="rounded-[10px] border border-zinc-200 bg-white px-3 text-zinc-500 transition hover:border-[#f2b277] hover:text-zinc-800">
        <Filter size={14} />
      </button>
    </div>
  )
}

export default SearchBar
