function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-neutral-900 rounded-md flex items-center justify-center text-white text-xs font-bold tracking-wider">
            PC
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
              PC Configurator
            </h1>
            <p className="text-[11px] text-neutral-500 hidden sm:block">
              Custom Desktop Builder
            </p>
          </div>
        </div>

        <div className="text-xs text-neutral-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span className="hidden sm:inline font-medium">All components in stock</span>
        </div>
      </div>
    </header>
  );
}

export default Header;