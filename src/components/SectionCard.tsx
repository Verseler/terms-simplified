import type { Section } from "@/lib/type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyPointItem } from "@/components/KeyPointItem";
import { Badge } from "@/components/ui/badge";
import { FileCheckIcon } from "lucide-react";
import { IMPORTANCE_COLORS } from "@/data/summaryColors";
import { SECTION_ICONS } from "@/data/summaryIcons";

export function SectionCard({ section }: { section: Section }) {
  const IconComponent =
    SECTION_ICONS[section.id as keyof typeof SECTION_ICONS] || FileCheckIcon;
  const criticalPoints = section.keyPoints?.filter((point) => point.critical);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <IconComponent className="h-4 w-4 text-orange-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {section.title}
              </CardTitle>
              {section.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {section.description}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {criticalPoints?.length > 0 && (
              <Badge variant="destructive" className="text-xs">
                {criticalPoints?.length} critical
              </Badge>
            )}
            <Badge
              variant="outline"
              className={`text-xs ${IMPORTANCE_COLORS[section.importance]}`}
            >
              {section.importance}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {section.keyPoints?.map((keyPoint, index) => (
          <KeyPointItem key={index} keyPoint={keyPoint} />
        ))}
      </CardContent>
    </Card>
  );
}
