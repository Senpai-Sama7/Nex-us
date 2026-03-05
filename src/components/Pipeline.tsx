import { CheckCircle2, CircleDashed, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Pipeline() {
  return (
    <div className="w-80 bg-[var(--color-nexus-surface)] flex flex-col h-full border-l border-[var(--color-nexus-border)]">
      <div className="p-4 border-b border-[var(--color-nexus-border)]">
        <h2 className="text-xs font-mono text-[var(--color-nexus-muted)] uppercase tracking-widest mb-1">Compute Lane</h2>
        <p className="text-[10px] text-[var(--color-nexus-muted)]">WASM Worker Execution</p>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-6">
        <Phase 
          number="01" 
          title="Structural Parse" 
          status="complete" 
          time="102μs"
          delay={0.1}
          details={[
            "lopdf-style binary parser",
            "Content stream tokenizer",
            "Output: ContentStreamGraph (AoS)"
          ]}
        />
        <Phase 
          number="02" 
          title="Field Extraction" 
          status="complete" 
          time="45μs"
          delay={0.3}
          details={[
            "Text run collector",
            "Bounding box normalization",
            "Output: FieldBatch (SoA)"
          ]}
        />
        <Phase 
          number="03" 
          title="Classification" 
          status="complete" 
          time="89μs"
          delay={0.5}
          details={[
            "Rule engine (regex + layout)",
            "Confidence scoring",
            "Output: ClassifiedFieldBatch"
          ]}
        />
        <Phase 
          number="04" 
          title="Decision Gate" 
          status="complete" 
          time="12μs"
          delay={0.7}
          details={[
            "Confidence > 0.95 (Direct)",
            "No Claude API call required",
            "Turso metadata write queued"
          ]}
        />
      </div>

      <div className="p-4 border-t border-[var(--color-nexus-border)] bg-[var(--color-nexus-bg)]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-mono text-[var(--color-nexus-muted)]">Total Inference</span>
          <span className="text-xs font-mono text-[var(--color-nexus-accent)]">248μs</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-[var(--color-nexus-muted)]">Cost</span>
          <span className="text-xs font-mono text-white">$0.000001</span>
        </div>
      </div>
    </div>
  );
}

function Phase({ number, title, status, time, details, delay }: { number: string, title: string, status: 'complete' | 'active' | 'pending', time: string, details: string[], delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="relative pl-6"
    >
      <div className="absolute left-0 top-1 bottom-[-24px] w-px bg-[var(--color-nexus-border)] last:hidden" />
      
      <div className="absolute left-[-5px] top-1 bg-[var(--color-nexus-surface)]">
        {status === 'complete' && <CheckCircle2 size={12} className="text-[var(--color-nexus-accent)]" />}
        {status === 'active' && <Loader2 size={12} className="text-[var(--color-nexus-accent)] animate-spin" />}
        {status === 'pending' && <CircleDashed size={12} className="text-[var(--color-nexus-muted)]" />}
      </div>

      <div className="mb-1 flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-[var(--color-nexus-muted)]">{number}</span>
          <h3 className={`text-sm font-medium ${status === 'pending' ? 'text-[var(--color-nexus-muted)]' : 'text-white'}`}>{title}</h3>
        </div>
        {status === 'complete' && <span className="text-[10px] font-mono text-[var(--color-nexus-accent)]">{time}</span>}
      </div>

      <ul className="space-y-1 mt-2">
        {details.map((detail, i) => (
          <li key={i} className="text-[10px] font-mono text-[var(--color-nexus-muted)] flex items-start gap-2">
            <span className="text-[var(--color-nexus-border)]">└</span>
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
