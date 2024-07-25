export function UiLoading() {
  return (
    <div className="animate-pulse flex flex-col items-stars  w-full  overflow-hidden">
      <div className="relative flex animate-pulse   w-full">
        <div className="absolute top-1/2 left-2 h-2 w-2/3 bg-slate-700 rounded transform  -translate-y-1/2"></div>
        <span className="opacity-0">AAA</span>
      </div>
      <div className="relative flex animate-pulse   w-full">
        <div className="absolute top-1/2 left-2 h-2 w-2/3 bg-slate-700 rounded transform  -translate-y-1/2"></div>
        <span className="opacity-0">AAA</span>
      </div>
    </div>
  );
}
