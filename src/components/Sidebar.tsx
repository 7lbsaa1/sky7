import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { name: 'الرئيسية', path: '/', icon: '🏠' },
    { name: 'المفضلة', path: '/favorites', icon: '🔖' },
    { name: 'الملف الشخصي', path: '/profile', icon: '👤' },
    { name: 'لوحة التحكم', path: '/admin', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-[#18181b] border-l border-zinc-800 p-4 hidden md:flex flex-col gap-2 shrink-0">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-white'
            }`
          }
        >
          <span>{link.icon}</span>
          <span>{link.name}</span>
        </NavLink>
      ))}
    </aside>
  );
}