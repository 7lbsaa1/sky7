import { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { db } from '../firebase';
import { Button } from '@/components/ui/button';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'users' | 'reports' | 'credentials'>('users');
  const [users, setUsers] = useState<any[]>([]);

  // جلب كل المستخدمين
  useEffect(() => {
    const usersRef = ref(db, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setUsers(usersList);
      }
    });
  }, []);

  // دالة حظر/فك حظر مستخدم
  const toggleBlockStatus = async (userId: string, currentStatus: boolean) => {
    await update(ref(db, `users/${userId}`), { isBlocked: !currentStatus });
  };

  // دالة توثيق مستخدم
  const toggleVerifyStatus = async (userId: string, currentStatus: boolean) => {
    await update(ref(db, `users/${userId}`), { isVerified: !currentStatus });
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">لوحة تحكم Sky7</h1>
      
      {/* أزرار التنقل بين صفحات الأدمن */}
      <div className="mb-8 flex gap-2 border-b border-zinc-800 pb-2">
        <Button variant={activeTab === 'users' ? 'default' : 'ghost'} onClick={() => setActiveTab('users')}>
          المستخدمين (Users)
        </Button>
        <Button variant={activeTab === 'reports' ? 'default' : 'ghost'} onClick={() => setActiveTab('reports')}>
          البلاغات (Reports)
        </Button>
        <Button variant={activeTab === 'credentials' ? 'default' : 'ghost'} onClick={() => setActiveTab('credentials')}>
          التوثيقات (Credentials)
        </Button>
      </div>

      {/* محتوى صفحة المستخدمين (users.html) */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">قائمة العملاء / المستخدمين</h2>
          {users.map(user => (
            <div key={user.id} className="flex items-center justify-between rounded-lg border border-zinc-800 bg-[#18181b] p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden">
                  {user.avatarBase64 && <img src={user.avatarBase64} alt="avatar" className="w-full h-full object-cover"/>}
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-xs text-zinc-400">{user.email}</p>
                </div>
              </div>
              <Button 
                variant={user.isBlocked ? 'default' : 'destructive'} 
                size="sm"
                onClick={() => toggleBlockStatus(user.id, user.isBlocked)}
              >
                {user.isBlocked ? 'إلغاء الحظر' : 'حظر المستخدم'}
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* محتوى صفحة البلاغات (reports.html) */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">البلاغات المقدمة</h2>
          {/* تصميم مقترح للبلاغات */}
          <div className="rounded-lg border border-zinc-800 bg-[#18181b] p-4 text-zinc-400 text-sm">
            سيتم عرض البلاغات هنا...
          </div>
        </div>
      )}

      {/* محتوى صفحة التوثيقات (usercredentials.html) */}
      {activeTab === 'credentials' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">إدارة التوثيق العلامة الزرقاء</h2>
            <input type="text" placeholder="بحث عن مستخدم..." className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm focus:outline-none" />
          </div>
          
          {users.map(user => (
            <div key={user.id} className="flex items-center justify-between rounded-lg border border-zinc-800 bg-[#18181b] p-4">
              <div className="flex items-center gap-3">
                <h3 className="font-medium flex items-center gap-2">
                  {user.name}
                  {user.isVerified && <img src="/assets/facebook-verified.png" alt="Verified" className="w-4 h-4" />}
                </h3>
              </div>
              <Button 
                variant={user.isVerified ? 'outline' : 'default'} 
                size="sm"
                className={!user.isVerified ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
                onClick={() => toggleVerifyStatus(user.id, user.isVerified)}
              >
                {user.isVerified ? 'إلغاء التوثيق' : 'توثيق الحساب'}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}