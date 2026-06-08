'use client';

import { Section } from '@/data/section-order';

interface SectionTabsProps {
  sections: Section[];
  activeSection: Section | null;
  onSectionChange: (section: Section) => void;
  sectionLabels: Record<Section, string>;
}

export function SectionTabs({
  sections,
  activeSection,
  onSectionChange,
  sectionLabels,
}: SectionTabsProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-12 border-b border-zinc-200 pb-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className={`px-4 py-2 font-serif text-sm tracking-wide uppercase transition-all ${
            activeSection === section
              ? 'text-zinc-900 border-b-2 border-zinc-900'
              : 'text-zinc-500 hover:text-zinc-700'
          }`}
        >
          {sectionLabels[section]}
        </button>
      ))}
    </div>
  );
}
