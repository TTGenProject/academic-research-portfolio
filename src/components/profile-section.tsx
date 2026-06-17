'use client';

import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
  Download,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (aboutMe?.imageUrl) {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
      setImageUrl(`${basePath}${aboutMe.imageUrl}`);
    }
  }, [aboutMe?.imageUrl]);

  if (!aboutMe) {
    return null;
  }

  return (
    <div className="space-y-8">
      {imageUrl && (
        <div className="w-full space-y-2">
          <img
            src={imageUrl}
            alt={aboutMe.name}
            className="w-full max-w-xs h-auto rounded-xl object-cover"
          />
          {aboutMe.imageDownloadUrl && (
            <a
              href={aboutMe.imageDownloadUrl}
              download
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <Download
                size={12}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Download</span>
            </a>
          )}
        </div>
      )}
      <div className="w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase mb-6">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300 break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="flex gap-6 mb-6">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
        </div>
        <div className="space-y-2.5">
          <div>
            <a
              href={`mailto:${aboutMe.email}`}
              className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={14} className="flex-shrink-0" />
              <span className="break-words">{aboutMe.email}</span>
            </a>
          </div>
          {aboutMe.googleScholarUrl && (
            <div>
              <a
                href={aboutMe.googleScholarUrl}
                className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} className="flex-shrink-0" />
                <span>Google Scholar</span>
              </a>
            </div>
          )}
          {aboutMe.twitterUsername && (
            <div>
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={14} className="flex-shrink-0" />
                <span>@{aboutMe.twitterUsername}</span>
              </a>
            </div>
          )}
          {aboutMe.githubUsername && (
            <div>
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} className="flex-shrink-0" />
                <span className="break-words">github.com/{aboutMe.githubUsername}</span>
              </a>
            </div>
          )}
          {aboutMe.linkedinUsername && (
            <div>
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} className="flex-shrink-0" />
                <span className="break-words">linkedin.com/in/{aboutMe.linkedinUsername}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
