import { motion } from 'framer-motion'

function CallLogItem({ call, active, onClick }) {
  const isAnswered = call.status === 'Answered'

  return (
    <motion.button
      whileHover={{ scale: 1.003 }}
      onClick={onClick}
      className={`w-full rounded-[14px] border px-3.5 py-3 text-left transition ${active ? 'border-[#f2b277] bg-[#fff8f0]' : 'border-zinc-200 bg-white hover:border-[#f2b277]'}`}
    >
      <div className="mb-1.5">
        <p className="text-lg font-semibold leading-5 text-zinc-800">{call.from}</p>
      </div>
      <p className="mb-2 text-sm text-zinc-500">
        to {call.to}
      </p>
      <div className="mb-2.5 flex items-start justify-between text-sm text-zinc-500">
        <p>{call.date} • {call.time}</p>
        <div className="flex flex-col items-end gap-1.5">
          <span className={`rounded-full px-2.5 py-1 text-sm font-semibold ${isAnswered ? 'bg-[#ecfaef] text-[#2f9a47]' : 'bg-zinc-100 text-zinc-500'}`}>{call.status}</span>
          <p>{call.duration}</p>
        </div>
      </div>
      <div>
        <span className="rounded-full bg-[#fff2e5] px-2.5 py-1 text-sm font-semibold text-[#da7d33]">MOS {call.mos}</span>
      </div>
    </motion.button>
  )
}

export default CallLogItem
