import type { SummaryData } from '@/lib/type';
import { promptInstructions } from '@/data/promptInstructions';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { formatSummary } from '@/lib/utils';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const summarizeTAC = async (content: string): Promise<SummaryData> => {
  const prompt = `${promptInstructions} Content to analyze:${content}`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const summary = response.text();

  return formatSummary(summary);
}