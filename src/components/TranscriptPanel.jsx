import { motion } from 'framer-motion'

function TranscriptPanel({ messages }) {
  return (
    <div className="glass max-h-[450px] space-y-3 overflow-y-auto rounded-2xl p-4">
      {messages.map((msg) => (
        <motion.div key={msg.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.sender === 'agent' ? 'justify-start' : 'justify-end'}`}>
          <div className={`max-w-[80%] rounded-2xl px-3 py-2 ${msg.sender === 'agent' ? 'bg-orange-500 text-white' : 'bg-zinc-100 text-zinc-700'}`}>
            <p className="text-sm">{msg.text}</p>
            <p className={`mt-1 text-[10px] ${msg.sender === 'agent' ? 'text-orange-100' : 'text-zinc-400'}`}>{msg.time}</p>
          </div>
        </motion.div>
      ))}
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
        Agent is typing...
      </div>
    </div>
  )
}

export default TranscriptPanel
