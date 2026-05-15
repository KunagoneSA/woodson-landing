export function VersionBadge() {
  return (
    <div
      className="fixed bottom-3 right-3 z-50 select-none rounded-full bg-black/40 px-3 py-1 font-body text-[11px] font-medium tracking-wide text-white/70 backdrop-blur-sm pointer-events-none"
      aria-hidden="true"
    >
      v.{__BUILD_DATE__} · {__APP_VERSION__}
    </div>
  )
}
