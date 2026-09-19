import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // التوجيه للصفحة الرئيسية بعد الدخول
    } catch (error) {
      alert("خطأ في بيانات الدخول، تأكد من الإيميل والباسورد.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-[#18181b] p-8 shadow-xl">
        <div className="mb-8 text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/7978/7978734.png" alt="Sky7" className="mx-auto mb-3 w-16 h-16" />
          <h1 className="text-2xl font-bold">تسجيل الدخول إلى Sky7</h1>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input id="email" type="email" placeholder="example@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">دخول</Button>
        </form>
        
        <p className="mt-4 text-center text-sm text-zinc-400">
          ليس لديك حساب؟ <Link to="/register" className="text-blue-500 hover:underline">إنشاء حساب جديد</Link>
        </p>
      </div>
    </div>
  );
}import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // التوجيه للصفحة الرئيسية بعد الدخول
    } catch (error) {
      alert("خطأ في بيانات الدخول، تأكد من الإيميل والباسورد.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-[#18181b] p-8 shadow-xl">
        <div className="mb-8 text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/7978/7978734.png" alt="Sky7" className="mx-auto mb-3 w-16 h-16" />
          <h1 className="text-2xl font-bold">تسجيل الدخول إلى Sky7</h1>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input id="email" type="email" placeholder="example@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">دخول</Button>
        </form>
        
        <p className="mt-4 text-center text-sm text-zinc-400">
          ليس لديك حساب؟ <Link to="/register" className="text-blue-500 hover:underline">إنشاء حساب جديد</Link>
        </p>
      </div>
    </div>
  );
}