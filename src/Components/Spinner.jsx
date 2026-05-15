export default function Spinner({ text }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <span>{text}</span>
    </div>
  );
}