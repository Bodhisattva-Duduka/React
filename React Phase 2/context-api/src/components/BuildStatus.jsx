import { useContext } from 'react';
import { ConfiguratorContext } from '../context/ConfiguratorContext';

const CATEGORIES = [
  { id: 'processor', label: 'Processor' },
  { id: 'memory', label: 'Memory' },
  { id: 'storage', label: 'Storage' },
  { id: 'graphics', label: 'Graphics' },
  { id: 'display', label: 'Display' },
];

function BuildStatus() {
  const { parts } = useContext(ConfiguratorContext);

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-4 sm:p-5">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-3">
        <h2 className="text-base font-semibold text-neutral-900">
          Build Status
        </h2>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-medium">
          {parts.length} / {CATEGORIES.length}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {CATEGORIES.map((cat) => {
          const selectedItem = parts.find((p) => p.category === cat.id);

          return (
            <div
              key={cat.id}
              className={`px-3 py-2.5 rounded border text-sm transition-colors flex items-center justify-between ${
                selectedItem
                  ? "bg-neutral-50 border-neutral-300 text-neutral-900"
                  : "bg-white border-dashed border-neutral-200 text-neutral-400"
              }`}
            >
              <div className="flex flex-col min-w-0 pr-2">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                  {cat.label}
                </span>
                <span className="text-sm font-medium truncate mt-0.5">
                  {selectedItem ? selectedItem.name : "Not configured"}
                </span>
              </div>
              <div className="shrink-0">
                {selectedItem ? (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white text-[10px] font-bold">
                    ✓
                  </span>
                ) : (
                  <span className="inline-block w-2 h-2 rounded-full bg-neutral-300" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuildStatus;