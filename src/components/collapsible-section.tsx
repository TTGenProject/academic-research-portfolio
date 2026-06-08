'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full group flex items-center justify-between py-4 border-b border-zinc-200 hover:border-zinc-400 transition-colors"
      >
        <h2 className="font-serif text-lg tracking-wide uppercase text-zinc-900 group-hover:text-zinc-700 transition-colors">
          {title}
        </h2>
        <ChevronDown
          className={`w-5 h-5 text-zinc-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="space-y-12 pl-4 animate-in fade-in-50 duration-300">
          {children}
        </div>
      )}
    </div>
  );
}
