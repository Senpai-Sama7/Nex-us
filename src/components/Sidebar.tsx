import { MemoryStick, Server, Activity, Clock } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-[var(--color-nexus-border)] bg-[var(--color-nexus-surface)] flex flex-col h-full overflow-y-auto">
      <div className="p-4 border-b border-[var(--color-nexus-border)]">
        <h2 className="text-xs font-mono text-[var(--color-nexus-muted)] uppercase tracking-widest mb-4">System Status</h2>
        
        <div className="space-y-4">
          <Metric label="Memory (SAB)" value="16.0 MB" icon={<MemoryStick size={14} />} status="active" />
          <Metric label="WASM Workers" value="2 Active" icon={<Activity size={14} />} status="active" />
          <Metric label="Turso Sync" value="Connected" icon={<Server size={14} />} status="active" />
          <Metric label="Avg Latency" value="0.4ms" icon={<Clock size={14} />} status="neutral" />
        </div>
      </div>

      <div className="p-4 border-b border-[var(--color-nexus-border)]">
        <h2 className="text-xs font-mono text-[var(--color-nexus-muted)] uppercase tracking-widest mb-4">Memory Map</h2>
        <div className="font-mono text-[10px] space-y-2 text-[var(--color-nexus-muted)]">
          <div className="flex justify-between">
            <span>[0x0000]</span>
            <span className="text-white">Control Block</span>
          </div>
          <div className="flex justify-between">
            <span>[0x1000]</span>
            <span className="text-white">Input Ring</span>
          </div>
          <div className="flex justify-between">
            <span>[0x2000]</span>
            <span className="text-white">Framebuffer A</span>
          </div>
          <div className="flex justify-between">
            <span>[0x????]</span>
            <span className="text-white">Framebuffer B</span>
          </div>
          <div className="flex justify-between">
            <span>[0x????]</span>
            <span className="text-[var(--color-nexus-accent)]">FieldBatch (SoA)</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 mt-auto">
        <div className="bg-[var(--color-nexus-bg)] border border-[var(--color-nexus-border)] rounded p-3 text-xs font-mono text-[var(--color-nexus-muted)]">
          <div className="flex items-center gap-2 mb-2 text-[var(--color-nexus-accent)]">
            <div className="w-2 h-2 rounded-full bg-[var(--color-nexus-accent)] animate-pulse" />
            <span>Mesa-Semantics</span>
          </div>
          <p className="leading-relaxed">
            Atomics.waitAsync suspending microtask queue. Zero-copy guarantee active.
          </p>
        </div>
      </div>
    </aside>
  );
}

function Metric({ label, value, icon, status }: { label: string, value: string, icon: React.ReactNode, status: 'active' | 'neutral' }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-[var(--color-nexus-muted)]">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <span className={`text-xs font-mono ${status === 'active' ? 'text-[var(--color-nexus-accent)]' : 'text-white'}`}>
        {value}
      </span>
    </div>
  );
}
