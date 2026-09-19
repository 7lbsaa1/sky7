// Blocked Page Component (block.jsx)
export default function BlockedPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">تم حظر حسابك</h1>
        <p className="mb-6">للاستفسار، يرجى التواصل مع إدارة الموقع.</p>
        <a 
          href="https://www.facebook.com/profile.php?id=61584178882412&locale=ar_AR" 
          target="_blank" 
          className="bg-blue-600 px-6 py-2 rounded-md font-bold"
        >
          التواصل عبر فيسبوك
        </a>
      </div>
    </div>
  );
}