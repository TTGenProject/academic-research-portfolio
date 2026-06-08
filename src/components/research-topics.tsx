'use client';

import { ResearchTopic } from '@/data/research-topics';

interface ResearchTopicsProps {
  topics: ResearchTopic[];
}

export function ResearchTopics({ topics }: ResearchTopicsProps) {
  return (
    <section className="space-y-4 border-t border-zinc-200 pt-8">
      <h3 className="font-serif text-sm tracking-wide uppercase text-zinc-900">
        Research Topics
      </h3>

      {/* Topic List */}
      <ul className="space-y-2.5">
        {topics.map((topic) => (
          <li key={topic.id} className="text-xs text-zinc-700 leading-relaxed">
            <span className="text-zinc-500">•</span>
            <span className="ml-2">{topic.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

