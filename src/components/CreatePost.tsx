import { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { db, auth } from '../firebase';
import { Button } from './ui/button';

export default function CreatePost() {
  const [caption, setCaption] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageBase64) {
      alert('يرجى اختيار صورة للنشر');
      return;
    }

    setLoading(true);
    try {
      const postsRef = ref(db, 'posts');
      const newPostRef = push(postsRef);
      await set(newPostRef, {
        caption,
        imageBase64,
        userId: auth.currentUser?.uid,
        userName: auth.currentUser?.displayName || auth.currentUser?.email?.split('@')[0] || 'مستخدم Sky7',
        userAvatar: '',
        timestamp: new Date().toLocaleString('ar-EG'),
        isVerified: false
      });

      setCaption('');
      setImageBase64('');
    } catch (err) {
      alert('حدث خطأ أثناء نشر البوست');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#18181b] rounded-xl border border-zinc-800 p-4">
      <h3 className="text-sm font-semibold mb-3">إنشاء منشور جديد</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          placeholder="بماذا تفكر؟"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 resize-none h-20"
        />

        {imageBase64 && (
          <div className="relative rounded-lg overflow-hidden max-h-48 bg-black flex justify-center">
            <img src={imageBase64} alt="المعاينة" className="object-contain h-48" />
            <button
              type="button"
              onClick={() => setImageBase64('')}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 text-xs"
            >
              ✕
            </button>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-zinc-800 pt-3">
          <label className="cursor-pointer text-sm text-blue-500 hover:text-blue-400 flex items-center gap-2">
            📷 <span>إضافة صورة</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>

          <Button type="submit" disabled={loading} size="sm" className="bg-blue-600 hover:bg-blue-700">
            {loading ? 'جاري النشر...' : 'نشر'}
          </Button>
        </div>
      </form>
    </div>
  );
}