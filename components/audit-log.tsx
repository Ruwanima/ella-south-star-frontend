import { ChevronUp } from "lucide-react"

const auditEntries = [
  {
    time: "8:00 AM",
    action: "Housekeeping staff Michele Brown logged in.",
  },
  {
    time: "7:45 AM",
    action: "Housekeeping staff Mary Johnson logged in.",
  },
  {
    time: "7:30 AM",
    action: "Front Desk John Smith logged in.",
  },
]

export default function AuditLog() {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
      <button className="w-full flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors">
        <h3 className="text-sm font-semibold text-foreground">Audit Log</h3>
        <ChevronUp size={20} className="text-muted-foreground" />
      </button>

      <div className="border-t border-border divide-y divide-border">
        {auditEntries.map((entry, index) => (
          <div key={index} className="px-6 py-4 flex gap-4 hover:bg-muted/30 transition-colors">
            <span className="text-sm text-muted-foreground whitespace-nowrap">{entry.time}</span>
            <span className="text-sm text-muted-foreground">{entry.action}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
