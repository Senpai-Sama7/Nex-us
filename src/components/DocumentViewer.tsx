import { FileText, UploadCloud } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function DocumentViewer() {
  const [isDragging, setIsDragging] = useState(false);
  const [hasFile, setHasFile] = useState(true);

  return (
    <div className="flex-1 flex flex-col bg-[var(--color-nexus-bg)] border-r border-[var(--color-nexus-border)] relative">
      <div className="absolute top-0 left-0 w-full p-2 bg-[var(--color-nexus-surface)] border-b border-[var(--color-nexus-border)] z-10 flex justify-between items-center">
        <div className="text-[10px] font-mono text-[var(--color-nexus-muted)]">
          OffscreenCanvas Render Target
        </div>
        <div className="text-[10px] font-mono text-[var(--color-nexus-accent)] flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-nexus-accent)] animate-pulse" />
          60 FPS
        </div>
      </div>

      <div className="flex-1 p-8 pt-12 overflow-auto relative scanline flex items-center justify-center">
        {!hasFile ? (
          <div 
            className={`w-full max-w-md border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center transition-colors ${
              isDragging ? 'border-[var(--color-nexus-accent)] bg-[var(--color-nexus-accent-dim)]' : 'border-[var(--color-nexus-border)] hover:border-[var(--color-nexus-muted)]'
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); setHasFile(true); }}
          >
            <UploadCloud size={48} className="text-[var(--color-nexus-muted)] mb-4" />
            <p className="text-sm text-white mb-2">Drag & Drop Invoice PDF</p>
            <p className="text-xs text-[var(--color-nexus-muted)] text-center">
              Processed entirely in-browser. No data leaves your machine.
            </p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl bg-white shadow-2xl relative"
          >
            {/* Simulated PDF Document */}
            <div className="p-12 text-black font-sans min-h-[800px]">
              <div className="flex justify-between border-b-2 border-gray-800 pb-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter">INVOICE</h1>
                  <p className="text-sm text-gray-500 mt-1">FREIGHT BROKERAGE SERVICES</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">NEXUS LOGISTICS LLC</p>
                  <p className="text-sm text-gray-600">123 Freight Way</p>
                  <p className="text-sm text-gray-600">Chicago, IL 60601</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-xs font-bold text-gray-400 mb-1">BILL TO</p>
                  <p className="font-medium">Acme Manufacturing</p>
                  <p className="text-sm text-gray-600">456 Industrial Pkwy</p>
                  <p className="text-sm text-gray-600">Detroit, MI 48202</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-1">INVOICE #</p>
                    <p className="font-mono font-medium">INV-2026-8942</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-1">DATE</p>
                    <p className="font-mono font-medium">Mar 05, 2026</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-1">DUE DATE</p>
                    <p className="font-mono font-medium">Apr 04, 2026</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-1">AMOUNT DUE</p>
                    <p className="font-mono font-bold text-lg">$4,250.00</p>
                  </div>
                </div>
              </div>

              <table className="w-full text-sm mb-12">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 font-bold text-gray-500">DESCRIPTION</th>
                    <th className="text-right py-2 font-bold text-gray-500">QTY</th>
                    <th className="text-right py-2 font-bold text-gray-500">RATE</th>
                    <th className="text-right py-2 font-bold text-gray-500">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4">Line Haul - Chicago to Detroit</td>
                    <td className="text-right py-4">1</td>
                    <td className="text-right py-4">$3,800.00</td>
                    <td className="text-right py-4 font-mono">$3,800.00</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4">Fuel Surcharge (FSC)</td>
                    <td className="text-right py-4">1</td>
                    <td className="text-right py-4">$450.00</td>
                    <td className="text-right py-4 font-mono">$450.00</td>
                  </tr>
                </tbody>
              </table>

              {/* Simulated Bounding Boxes */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-[168px] right-[48px] w-[140px] h-[24px] border-2 border-[var(--color-nexus-accent)] bg-[var(--color-nexus-accent-dim)] pointer-events-none" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-[228px] right-[48px] w-[120px] h-[28px] border-2 border-[var(--color-nexus-accent)] bg-[var(--color-nexus-accent-dim)] pointer-events-none" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-[168px] right-[200px] w-[140px] h-[24px] border-2 border-[var(--color-nexus-accent)] bg-[var(--color-nexus-accent-dim)] pointer-events-none" 
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

