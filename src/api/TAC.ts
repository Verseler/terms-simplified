import type { SummaryData } from '@/lib/type';
import { promptInstructions } from '@/data/promptInstructions';
import { formatSummary } from '@/lib/utils';
import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const groqClient = createGroq({ apiKey: import.meta.env.VITE_GROQ_API_KEY });


export const summarizeTAC = async (content: string): Promise<SummaryData> => {
  const prompt = `${promptInstructions} Content to analyze:${content}`;

  
const { text } = await generateText({
  model: groqClient('llama-3.3-70b-versatile'),
  prompt: prompt,
});

  return formatSummary(text);
}