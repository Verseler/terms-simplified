import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string | number;
  color: "gray" | "orange" | "red";
};

export default function StatCard({
  label,
  value,
  color = "gray",
}: StatCardProps) {
  const colorStyle = {
    gray: {
      value: "text-gray-900",
      label: "text-gray-600",
    },
    orange: {
      value: "text-red-600",
      label: "text-red-600",
    },
    red: {
      value: "text-orange-600",
      label: "text-orange-600",
    },
  } as const;

  return (
    <div className="text-center p-3 bg-gray-50 rounded-lg">
      <div className={cn("text-2xl font-bold", colorStyle[color].value)}>
        {value}
      </div>
      <div className={cn("text-xs", colorStyle[color].label)}>{label}</div>
    </div>
  );
}
