'use client';

import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const link = 'cloudplus.pro';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="bloom-light bloom-1"></div>
      <div className="bloom-light bloom-2"></div>
      <div className="bloom-light bloom-3"></div>
      <div className="bloom-light bloom-4"></div>
      <div className="bloom-light bloom-5"></div>
      
      <div className="relative z-10 text-center">
        <button
          onClick={copyToClipboard}
          className="text-4xl font-medium text-white transition-opacity hover:opacity-70 cursor-pointer font-mono"
        >
          @cl0ud-plus
        </button>
        
        {copied && (
          <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-white/60">
            Copied!
          </span>
        )}
      </div>
    </main>
  );
}

