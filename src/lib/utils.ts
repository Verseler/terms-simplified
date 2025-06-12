import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Section, SummaryData } from "@/lib/type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wordCount(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}

export function formatText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
}

export function formatSummary(summary: string): SummaryData {
  const cleanedString = summary.replace(/^```json\s*/i, '').replace(/```$/, '');  

  return JSON.parse(cleanedString);
}

export function getTotalCriticalPoints(summaryData: SummaryData): number {
  if (!summaryData || !summaryData.summary || !summaryData.summary.sections) {
    return 0;
  }

  return summaryData.summary.sections?.reduce(
    (acc, section) =>
      acc + section.keyPoints?.filter((point) => point.critical)?.length,
    0
  );
}

export function getCriticalSections(summaryData: SummaryData): Section[] {
  if (!summaryData || !summaryData.summary || !summaryData.summary.sections) {
    return [];
  }

  return summaryData.summary.sections?.filter(
    (s) => s.importance === "high"
  );
}