import { useState } from 'react';
import Header from './components/Header.jsx';
import { ConfiguratorContext } from './context/ConfiguratorContext';
import Processor from './components/products/Processor.jsx';
import Memory from './components/products/Memory.jsx';
import Storage from './components/products/Storage.jsx';
import Graphics from './components/products/Graphics.jsx';
import Display from './components/products/Display.jsx';
import Cart from './components/Cart.jsx';
import BuildStatus from './components/BuildStatus.jsx';

function App() {
  const [parts, setParts] = useState([]);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col">
      <Header />

      <ConfiguratorContext.Provider value={{ parts, setParts }}>
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Build Status Checklist */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <BuildStatus />
            </aside>

            {/* Center Column: Component Selection */}
            <section className="lg:col-span-6 order-1 lg:order-2 bg-white border border-neutral-200 rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between pb-4 mb-2 border-b border-neutral-200">
                <div>
                  <h2 className="text-base font-semibold text-neutral-900">
                    Configure Components
                  </h2>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Select one option per category to complete your build
                  </p>
                </div>
                {parts.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setParts([])}
                    className="text-xs font-medium text-neutral-600 hover:text-red-600 px-3 py-1.5 rounded border border-neutral-200 hover:border-red-200 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    Reset All
                  </button>
                )}
              </div>

              <div className="divide-y divide-neutral-100">
                <Processor />
                <Memory />
                <Storage />
                <Graphics />
                <Display />
              </div>

              <div className="pt-4 mt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>{parts.length} of 5 components configured</span>
                <button
                  type="button"
                  onClick={() => setParts([])}
                  disabled={parts.length === 0}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    parts.length === 0
                      ? "text-neutral-400 cursor-not-allowed"
                      : "text-neutral-700 hover:text-red-600 border border-neutral-200 hover:bg-red-50 hover:border-red-200 cursor-pointer"
                  }`}
                >
                  Clear Selection
                </button>
              </div>
            </section>

            {/* Right Column: Order Cart & Total */}
            <aside className="lg:col-span-3 order-3 lg:order-3 lg:sticky lg:top-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-4 sm:p-5">
                <h2 className="text-base font-semibold text-neutral-900 pb-3 border-b border-neutral-200 mb-3">
                  Cart
                </h2>
                <Cart />
              </div>
            </aside>
          </div>
        </main>
      </ConfiguratorContext.Provider>
    </div>
  );
}

export default App;
