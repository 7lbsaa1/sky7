export default function BlockedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-center p-4">
      <div className="rounded-2xl border border-red-900/50 bg-red-950/20 p-8 max-w-md w-full">
        <svg className="mx-auto mb-4 h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h1 className="mb-2 text-2xl font-bold text-red-500">تم حظر حسابك</h1>
        <p className="mb-8 text-zinc-400 text-sm">
          لقد تم تعليق حسابك بسبب مخالفة شروط الاستخدام. للاستفسار أو تقديم التماس، يرجى التواصل مع الإدارة.
        </p>
        <a 
          href="https://www.facebook.com/profile.php?id=61584178882412&locale=ar_AR" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          تواصل مع الدعم عبر فيسبوك
        </a>
      </div>
    </div>
  );
}