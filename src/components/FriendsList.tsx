export default function FriendsList() {
  return (
    <div className="bg-[#18181b] rounded-xl border border-zinc-800 p-4">
      <h3 className="text-sm font-semibold mb-3 text-zinc-300">الأصدقاء المتصلون</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 cursor-pointer hover:bg-zinc-800/50 p-2 rounded-lg transition">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold">
              ع
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#18181b]"></span>
          </div>
          <span className="text-sm">عمر أحمد</span>
        </div>
      </div>
    </div>
  );
}