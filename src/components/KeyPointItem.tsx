import type { KeyPoint } from "@/lib/type";
import { AlertTriangleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatText } from "@/lib/utils";
import { TYPE_COLORS } from "@/data/summaryColors";

export function KeyPointItem({ keyPoint }: { keyPoint: KeyPoint }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center gap-2 mt-0.5">
        {keyPoint.critical && (
          <AlertTriangleIcon className="h-3 w-3 text-red-500 flex-shrink-0" />
        )}
        <Badge
          variant="outline"
          className={`text-xs px-2 py-0.5 ${TYPE_COLORS[keyPoint.type]}`}
        >
          {keyPoint.type}
        </Badge>
      </div>
      <p
        className="text-sm text-gray-700 leading-relaxed flex-1"
        dangerouslySetInnerHTML={{ __html: formatText(keyPoint.text) }}
      />
    </div>
  );
}
