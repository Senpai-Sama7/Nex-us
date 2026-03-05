export function DataGrid() {
  const fields = [
    { id: 'F01', type: 'INVOICE_NUM', value: 'INV-2026-8942', conf: '0.99', offset: '0x2A40' },
    { id: 'F02', type: 'INVOICE_DATE', value: 'Mar 05, 2026', conf: '0.98', offset: '0x2A80' },
    { id: 'F03', type: 'DUE_DATE', value: 'Apr 04, 2026', conf: '0.99', offset: '0x2AC0' },
    { id: 'F04', type: 'TOTAL_AMOUNT', value: '$4,250.00', conf: '0.99', offset: '0x2B00' },
    { id: 'F05', type: 'BILL_TO_NAME', value: 'Acme Manufacturing', conf: '0.96', offset: '0x2B40' },
    { id: 'F06', type: 'BILL_TO_ADDR', value: '456 Industrial Pkwy', conf: '0.95', offset: '0x2B80' },
    { id: 'F07', type: 'BILL_TO_CITY', value: 'Detroit, MI 48202', conf: '0.97', offset: '0x2BC0' },
    { id: 'F08', type: 'VENDOR_NAME', value: 'NEXUS LOGISTICS LLC', conf: '0.99', offset: '0x2C00' },
  ];

  return (
    <div className="h-64 bg-[var(--color-nexus-surface)] border-t border-[var(--color-nexus-border)] flex flex-col">
      <div className="p-2 px-4 border-b border-[var(--color-nexus-border)] flex justify-between items-center bg-[var(--color-nexus-bg)]">
        <div className="flex items-center gap-4">
          <h2 className="text-xs font-mono text-[var(--color-nexus-muted)] uppercase tracking-widest">Extracted Fields</h2>
          <span className="text-[10px] font-mono text-[var(--color-nexus-accent)] px-2 py-0.5 rounded bg-[var(--color-nexus-accent-dim)]">
            FieldBatch (SoA Layout)
          </span>
        </div>
        <div className="text-[10px] font-mono text-[var(--color-nexus-muted)]">
          16 f32 values / cache line
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-[var(--color-nexus-surface)] z-10">
            <tr>
              <th className="font-mono text-[10px] text-[var(--color-nexus-muted)] font-normal p-2 px-4 border-b border-[var(--color-nexus-border)] w-16">ID</th>
              <th className="font-mono text-[10px] text-[var(--color-nexus-muted)] font-normal p-2 px-4 border-b border-[var(--color-nexus-border)] w-48">FIELD_TYPE</th>
              <th className="font-mono text-[10px] text-[var(--color-nexus-muted)] font-normal p-2 px-4 border-b border-[var(--color-nexus-border)]">VALUE</th>
              <th className="font-mono text-[10px] text-[var(--color-nexus-muted)] font-normal p-2 px-4 border-b border-[var(--color-nexus-border)] w-24 text-right">CONFIDENCE</th>
              <th className="font-mono text-[10px] text-[var(--color-nexus-muted)] font-normal p-2 px-4 border-b border-[var(--color-nexus-border)] w-32 text-right">MEM_OFFSET</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            {fields.map((field, i) => (
              <tr key={field.id} className="hover:bg-[var(--color-nexus-bg)] cursor-pointer transition-colors group">
                <td className="p-2 px-4 border-b border-[var(--color-nexus-border)] text-[var(--color-nexus-muted)] group-hover:text-white">{field.id}</td>
                <td className="p-2 px-4 border-b border-[var(--color-nexus-border)] text-[var(--color-nexus-accent)]">{field.type}</td>
                <td className="p-2 px-4 border-b border-[var(--color-nexus-border)] text-white">{field.value}</td>
                <td className="p-2 px-4 border-b border-[var(--color-nexus-border)] text-right text-[var(--color-nexus-muted)] group-hover:text-white">{field.conf}</td>
                <td className="p-2 px-4 border-b border-[var(--color-nexus-border)] text-right text-[var(--color-nexus-muted)]">{field.offset}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
