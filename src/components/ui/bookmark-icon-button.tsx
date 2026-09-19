import { useState } from "react";

export function BookmarkIconButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <button
      onClick={() => setIsBookmarked(!isBookmarked)}
      className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition cursor-pointer"
      title={isBookmarked ? "إلغاء الحفظ" : "حفظ البوست"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isBookmarked ? "#3b82f6" : "none"}
        stroke={isBookmarked ? "#3b82f6" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 transition-all duration-200"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}