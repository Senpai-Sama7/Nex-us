import { Activity, Cpu, Database, HardDrive, Shield, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-nexus-border)] bg-[var(--color-nexus-surface)]">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded bg-[var(--color-nexus-accent-dim)] text-[var(--color-nexus-accent)]">
          <Zap size={18} />
        </div>
        <div>
          <h1 className="text-lg font-mono font-bold tracking-wider text-white">NEXUS</h1>
          <p className="text-[10px] font-mono text-[var(--color-nexus-muted)] uppercase tracking-widest">Browser-Native Runtime</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-xs font-mono text-[var(--color-nexus-muted)]">
        <div className="flex items-center gap-2">
          <Shield size={14} className="text-[var(--color-nexus-accent)]" />
          <span>ZERO EGRESS</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-[var(--color-nexus-accent)]" />
          <span>WASM COMPUTE</span>
        </div>
        <div className="flex items-center gap-2">
          <Database size={14} className="text-[var(--color-nexus-accent)]" />
          <span>TURSO EDGE</span>
        </div>
      </div>
    </header>
  );
}
