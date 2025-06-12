import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SummaryData } from "@/lib/type";
import { FileCheckIcon } from "lucide-react";
import { SectionCard } from "@/components/SectionCard";
import { getCriticalSections, getTotalCriticalPoints } from "@/lib/utils";
import OverviewCard from "./OverviewCard";
import StatCard from "./StatCard";

type OutputSectionProps = {
  summaryData: SummaryData | undefined;
  isLoading: boolean;
};

export function OutputSection({ summaryData, isLoading }: OutputSectionProps) {
  if (isLoading) {
    return (
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <FileCheckIcon className="h-5 w-5" />
            Simplified Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="space-y-2 mt-6">
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-4/5"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!summaryData) {
    return (
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <FileCheckIcon className="h-5 w-5" />
            Simplified Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-gray-500">
            <FileCheckIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>Your simplified summary will appear here</p>
            <p className="text-sm mt-1">
              Enter terms and conditions to get started
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const criticalSections = getCriticalSections(summaryData);
  const totalCriticalPoints = getTotalCriticalPoints(summaryData);

  return (
    <div className="space-y-6">
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <FileCheckIcon className="h-5 w-5" />
            Simplified Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <OverviewCard
            title="Overview"
            description={summaryData.summary.overview}
          />

          <div className="grid grid-cols-3 gap-4 mb-4">
            <StatCard
              label="Sections"
              value={summaryData.summary.sections?.length}
              color="gray"
            />
            <StatCard
              label="High Priority"
              value={criticalSections?.length}
              color="red"
            />
            <StatCard
              label="Critical Points"
              value={totalCriticalPoints}
              color="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Sections */}
      <div className="space-y-4">
        {summaryData.summary.sections?.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>

      {/* Disclaimer */}
      <Card>
        <CardContent className="py-0 px-4">
          <p className="text-xs text-gray-600 text-center">
            {summaryData.summary.disclaimer}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
