import Timeline from './Timeline'

function CallDetails({ call, timeline }) {
  const detailRows = [
    { label: 'From', value: call.from },
    { label: 'To', value: call.to },
    { label: 'Direction', value: call.direction },
    { label: 'Type', value: call.type },
    { label: 'Call ID', value: call.id },
    { label: 'Call Duration', value: call.duration },
    { label: 'Total Cost', value: call.cost },
  ]

  return (
    <div className="h-full">
      <div className="glass h-full rounded-[10px] bg-[#fcfcfc] p-4">
        <div className="grid h-full gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h3 className="mb-3 text-base font-semibold text-zinc-700">Call Timeline</h3>
            <Timeline timeline={timeline} />
          </div>
          <div className="space-y-3 pt-0.5">
            {detailRows.map((row) => (
              <div key={row.label} className="flex items-start justify-between gap-3 border-b border-zinc-100 pb-2 last:border-b-0 last:pb-0">
                <p className="text-sm font-medium text-zinc-500">{row.label}</p>
                <p className="text-right text-sm font-semibold text-zinc-700 break-all">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallDetails
