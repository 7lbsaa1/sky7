export default function ChatBox() {
  return (
    <div className="w-72 bg-[#18181b] border border-zinc-800 rounded-t-xl shadow-2xl">
      <div className="bg-zinc-900 p-3 rounded-t-xl border-b border-zinc-800 flex items-center justify-between">
        <span className="text-xs font-bold">محادثة قائمة</span>
        <button className="text-zinc-400 hover:text-white text-xs">✕</button>
      </div>
      <div className="h-40 p-3 text-xs text-zinc-500 flex items-center justify-center">
        اختر صديقاً لبدء المحادثة
      </div>
    </div>
  );
}