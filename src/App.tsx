import { TermsSummarizer } from "@/components/TermSummarizer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Terms & Conditions Simplified
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please paste your lengthy terms and conditions below. I will then
            provide you with a clear, easy-to-understand summary of the key
            points,
            <em className="text-orange-700 px-1.5 not-italic font-medium text-base">
              highlighting any critical information
            </em>
            you need to be aware of.
          </p>
        </div>
        <TermsSummarizer />
      </div>

      <Toaster />
    </main>
  );
}

export default App;
