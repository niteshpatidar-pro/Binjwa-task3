function Timeline({ timeline }) {
  const getEventColor = (key) => {
    if (key === 'ring') return 'bg-sky-400'
    if (key === 'answered') return 'bg-emerald-500'
    if (key === 'ended') return 'bg-red-800'
    return 'bg-[#ea8d3f]'
  }

  return (
    <div className="space-y-3">
      {timeline.map((item) => (
        <div key={item.key} className="flex gap-2.5">
          <div className="flex flex-col items-center">
            <span className={`mt-1 h-2.5 w-2.5 rounded-full ${getEventColor(item.key)}`} />
          </div>
          <div>
            <p className="text-base font-semibold leading-tight text-zinc-700">{item.label}</p>
            <p className="text-sm text-zinc-500">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
