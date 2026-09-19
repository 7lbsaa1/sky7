import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, db } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // حفظ بيانات المستخدم في قاعدة البيانات
      await set(ref(db, `users/${user.uid}`), {
        name: name,
        email: email,
        avatarBase64: "", // سيتم تحديثها لاحقاً من البروفايل
        isVerified: false,
        isBlocked: false,
        role: "user" // يمكن تغييرها إلى admin للوحة التحكم
      });
      
      navigate('/');
    } catch (error) {
      alert("حدث خطأ أثناء إنشاء الحساب.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-[#18181b] p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-bold">إنشاء حساب جديد</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">الاسم</Label>
            <Input id="name" type="text" placeholder="عمر أشرف السيد فرحات" required onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input id="email" type="email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">إنشاء حساب</Button>
        </form>
        <p className="mt-4 text-center text-sm text-zinc-400">
          لديك حساب بالفعل؟ <Link to="/login" className="text-blue-500 hover:underline">تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
}