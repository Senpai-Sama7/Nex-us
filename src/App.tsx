import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DocumentViewer } from './components/DocumentViewer';
import { Pipeline } from './components/Pipeline';
import { DataGrid } from './components/DataGrid';

export default function App() {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[var(--color-nexus-bg)] text-[var(--color-nexus-text)]">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 flex min-h-0">
            <DocumentViewer />
            <Pipeline />
          </div>
          <DataGrid />
        </main>
      </div>
    </div>
  );
}
