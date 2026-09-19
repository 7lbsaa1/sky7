import { Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { ref, onValue } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // الاستماع لحالة الحظر من Realtime Database
        const userRef = ref(db, `users/${currentUser.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData?.isBlocked) {
            setIsBlocked(true);
          }
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="h-screen bg-zinc-950 flex items-center justify-center text-white">جاري التحميل...</div>;
  
  if (!user) return <Navigate to="/login" replace />;
  if (isBlocked) return <Navigate to="/blocked" replace />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans" dir="rtl">
      {/* شريط التنقل العلوي (يحتوي على اللوجو والإشعارات) */}
      <Navbar user={user} />
      
      <div className="flex flex-1 overflow-hidden pt-16">
        {/* القائمة الجانبية اليمنى (الروابط الأساسية) */}
        <Sidebar />
        
        {/* المحتوى المتغير (Home, Profile, Favorites) */}
        <main className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <Outlet context={{ user }} />
        </main>
      </div>
    </div>
  );
}