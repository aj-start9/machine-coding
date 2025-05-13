import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-6 sm:p-10 bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-sans">
      {/* Header */}
      <header className="flex flex-col items-center justify-center gap-2 mb-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={140}
          height={30}
          priority
        />
        <h1 className="text-2xl font-bold tracking-tight text-center">Machine Coding Practice Hub</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Select a project to open
        </p>
      </header>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 flex-1">
        {/* Example Project Card */}
        <Link
          href="/interactive-diagonal"
          className="h-28 group p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm hover:shadow-md transition hover:scale-[1.02] flex flex-col items-center text-center"
        >
          <div className="rounded-md bg-gray-100 dark:bg-gray-900 p-2 mb-2">
            <Image
              src="/file.svg"
              alt="Project Icon"
              width={24}
              height={24}
              className="group-hover:rotate-6 transition"
            />
          </div>
          <h2 className="text-sm font-semibold group-hover:text-primary">Interactive Diagonal</h2>
        </Link>
        <Link href="/nested-checkbox" className="h-28 group p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm hover:shadow-md transition hover:scale-[1.02] flex flex-col items-center text-center">
          <div className="rounded-md bg-gray-100 dark:bg-gray-900 p-2 mb-2">
            <Image src="/file.svg" alt="Project Icon" width={24} height={24} className="group-hover:rotate-6 transition" />
          </div>
          <h2 className="text-sm font-semibold group-hover:text-primary">Nested Checkbox</h2>
        </Link>
      </main>
    </div>
  );
}
