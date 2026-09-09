export default function Spinner({ text = "Loading..." }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base-100/70 backdrop-blur-sm"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-2xl bg-base-100 px-5 py-4 shadow-lg">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-base-300 border-t-primary" />

        <span className="text-sm font-medium text-base-content">{text}</span>
      </div>
    </div>
  );
}
