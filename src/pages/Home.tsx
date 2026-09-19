import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import FriendsList from '../components/FriendsList';
import ChatBox from '../components/ChatBox';

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  // جلب البوستات (الصور المرفوعة بصيغة Base64) من Firebase
  useEffect(() => {
    const postsRef = ref(db, 'posts');
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).reverse(); // لعرض الأحدث أولاً
        setPosts(postsArray);
      }
    });
  }, []);

  return (
    <div className="flex gap-6 max-w-[1400px] mx-auto w-full">
      
      {/* العمود الأوسط: إنشاء بوست وعرض المنشورات */}
      <div className="flex-1 max-w-2xl mx-auto space-y-6">
        <CreatePost />
        
        <div className="space-y-4">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* العمود الأيسر: الأصدقاء المتصلون والمحادثات */}
      <div className="hidden xl:block w-80 space-y-6 shrink-0">
        <FriendsList />
        
        {/* هنا تفتح المحادثات في نافذة صغيرة (ChatBox) عند الضغط على صديق */}
        <div className="fixed bottom-0 left-4 z-50">
           <ChatBox />
        </div>
      </div>
      
    </div>
  );
}