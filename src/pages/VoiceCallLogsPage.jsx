import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import ActionCards from '../components/ActionCards'
import CallDetails from '../components/CallDetails'
import CallList from '../components/CallList'
import RecordingPlayer from '../components/RecordingPlayer'
import SearchBar from '../components/SearchBar'
import StatsCard from '../components/StatsCard'
import Tabs from '../components/Tabs'
import TranscriptPanel from '../components/TranscriptPanel'
import { callLogs, callTimeline, dashboardStats, recordingMeta, transcriptMessages } from '../data/mockData'

function VoiceCallLogsPage() {
  const [query, setQuery] = useState('')
  const [selectedCallId, setSelectedCallId] = useState(callLogs[0].id)
  const [activeTab, setActiveTab] = useState('Call Details')

  const filteredCalls = useMemo(
    () =>
      callLogs.filter((call) =>
        [call.id, call.from, call.to].join(' ').toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  )

  const selectedCall = filteredCalls.find((c) => c.id === selectedCallId) || filteredCalls[0] || callLogs[0]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex min-h-screen flex-col gap-3">
      <div className="grid gap-1.5 sm:grid-cols-2 xl:grid-cols-5">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="grid min-h-0 flex-1 gap-3 xl:grid-cols-[1.06fr_0.74fr]">
        <section className="glass flex min-h-0 flex-col rounded-[14px] p-3">
          <SearchBar query={query} setQuery={setQuery} />
          <CallList calls={filteredCalls} selectedCallId={selectedCall.id} setSelectedCallId={setSelectedCallId} />
        </section>
        <section className="glass flex min-h-0 flex-col rounded-[14px] p-3">
          <div className="mb-2.5 border-b border-zinc-200 pb-2.5">
            <h2 className="text-xl font-semibold text-zinc-800">Call Details Panel</h2>
            <p className="text-sm text-zinc-500">{selectedCall.id} • {selectedCall.status}</p>
          </div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="mt-2.5 min-h-0 flex-1">
              {activeTab === 'Call Details' && <CallDetails call={selectedCall} timeline={callTimeline} />}
              {activeTab === 'Transcript' && <TranscriptPanel messages={transcriptMessages} />}
              {activeTab === 'Recording' && <RecordingPlayer recording={recordingMeta} />}
              {activeTab === 'More' && <ActionCards />}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </motion.div>
  )
}

export default VoiceCallLogsPage
