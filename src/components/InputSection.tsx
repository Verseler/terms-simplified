import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Trash2 } from "lucide-react";
import WordCharCountStats from "@/components/WordCharCountStats";
import { wordCount } from "@/lib/utils";

type InputSectionProps = {
  inputText: string;
  setInputText: (text: string) => void;
  onSummarize: () => void;
  onClear: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export function InputSection({
  inputText,
  setInputText,
  onSummarize,
  onClear,
  isLoading,
  disabled,
}: InputSectionProps) {
  const wordLength = wordCount(inputText);
  const charLength = inputText.length;

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-700">
          <FileText className="h-5 w-5" />
          Input Terms & Conditions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Textarea
            placeholder="Paste your terms and conditions here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[300px] max-h-96 md:max-h-[35rem] resize-none focus:ring-orange-500 focus:border-orange-500"
          />
          {inputText && (
            <WordCharCountStats
              wordLength={wordLength}
              charLength={charLength}
            />
          )}
        </div>

        <div className="flex gap-2">
          <Button
            onClick={onSummarize}
            disabled={disabled || isLoading}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Summarizing...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Summarize
              </>
            )}
          </Button>

          {inputText && (
            <Button
              onClick={onClear}
              variant="outline"
              className="border-orange-200 text-orange-700 hover:bg-orange-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
