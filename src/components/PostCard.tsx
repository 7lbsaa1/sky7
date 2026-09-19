import { BookmarkIconButton } from './ui/bookmark-icon-button';
import { APP_CONFIG } from '../config/constants'; // الملف الذي يحتوي على روابط الأيقونات

export default function PostCard({ post }: { post: any }) {
  // دالة تحميل الصورة
  const handleDownload = () => {
    if (!post.imageBase64) return; // التأكد من وجود صورة
    const link = document.createElement('a');
    link.href = post.imageBase64; // الصورة المشفرة
    link.download = `Sky7-${post.id || 'image'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#18181b] rounded-xl border border-zinc-800 p-4 shadow-sm">
      {/* رأس البوست (المستخدم وتوثيقه) */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={post.userAvatar || APP_CONFIG.defaultAvatar} 
            alt={post.userName} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-sm">{post.userName}</h3>
              {/* علامة التوثيق */}
              {post.isVerified && (
                <img src={APP_CONFIG.verifiedBadge} alt="Verified" className="w-4 h-4" />
              )}
            </div>
            <span className="text-xs text-zinc-400">{post.timestamp}</span>
          </div>
        </div>
        
        {/* زر الخيارات (الإبلاغ عن المستخدم) */}
        <button className="text-zinc-400 hover:text-white">...</button>
      </div>

      {/* نص الكابشن */}
      {post.caption && <p className="mb-3 text-sm">{post.caption}</p>}

      {/* صورة البوست المرفوعة بـ Base64 */}
      {post.imageBase64 && (
        <div className="rounded-lg overflow-hidden bg-black flex justify-center mb-4">
          <img 
            src={post.imageBase64} 
            alt="Sky" 
            className="max-h-[500px] w-full object-contain"
          />
        </div>
      )}

      {/* شريط التفاعلات */}
      <div className="flex items-center justify-between border-t border-zinc-800 pt-3 mt-2">
        <div className="flex items-center gap-4">
          {/* زر الإعجاب */}
          <button className="flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition">
            <img src={APP_CONFIG.reactions.like} alt="Like" className="w-5 h-5" />
            <span className="text-sm">أعجبني</span>
          </button>
          
          {/* زر التعليق */}
          <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
            <span className="text-sm">تعليق</span>
          </button>
        </div>

        {/* أزرار الحفظ والتحميل على اليمين */}
        <div className="flex items-center gap-3">
          {/* زر تحميل الصورة */}
          {post.imageBase64 && (
            <button 
              onClick={handleDownload} 
              className="text-sm text-blue-400 hover:text-blue-300 transition cursor-pointer"
            >
              حفظ للصورة
            </button>
          )}

          {/* زر الحفظ التفاعلي */}
          <BookmarkIconButton />
        </div>
      </div>
    </div>
  );
}