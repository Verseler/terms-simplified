import { useEffect, useState } from "react";
import { OutputSection } from "@/components/OutputSection";
import { InputSection } from "@/components/InputSection";
import { useMutation } from "@tanstack/react-query";
import { summarizeTAC } from "@/api/TAC";
import { toast } from "sonner";

export function TermsSummarizer() {
  const [inputText, setInputText] = useState("");
  const { data, mutate, isPending, error, isError } = useMutation({
    mutationFn: summarizeTAC,
  });

  useEffect(() => {
    if (isError) {
      toast.error(error?.message, {
        description: "Please try again later.",
        className: "!bg-red-500 !text-white",
        position: "top-center",
      });
    }
  }, [isError]);

  const handleSummarize = async () => {
    if (!inputText.trim()) return;

    mutate(inputText);
  };

  const handleClear = () => setInputText("");

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <InputSection
          inputText={inputText}
          setInputText={setInputText}
          onSummarize={handleSummarize}
          onClear={handleClear}
          isLoading={isPending}
          disabled={!inputText.trim()}
        />

        <OutputSection summaryData={data} isLoading={isPending} />
      </div>
    </div>
  );
}
