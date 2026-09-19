export default function Favorites() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
        الصور المحفوظة
      </h2>
      
      {/* شبكة الصور */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* سيتم عمل Map هنا للبوستات المحفوظة من الـ State/Firebase */}
        <div className="relative group rounded-xl overflow-hidden border border-zinc-800 bg-[#18181b]">
          <div className="aspect-square bg-zinc-900 flex items-center justify-center text-zinc-500">
            صورة محفوظة هنا
          </div>
        </div>
      </div>
    </div>
  );
}