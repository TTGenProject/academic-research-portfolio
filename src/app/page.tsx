'use client';

import { useState } from 'react';
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { SectionTabs } from "@/components/section-tabs";
import { ResearchTopics } from "@/components/research-topics";
import { researchTopics } from "@/data/research-topics";

const SECTION_LABELS: Record<Section, string> = {
  [Section.News]: 'News',
  [Section.Education]: 'Education',
  [Section.Publication]: 'Publications',
  [Section.Experience]: 'Experience',
  [Section.Portfolio]: 'Portfolio',
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>(
    sectionOrder.length > 0 ? sectionOrder[0] : null
  );

  const renderSectionContent = (sectionName: Section) => {
    switch (sectionName) {
      case Section.News:
        return newsData.length > 0 ? (
          <div className="space-y-12">
            {newsData.map((news, index) => (
              <div key={index}>
                <NewsEntry news={news} />
              </div>
            ))}
          </div>
        ) : null;
      case Section.Education:
        return educationData.length > 0 ? (
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <EducationEntry key={index} education={education} />
            ))}
          </div>
        ) : null;
      case Section.Publication:
        return publicationData.length > 0 ? (
          <div className="space-y-12">
            {publicationData.map((publication, index) => (
              <div key={index}>
                <PublicationEntry publication={publication} />
                {index < publicationData.length - 1 && (
                  <div className="h-px bg-zinc-200 my-8" />
                )}
              </div>
            ))}
          </div>
        ) : null;
      case Section.Experience:
        return experienceData.length > 0 ? (
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <ExperienceEntry key={index} experience={experience} />
            ))}
          </div>
        ) : null;
      case Section.Portfolio:
        return portfolioData.length > 0 ? (
          <div className="space-y-12">
            {portfolioData.map((portfolio, index) => (
              <PortfolioEntry key={index} portfolio={portfolio} />
            ))}
          </div>
        ) : null;
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-16 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-12">
              <ProfileSection aboutMe={aboutMe} />
              
              {/* Research Topics */}
              <ResearchTopics topics={researchTopics} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-8 space-y-16">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Section Tabs */}
            <SectionTabs
              sections={sectionOrder.filter(
                (section) =>
                  (section === Section.News && newsData.length > 0) ||
                  (section === Section.Education && educationData.length > 0) ||
                  (section === Section.Publication && publicationData.length > 0) ||
                  (section === Section.Experience && experienceData.length > 0) ||
                  (section === Section.Portfolio && portfolioData.length > 0)
              )}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              sectionLabels={SECTION_LABELS}
            />

            {/* Active Section Content */}
            {activeSection && renderSectionContent(activeSection)}

          </div>
        </div>
      </div>
    </div>
  );
}
