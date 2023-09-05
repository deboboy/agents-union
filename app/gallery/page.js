// app/gallery/page.js
import Link from 'next/link';
import HFGenerate from '../../components/hugging-face';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <header className="p-4 font-mono text-sm">
        <Link href="/">
          Decentralized Agents Organization
        </Link>
      </header>
      <HFGenerate />
    </div>
  );
}