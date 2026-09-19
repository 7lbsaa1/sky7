import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Button } from './ui/button';

export default function Navbar({ user }: { user: any }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#18181b] border-b border-zinc-800 z-50 flex items-center justify-between px-6">
      <Link to="/" className="flex items-center gap-2">
        <img src="https://cdn-icons-png.flaticon.com/128/7978/7978734.png" alt="Sky7" className="w-8 h-8" />
        <span className="font-bold text-xl tracking-wide text-white">Sky7</span>
      </Link>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-zinc-300">
          {user?.displayName || user?.email?.split('@')[0]}
        </span>
        <Button variant="outline" size="sm" onClick={handleLogout} className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
          خروج
        </Button>
      </div>
    </header>
  );
}